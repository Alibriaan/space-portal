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
        BRANCH_NAME = 'develop'
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
        stage('Start server') {
          steps  {
            sh 'npm run start'
          }
        }
        stage('Testing') {
            steps {
                echo 'Test process'
                sh 'npm run test:unit'
                sh 'npm run test:unit:component'
                sh 'npm run test:e2e'
            }
        }
        stage('Stop server') {
          steps {
            sh "stop": "taskkill -F -IM node.exe"
          }
        }
    }
}