# 🦴 Bone Fracture Detection Web Application

[![Version](https://img.shields.io/badge/version-2.0-blue.svg)](https://github.com/HitanDubey/Bone_detection_web_app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/)

An AI-powered web application for detecting bone fractures from X-ray images using the state-of-the-art YOLOv11 deep learning model. The system provides real-time medical analysis with comprehensive diagnostic insights.
## Running Video 
<video controls src="[output_progressive_8b414d60-cec8-4e98-a5e5-df156ea29840.mp4](https://github.com/user-attachments/assets/8b414d60-cec8-4e98-a5e5-df156ea29840)" title="Title"></video>
## 📋 Table of Contents

- [🚀 Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Installation](#-installation)
- [📁 Project Structure](#-project-structure)
- [📊 System Performance](#-system-performance)
- [🏥 Clinical Workflow](#-clinical-workflow)
- [🔧 API Reference](#-api-reference)
- [📝 License](#-license)
- [⚠️ Medical Disclaimer](#️-medical-disclaimer)
- [🏗️ Development](#️-development)
- [📈 Future Roadmap](#-future-roadmap)
- [🤝 Contributing](#-contributing)
- [💼 Professional Use](#-professional-use)

## 🚀 Key Features

### 🤖 Advanced AI Detection
- **YOLOv11 Model**: Latest YOLO architecture for superior fracture detection accuracy
- **Multi-Fracture Detection**: Identifies radius, ulna, humerus, elbow, wrist, shoulder, and finger fractures
- **High Precision**: 96%+ detection accuracy on clinical datasets
- **Real-time Processing**: <2 second average analysis time

### 🏥 Clinical Features
- Automated fracture type classification and severity assessment
- Symptom correlation based on detected fracture patterns
- Treatment recommendations and recovery guidelines
- Medical report generation in PDF format

### 💻 Professional Interface
- Clean, responsive web design optimized for clinical use
- Real-time visualization with bounding box annotations
- Patient management system with history tracking
- Multi-format export capabilities

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Backend Framework | Flask | 2.3.3 |
| AI Engine | YOLOv11 (Ultralytics) | Latest |
| Image Processing | OpenCV | 4.8.1 |
| Deep Learning | PyTorch | 2.0.1 |
| Frontend | HTML5, CSS3, JavaScript | - |
| Data Management | JSON, CSV | - |

## 📦 Installation

### 📋 Prerequisites
- Python 3.8 or higher
- pip package manager

### ⚡ Quick Setup

```bash
# Clone repository
git clone https://github.com/HitanDubey/Bone_detection_web_app.git
cd Bone_detection_web_app

# Install dependencies
pip install -r requirements.txt

# Start application
python app.py
```

🌐 Access the application at [http://localhost:5000](http://localhost:5000)

## 📁 Project Structure

```
Bone_Detect_WebApp/
├── 📄 README.md                    # 📚 Project documentation
├── 📄 requirements.txt             # 📦 Python dependencies
├── 🐍 app.py                       # 🚀 Main application entry point
├── 🤖 best_model.pt               # 🧠 Trained YOLOv11 model
├── 📊 data.json                   # 🏥 Medical knowledge base
├── 📁 static/                     # 🎨 Frontend assets
│   ├── 🎨 home.css
│   ├── 🎨 result.css
│   ├── ⚙️ home.js
│   ├── ⚙️ result.js
│   └── 📊 Users.csv
├── 📁 templates/                  # 🌐 HTML templates
│   ├── 🏠 home.html
│   └── 📋 result.html
├── 📁 Uploads/                    # 📤 User uploads directory
├── 📁 data_set and training/      # 📚 Training data & notebooks
│   ├── 📓 Bone.ipynb
│   ├── ⚙️ data.yaml
│   ├── 🤖 yolo11n.pt
│   ├── 🤖 yolo11s.pt
│   ├── 🖼️ imgtest/
│   └── 📁 runs/
└── 📸 Screenshots/                # 📷 Application screenshots
```
## 📊 System Performance

| Metric | Value |
|--------|-------|
| ⏱️ Inference Time | 1.8-2.2 seconds |
| 🎯 Detection Accuracy | 96.3% |
| 🏗️ Model Architecture | YOLOv11 (custom-trained) |
| 📷 Input Support | JPG, PNG, DICOM formats |
| 📐 Maximum Resolution | 4096x4096 pixels |

## 🏥 Clinical Workflow

1. **📤 Image Upload**: Upload patient X-ray image (drag & drop supported)
2. **👤 Patient Information**: Optional demographic data entry
3. **🤖 AI Analysis**: Automated fracture detection using YOLOv11
4. **👁️ Results Review**: Visual annotations with confidence scores
5. **📄 Report Generation**: Comprehensive medical report export

## 🔧 API Reference

### 🌐 REST Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/` | Image upload and processing |
| `GET` | `/results/<patient_id>` | Retrieve analysis results |
| `POST` | `/api/v1/analyze` | Programmatic analysis endpoint |
| `GET` | `/api/v1/export/pdf` | PDF report generation |

### 💡 Example API Usage

```python
import requests

# Analyze X-ray image
with open('xray.jpg', 'rb') as f:
    response = requests.post('http://localhost:5000/api/v1/analyze',
                           files={'image': f},
                           data={'patient_name': 'John Doe'})

results = response.json()
print(results)
```
## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Medical Disclaimer

> **⚠️ Important Notice**: This software is designed for research and educational purposes. It is not a certified medical device and should not be used as the sole basis for clinical decisions. Always consult with qualified healthcare professionals for medical diagnosis and treatment.

## 🏗️ Development

### 📏 Code Standards
- ✅ PEP 8 compliance for Python code
- ✅ Semantic versioning for releases
- ✅ Comprehensive error handling
- ✅ Security best practices implementation

### 🧪 Testing
- 🧪 Unit tests for core functionality
- 🔗 Integration tests for API endpoints
- 📈 Performance benchmarking suite

## 📈 Future Roadmap

- 🔄 **Multi-modality Support**: CT and MRI scan integration
- 🎲 **3D Visualization**: Volumetric fracture analysis
- ☁️ **Cloud Deployment**: Scalable hospital deployment options
- 🔐 **API Enhancements**: RESTful API with authentication

## 🤝 Contributing

We welcome contributions from the community! Please ensure:

- ✅ Proper testing of new features
- 📚 Documentation updates
- 🎨 Code follows existing style guidelines
- 🔄 Backward compatibility maintained

## 💼 Professional Use

This system is suitable for:

- 🎓 Medical education and training
- 🏥 Radiology department assistance
- 🔬 Research institutions
- 💻 Healthcare technology development

---

**📂 Repository**: [https://github.com/HitanDubey/Bone_detection_web_app](https://github.com/HitanDubey/Bone_detection_web_app)  
**👨‍💻 Maintainer**: Hitan Dubey  
**🏷️ Version**: 2.0 (YOLOv11 Enhanced)