pipeline{
    agent any

    parameters{
        choice choices: ['regression', 'login', 'contact-us', 'smoke'], description: 'Tags for execute scripts', name: 'TAG'
        choice choices: ['chrome', 'edge', 'firefox', 'electron'], description: 'Browsers for execute scripts', name: 'BROWSER'
    }
   
    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building') {
            steps {
            echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run -e TAGS=@${TAG} --headed --browser ${BROWSER}"
            }
        }
        stage('Deploying') {
            steps {
            echo "Deploy the application"
            }
        }
    }

    post{
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}



