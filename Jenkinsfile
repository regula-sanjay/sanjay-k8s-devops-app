pipeline {
    agent any

    stages {
    
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
