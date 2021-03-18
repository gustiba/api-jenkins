pipeline{
    agent{
        docker{
            image 'node'
        }
    }

    stages{
        stage('install depedencies'){
            steps{
                sh "npm install"
            }
        }    
    }

    stage('unit testing'){
        steps{
            echo "run unit testing"
        }
    }

    stage('build'){
        steps{
            sh "npm run build"
        }
    }
}