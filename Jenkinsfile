#!/usr/bin/env groovy
pipeline {
    agent {
        docker {
            image 'node:lts'
            args '-u root -p 3030:3030'
        }
    }

    environment {
      HOME = "${env.WORKSPACE}"
      REPOSITORY = 'https://github.com/Alibriaan/space-portal.git'
      GIT_CREDENTIALS = 'jenkins_github_credentials'
    }

    stages {
        stage('Git') {
            steps {
                script {
                    echo 'master branch'
                    git credentialsId: env.GIT_CREDENTIALS, url: env.REPOSITORY, branch: 'develop'
                }
            }
        }
        stage('Install') {
            steps {
                echo 'Install process'
                sh 'npm install'
            }
        }
        stage('Testing') {
            steps {
                echo 'Test process'
                sh 'npm run test:unit'
                sh 'npm run test:component'
                sh 'npm run test:e2e'
            }
        }
    }
}