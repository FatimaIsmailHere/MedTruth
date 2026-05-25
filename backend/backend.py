from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = Flask(__name__)
CORS(app)

print("Loading model...")
model_path = "./best_model_combined"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForSequenceClassification.from_pretrained(model_path)
print("✓ Model loaded!")

# CORRECT label mapping
label_map = {0: "reliable", 1: "uncertain", 2: "myth"}

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        claim = request.json.get('claim')
        
        if not claim:
            return jsonify({'error': 'No claim provided'}), 400
        
        inputs = tokenizer(claim, return_tensors="pt", padding=True, truncation=True, max_length=128)
        
        with torch.no_grad():
            outputs = model(**inputs)
        
        logits = outputs.logits
        probs = torch.softmax(logits, dim=-1)
        label_id = torch.argmax(probs, dim=-1).item()
        confidence = probs[0][label_id].item()
        
        return jsonify({
            'claim': claim,
            'label': label_map[label_id],
            'confidence': round(confidence, 4)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)