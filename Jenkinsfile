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

        stage('build image'){
            steps{
                echo "build docker image"
                script{
                    api = docker.build('abitsugar/qlas-api')
                }
                echo "run container for test image"
                sh "docker run -d --rum --name testapi -p 8081:2017 abitsugar/qlas-api"
                input message: "Finished the image? Click proceed to continue"
                echo "cleanup container testapi"
                sh "docker stop testapi"
            }
        }
    }
}