pipeline {
    agent any

    environment {
        // Specify NodeJS version or set it from Jenkins global tool configuration
        NODE_VERSION = 'Nodejs' // Assumes NodeJS is set up in Jenkins global tools
    }

    stages {
        stage('Checkout main branch') {
            steps {
                // Checkout the code from source control
                git branch: 'main', url: 'https://github.com/gaut4413/API-DEMO.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use Node.js environment set in Jenkins
                    withEnv(["PATH+NODE=${tool NODE_VERSION}/bin"]) {
                        // Run npm install to install project dependencies
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run the tests using npm
                    sh 'npm run wdio'
                }
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                    reportDir: '.result/report',   // e.g., 'reports/html'
                    reportFiles: 'index.html',                         // Main HTML file for your report
                    reportName: 'API Test Report',                         // Name that will show in Jenkins
                    keepAll: true,                                    // Keep reports from each build
                    alwaysLinkToLastBuild: true,                      // Always link to the last successful build
                    allowMissing: false                               // Fail the build if report is missing
                ])
        }
        failure {
            // If the build fails, notify or take any action
            echo 'Build failed!'
        }
        success {
            echo 'Build succeeded!'
        }
    }
}
