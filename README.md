# Tic-Tac-Toe Docker Project

This is a Dockerized version of the Tic-Tac-Toe game. The project demonstrates containerization using Docker, with continuous integration and deployment (CI/CD) set up using Jenkins. The application can be run locally or deployed on a server with ease.

## Features

- Tic-Tac-Toe game implemented in [html, css, js].
- Dockerized application for easy deployment and scalability.
- Configured Docker Compose for managing multi-container setups.

## Project Structure

- `Dockerfile`: Defines the environment and instructions for building the Docker image.
- `docker-compose.yml`: Manages the multi-container Docker application, including the Tic-Tac-Toe game and Jenkins.

## Getting Started

### Prerequisites

- Docker installed on your system.
- Docker Compose installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hmahajan299/tic-tac-toe-docker.git
   cd tic-tac-toe-docker
   docker build -t tic-tac-toe .
   docker run -p 8000:80 tic-tac-toe (Optional use any one of this)
   docker-compose up -d
     \\\The application will be accessible at http://localhost:8000
