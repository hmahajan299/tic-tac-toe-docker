# 🎮 Tic-Tac-Toe — Dockerized with Jenkins CI/CD
 
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
 
> Classic Tic-Tac-Toe game containerized with Docker and wired into a Jenkins CI/CD pipeline — demonstrating automated build, test, and deploy workflows on a lightweight frontend project.
 
---
 
## 📌 Problem → Solution → Outcome
 
| | |
|---|---|
| **Problem** | Manual deployment of frontend projects is error-prone and slow — no automated testing, no consistent build process |
| **Solution** | Containerized the game with Docker and set up a Jenkins pipeline to automate the build → test → containerize → deploy cycle on every commit |
| **Outcome** | Every push to the repo triggers an automated pipeline that builds the Docker image and deploys the updated app — zero manual steps |
 
---
 
## 🛠️ Tech Stack
 
| Component | Technology |
|-----------|-----------|
| Application | HTML · CSS · JavaScript |
| Containerization | Docker |
| CI/CD | Jenkins |
| Pipeline | Jenkinsfile (declarative) |
 
---
 
## 🚀 Quick Start
 
```bash
# Clone
git clone https://github.com/hmahajan299/tic-tac-toe-docker.git
cd tic-tac-toe-docker
 
# Build Docker image
docker build -t tic-tac-toe .
 
# Run container
docker run -d -p 3000:80 tic-tac-toe
 
# Open in browser
# → http://localhost:3000
```
 
---
 
## ⚙️ Jenkins Pipeline Overview
 
```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') { ... }
        stage('Build Docker Image') { ... }
        stage('Test') { ... }
        stage('Push to Registry') { ... }
        stage('Deploy') { ... }
    }
}
```
 
---
 
## 🔑 DevOps Concepts Demonstrated
 
- ✅ **Dockerizing a frontend** application (HTML/JS/CSS)
- ✅ **Declarative Jenkins pipeline** with multi-stage design
- ✅ **Automated build triggers** on code push
- ✅ **Image tagging and registry** workflow
- ✅ CI/CD for non-backend applications
 
---
 
## 👤 Author
 
**Harshal Mahajan** — DevOps & Cloud Engineer
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/harshal-mahajan)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/hmahajan299)
 
