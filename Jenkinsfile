pipeline{
    agent any

    stages{
        stage('install depedencies'){
            steps{
                sh "npm install"
            }
        }    

        stage('unit testing'){
            steps{
                echo "run unit testing"
            }
        }
    }
}