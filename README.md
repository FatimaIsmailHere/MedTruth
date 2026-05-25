# MedTruth: AI-Powered Health Misinformation Detection

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Training Results](#training-results)
4. [Installation & Setup](#installation--setup)
5. [How to Run](#how-to-run)
6. [API Documentation](#api-documentation)
7. [Project Structure](#project-structure)
8. [Technologies Used](#technologies-used)
9. [Results & Analysis](#results--analysis)
10. [Team Members](#team-members)

---

## 🎯 Project Overview

**MedTruth** is an AI-powered application that detects health misinformation by classifying medical claims into three categories:
- **Myth** (False/Misleading)
- **Uncertain** (Mixed evidence/Unverified)
- **Reliable** (Evidence-based/Verified)

The system uses a fine-tuned DistilBERT model achieving **92.31% accuracy** on a combined dataset of 1,751 health claims.

### Key Features
✅ Real-time claim verification
✅ High accuracy (92.31%)
✅ Fast inference (~50ms per claim)
✅ User-friendly web interface
✅ Production-ready API

---

## 🏗️ Architecture

### System Diagram
User Input (React Frontend)
↓
HTTP POST Request
↓
Flask Backend API
↓
DistilBERT Model (best_model_combined)
↓
Classification + Confidence Score
↓
HTTP JSON Response
↓
Display Result (React Frontend)

### Components

#### 1. Backend (Python Flask)
- **Framework**: Flask + Flask-CORS
- **Model**: DistilBERT-base-uncased (fine-tuned)
- **Size**: 268MB
- **Speed**: 60% faster than BERT
- **Port**: 5000
- **Endpoint**: `/api/predict`

#### 2. Frontend (React + Vite)
- **Framework**: React 19.2
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React Icons
- **Animations**: Framer Motion
- **Port**: 5173

---

## 📊 Training Results

### Dataset Statistics
| Dataset | Train Samples | Eval Samples | Myth | Uncertain | Reliable |
|---------|---------------|--------------|------|-----------|----------|
| Monant Medical | 655 | 39 | 378 | 202 | 75 |
| Medtruth Health | 96 | 39 | 54 | 32 | 10 |
| Covid Myths | 1,000 | 39 | 590 | 0 | 410 |
| **Combined** | **1,751** | **39** | **1,022** | **234** | **495** |

### Method 1: Sequential Training (Fresh Model per Dataset)
| Dataset | Accuracy | F1-Score | Precision | Recall |
|---------|----------|----------|-----------|--------|
| Monant Medical | 43.59% | 0.2647 | 0.1900 | 43.59% |
| Medtruth Health | 46.15% | 0.3179 | 0.6309 | 46.15% |
| Covid Myths | 43.59% | 0.2647 | 0.1900 | 43.59% |
| **Average** | **44.44%** | **0.2824** | **0.3403** | **44.44%** |

### Method 2: Combined Training (Single Model) ✅ **BEST**
| Dataset | Accuracy | F1-Score | Precision | Recall |
|---------|----------|----------|-----------|--------|
| All Combined | **92.31%** | **0.9097** | **0.9346** | **0.9231** |

### Key Findings
- **Improvement**: Method 2 outperformed Method 1 by **47.87%**
- **Reason**: More diverse training data (1,751 samples vs domain-specific) improves generalization
- **Best Model**: `best_model_combined` (use this in production)

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

## 📈 Results & Analysis

### Performance Comparison

#### Accuracy Improvement
Method 1 (Sequential):  44.44%  ████
Method 2 (Combined):    92.31%  ██████████████████████
Improvement:            +47.87% ✅

#### Why Method 2 Won
1. **More Data**: 1,751 combined samples vs domain-specific
2. **Diversity**: Learns patterns from multiple health domains
3. **Generalization**: Better performance on unseen claims
4. **Single Model**: Easier deployment and maintenance

#### Model Characteristics
- **Parameters**: 67M
- **Size**: 268MB
- **Inference Speed**: ~50ms per claim (CPU)
- **Memory**: ~2GB RAM required
- **Latency**: <100ms (production)

---

## 👥 Team Members

| Role | Name | Student ID | Responsibility |
|------|------|-----------|-----------------|
| Team Lead | - | - | Project coordination |
| NLP & Model Training | Fatima Ismail | S2024332006 | Fine-tuning, evaluation |
| Frontend Developer | - | - | React UI, components |
| Backend Developer | - | - | Flask API, integration |
| Data Preparation | Team | - | Dataset cleaning |

---

## 🔄 Workflow

### Training Workflow

Data Preparation
↓
Load 3 Datasets
↓
Standardize Labels
↓
Method 1: Train Sequential (3 models)
↓
Method 2: Train Combined (1 model)
↓
Evaluate Both Methods
↓
Compare Results
↓
Select Best Model (92.31% accuracy)


### Deployment Workflow

Backend Ready (Flask running)
↓
Frontend Ready (React running)
↓
API Connected
↓
Test with Sample Claims
↓
Deploy to Production


---

## 📝 Training Parameters

| Parameter | Value |
|-----------|-------|
| Base Model | distilbert-base-uncased |
| Task | Text Classification (3 classes) |
| Optimizer | AdamW |
| Learning Rate | 2e-5 |
| Batch Size | 8 |
| Epochs | 2 |
| Max Length | 128 tokens |
| Weight Decay | 0.01 |
| Evaluation Strategy | Every epoch |
| Train/Eval Split | 80/20 |
| Random Seed | 42 |

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

---

**Last Updated**: May 26, 2026
**Version**: 1.0
**Status**: ✅ Complete & Production Ready







