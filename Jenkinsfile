pipeline{
    agent any

   /* parameters{
        choice(name: 'TAG', choices: ['regression','login','contact-us','smoke'] , description: "Choice the tag where you want execute your scripts")
        choice(name 'BROWSER', choices: ['chrome','edge','firefox','electron'], description: "Choice the browser where you want execute your scripts")
    }
    */

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
                bat 'cypress run -e TAGS=\"@login\" --headed'
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