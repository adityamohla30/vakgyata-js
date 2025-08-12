# vakgyata-js
JavaScript library for Vakgyata models (Indian speech language identification)

## Title

**vakgyata-js** – JavaScript client for Vakgyata models (Indian speech language identification)

---

## **Overview**

`vakgyata-js` is a lightweight JavaScript library (Node.js/browser compatible) that enables inference using the **Vakgyata** family of pre-trained language identification models. These models detect Indian languages from speech audio. They are built on top of wav2vec2 and fine-tuned with Layer Normalization for improved performance. ([Hugging Face][1])

---

## **Supported Models & Variants**

Vakgyata offers several variants with different parameter sizes and accuracy levels:

| Model Variant                                                   | Parameters | Accuracy |
| --------------------------------------------------------------- | ---------- | -------- |
| vakgyata-base                                                   | \~95 M     | \~95.88% |
| vakgyata-small                                                  | \~52 M     | \~95.06% |
| vakgyata-mini                                                   | \~38 M     | \~95.06% |
| vakgyata-tiny                                                   | \~24 M     | \~93.63% |
| *(Data based on Hugging Face model cards.)* ([Hugging Face][1]) |            |          |

Additionally, **open‑vakgyata** is a mid-sized variant (\~58.7 M parameters) offering slightly fewer supported languages under a different license (CC‑BY‑NC‑4.0). ([Hugging Face][2])

---

## **Language Coverage**

The Vakgyata models support identification for the following Indian languages:

* English (India) – **en-IN**
* Hindi – **hi-IN**
* Odia – **or-IN**
* Bengali – **bn-IN**
* Tamil – **ta-IN**
* Telugu – **te-IN**
* Kannada – **kn-IN**
* Malayalam – **ml-IN**
* Marathi – **mr-IN**
* Gujarati – **gu-IN**
* Punjabi – **pa-IN**
* Assamese – **as-IN**

Note: The **open‑vakgyata** variant supports the same languages except Assamese and Punjabi. ([Hugging Face][2], [Hugging Face][1])

<!--
---

## **Installation**

```bash
npm install vakgyata-js
# or
yarn add vakgyata-js
```

---

## **Usage Example (Node.js)**

```javascript
import { loadVakgyataModel, detectLanguage } from 'vakgyata-js';

async function runInference(audioBuffer) {
  // Choose model: 'vakgyata-base', 'vakgyata-small', 'vakgyata-mini', 'vakgyata-tiny', or 'open-vakgyata'
  const model = await loadVakgyataModel('vakgyata-base');

  const result = await detectLanguage(model, audioBuffer, {
    samplingRate: 16000,
    format: 'pcm16'
  });

  console.log('Detected language:', result.language);
}
```

This abstracts the following:

* Fetching model and feature extractor from Hugging Face (`AutoFeatureExtractor`, `Wav2Vec2ForSequenceClassification`)
* Preprocessing (e.g., converting audio buffer to the expected format: 16 kHz, mono PCM)
* Running inference and interpreting logits with softmax to yield the language label
  ([Hugging Face][1])

---

## **Features**

* Simplified JavaScript API for speech-based language identification
* Supports multiple model sizes to balance performance vs. speed
* Automatically downloads and loads models from Hugging Face
* Works in both Node.js and browser environments (with slight build configuration)
* Compatibility with wav2vec2-based models from Hugging Face (`transformers` + `torchaudio` stack)

---

## **Choosing the Right Variant**

* **Highest accuracy**: Use `vakgyata-base` (\~95.9%)
* **Balanced**: `vakgyata-small` or `vakgyata-mini` (\~95.1%, with lower memory footprint)
* **Lightweight/mobile**: `vakgyata-tiny` (\~93.6%)
* **Non-Commercial projects**: `open-vakgyata` (CC‑BY‑NC‑4.0 license), limited language coverage

---

## **Citations**

If you use these models in your project or research, please cite:

```
@misc{vakgyata2024,
  title={vakgyata: Language Identification for Indian Speech},
  author={OneCXI},
  year={2024},
  url={https://huggingface.co/onecxi/vakgyata-base}
}
```

(This citation is valid across variants.) ([Hugging Face][1], [Hugging Face][2])

---

## **Contributing**

Contributions are welcome — whether for adding browser-only demos, model caching strategies, error handling enhancements, or expanding supported languages. Just open an issue or PR!
-->
---

## **License**

`vakgyata-js` is Apache 2.0 licensed. 
Note that `open-vakgyata` is under CC‑BY‑NC‑4.0, which means it's free for non-commercial use only. ([Hugging Face][3])
