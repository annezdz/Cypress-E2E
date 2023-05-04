pipeline{
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/features/**", description: "Enter the script path that you want to execute")
        choice(name 'BROWSER', choices: ['chrome','edge','firefox'], description: "Choice the browser where you want execute your scripts")
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building') {
            echo "Building the application"
        }
        stage('Testing') {
            steps {
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying') {
            echo "Deploy the application"
        }
    }

    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}