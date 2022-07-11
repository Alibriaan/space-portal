#!/usr/bin/env groovy
pipeline {
    agent {
        docker {
          image 'node:lts'
          args '-u root'
        }
    }

    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        HOME = '.'
        REPOSITORY = 'https://github.com/Alibriaan/space-portal.git'
        GIT_CREDENTIALS = 'jenkins_github_credentials'
    }

    stages {
        stage('Git') {
            steps {
                script {
                    echo 'master branch'
                    git credentialsId: env.GIT_CREDENTIALS, url: env.REPOSITORY, branch: 'master'
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
        stage('Build') {
            steps {
                echo 'npm run build'
            }
        }
        stage('Deploy') {
          steps {
            echo 'deploy'
          }
        }
    }
}