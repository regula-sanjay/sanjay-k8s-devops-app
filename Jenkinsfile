pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/YOUR_USERNAME/sanjay-k8s-devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t sanjay/sanjay-app:latest .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
