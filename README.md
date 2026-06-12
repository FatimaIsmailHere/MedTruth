# 🎯 Project Overview

**MedTruth** is an AI-powered health misinformation detection system that classifies medical claims into three categories:

- **Myth** — False or misleading health information  
- **Uncertain** — Claims with insufficient or conflicting evidence  
- **Reliable** — Evidence-based and medically verified information  

The system uses a fine-tuned **DistilBERT model** trained on multiple health misinformation datasets and achieves **86.97% accuracy** on evaluation data.

---

# ✨ Key Features

- Medical misinformation detection  
- Three-class classification (Myth, Uncertain, Reliable)  
- Fine-tuned DistilBERT model  
- REST API using Flask  
- Modern React frontend  
- Fast inference and deployment-ready architecture  

---

# 📊 Training Results

## Dataset Statistics

| Dataset | Train Samples |
|----------|--------------|
| Monant Medical | 657 |
| MedTruth Health | 10000 |
| Covid Myths | 1017 |
| **Combined Dataset** | **11674** |

---

## ⚙️ Method 1: Individual Dataset Training

Each dataset was used to train a separate DistilBERT model from scratch.

| Dataset | Accuracy | F1-Score | Precision | Recall |
|----------|----------|----------|-----------|--------|
| Monant Medical | 33.47% | 0.1678 | 0.1120 | 33.47% |
| Covid Myths | 33.47% | 0.1678 | 0.1120 | 33.47% |
| MedTruth Health | 86.97% | 0.8647 | 0.9062 | 86.97% |
| **Method 1 Average** | **51.30%** | **0.4001** | **0.3767** | **51.30%** |

---

## 🚀 Method 2: Combined Dataset Training (Best Model)

All datasets were merged into a single training set and a single DistilBERT model was trained.

| Dataset | Accuracy | F1-Score | Precision | Recall |
|----------|----------|----------|-----------|--------|
| Combined Dataset | 86.97% | 0.8647 | 0.9062 | 86.97% |

---

## 📈 Performance Comparison

| Metric | Method 1 Average | Method 2 Combined |
|--------|-----------------|------------------|
| Accuracy | 51.30% | 86.97% |
| F1 Score | 0.4001 | 0.8647 |
| Precision | 0.3767 | 0.9062 |
| Recall | 51.30% | 86.97% |

---

# 📊 Results & Analysis

## 🔍 Key Findings

### 1. Combined Training Achieved the Best Overall Performance

Training on the merged dataset produced the strongest and most consistent results:

- Accuracy: **86.97%**
- F1-Score: **0.8647**
- Precision: **0.9062**
- Recall: **86.97%**

---

### 2. Evidence of Overfitting in Method 1

The Monant Medical and Covid Myths models achieved only **33.47% accuracy** when trained individually.

This suggests dataset-specific learning without generalization.

**Signs of overfitting:**
- Low evaluation accuracy  
- Very low precision (0.1120)  
- Poor F1-score (0.1678)  

---

### 3. MedTruth Dataset Demonstrated Strong Generalization

- Accuracy: **86.97%**
- F1-Score: **0.8647**
- Precision: **0.9062**

This indicates high-quality and consistent labeling.

---

### 4. Benefits of Combined Training

- Greater diversity of medical claims  
- Reduced dataset-specific bias  
- Better model robustness  
- Improved generalization capability  

Although performance matches MedTruth-only training, the combined dataset model is more suitable for deployment due to higher data volume.

---

# 📝 Training Parameters

| Parameter | Value |
|-----------|-------|
| Base Model | distilbert-base-uncased |
| Task | Multi-Class Text Classification |
| Classes | 3 |
| Labels | Myth, Uncertain, Reliable |
| Optimizer | AdamW |
| Learning Rate | 2e-5 |
| Batch Size | 8 |
| Epochs | 2 |
| Maximum Sequence Length | 128 |
| Evaluation Strategy | Epoch |
| Save Strategy | Epoch |
| Random Seed | 42 |

---

# 🏆 Final Model Selection

**Selected Model:** `saved_model_combined`

## Final Metrics

| Metric | Score |
|--------|-------|
| Accuracy | 86.97% |
| F1-Score | 0.8647 |
| Precision | 0.9062 |
| Recall | 86.97% |

