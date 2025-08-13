import fs from 'fs';
import wav from 'wav-decoder';
import { AutoProcessor, AutoModel, env } from '@xenova/transformers';

env.allowRemoteModels = true;

const LANGUAGE_MAP = {
  0: 'en-IN', 1: 'hi-IN', 2: 'or-IN', 3: 'bn-IN', 4: 'ta-IN',
  5: 'te-IN', 6: 'kn-IN', 7: 'ml-IN', 8: 'mr-IN', 9: 'gu-IN'
};

const detectLanguage = async (modelName, audioFilePath) => {
  try {
    console.log('🔄 Loading model and processor...');
    const processor = await AutoProcessor.from_pretrained(modelName);
    const model = await AutoModel.from_pretrained(modelName, { quantized: true });
    
    const buffer = fs.readFileSync(audioFilePath);
    const decoded = await wav.decode(buffer);
    const audio = decoded.channelData[0];
    
    const inputs = await processor(audio, {
      sampling_rate: 16000,
      return_tensors: 'np',
      padding: true
    });
    
    const output = await model(inputs);
    const logits = Array.from(output.logits.data);
    const maxIndex = logits.indexOf(Math.max(...logits));
    const detectedLanguage = LANGUAGE_MAP[maxIndex];
    const confidence = Math.max(...logits);
    
    console.log(`✅ Language: ${detectedLanguage}`);
    console.log(`📊 Confidence: ${confidence.toFixed(4)}`);
  } catch (error) {
    console.error('❌ Detection failed:', error.message);
  }
};

// Get command line arguments
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node index.js <model_name> <audio_file_path>');
  process.exit(1);
}

const [modelName, audioFilePath] = args;
detectLanguage(modelName, audioFilePath);