## Reason for Selection
- Best overall performance  
- Trained on the largest dataset  
- More robust to different health claim types  
- Better suitability for deployment  
- Reduced risk of dataset-specific bias  

---
## 🚀 Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- Git
- 4GB RAM minimum
- 2GB disk space

### Backend Setup

```bash
# Navigate to backend folder
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt
```

**requirements.txt:**
flask==3.1.3
flask-cors==6.0.2
transformers==4.57.6
torch==2.10.0

### Frontend Setup

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Install dev dependencies
npm install --save-dev vite @vitejs/plugin-react tailwindcss @tailwindcss/vite
```

---

## 🎮 How to Run

### Start Backend (Terminal 1)
```bash
cd backend
python backend.py
```
Expected output:
Loading model...
✓ Model loaded!

Running on http://127.0.0.1:5000


### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Expected output:
VITE v8.0.12  ready in 500 ms
➜  Local:   http://localhost:5173/
➜  press h to show help

### Access Application
Open browser and go to: `http://localhost:5173`

---

## 📡 API Documentation

### Endpoint: POST `/api/predict`

**Request:**
```json
{
  "claim": "COVID vaccines contain microchips"
}
```

**Response (Success):**
```json
{
  "claim": "COVID vaccines contain microchips",
  "label": "myth",
  "confidence": 0.9876
}
```

**Response (Error):**
```json
{
  "error": "No claim provided"
}
```

**Status Codes:**
- `200`: Success
- `400`: Bad request (missing claim)
- `500`: Server error

**Label Mapping:**
0 = "myth" (False/Misleading)
1 = "uncertain" (Mixed evidence)
2 = "reliable" (Evidence-based)

---



## 💻 Technologies Used

### Machine Learning
- **PyTorch**: Deep learning framework
- **Transformers**: Hugging Face library for NLP models
- **DistilBERT**: Efficient BERT variant
- **scikit-learn**: Metrics and evaluation

### Backend
- **Flask**: Lightweight web framework
- **Flask-CORS**: Cross-origin requests
- **Gunicorn**: Production WSGI server

### Frontend
- **React 19.2**: UI library
- **Vite 8.0**: Build tool
- **Tailwind CSS 4.3**: Utility-first styling
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Development
- **Google Colab**: Training environment (free GPU)
- **Jupyter Notebook**: Experimentation
- **Git**: Version control

---

## 🐛 Troubleshooting

### Backend Issues

**Error: Port 5000 already in use**
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>
```

**Error: Model not found**
- Ensure `best_model_combined/` folder exists in backend/
- Check folder contains `config.json` and `model.safetensors`

### Frontend Issues

**Error: Cannot connect to backend**
- Verify backend is running on http://127.0.0.1:5000
- Check CORS is enabled in Flask
- Verify `http://127.0.0.1:5000` in fetch URL (not localhost)

**Build error**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📦 Deployment

### Local Development
```bash
# Terminal 1: Backend
cd backend && python backend.py

# Terminal 2: Frontend
cd frontend && npm run dev
```

### Production Deployment

**Backend (using Gunicorn):**
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 backend:app
```

**Frontend (Build):**
```bash
npm run build
# Deploy dist/ folder to web server
```

---

## 📚 References

- [Transformers Documentation](https://huggingface.co/docs/transformers/)
- [DistilBERT Paper](https://arxiv.org/abs/1910.01108)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://react.dev/)

---

## 📄 License
Educational Project - University Assignment

---

## ✅ Checklist

- [x] Data collection & preparation
- [x] Model training (Method 1 & 2)
- [x] Model evaluation & comparison
- [x] Backend API development
- [x] Frontend UI development
- [x] API integration
- [x] Testing
- [x] Documentation


# ✅ Conclusion

**MedTruth** successfully demonstrates the effectiveness of transformer-based NLP models for health misinformation detection.
Using **DistilBERT** and a combined dataset of medical claims, the system achieved **86.97% accuracy** while classifying claims into Myth, Uncertain, and Reliable categories.
Experimental results showed that models trained on individual datasets often suffered from overfitting and poor generalization, whereas training on a diverse combined dataset produced a more reliable and deployable solution.



**Last Updated**: May 26, 2026
**Version**: 1.0
**Status**: ✅ Complete & Production Ready




