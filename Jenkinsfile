#!/usr/bin/env groovy
pipeline {
    agent any

    tools { nodejs "node" }

    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        HOME = '.'
        REPOSITORY = 'https://github.com/Alibriaan/space-portal.git'
        GIT_CREDENTIALS = 'jenkins_github_credentials'
        AWS_S3_CREDENTIALS = 'space-portal-s3-publisher-credentials'
        AWS_S3_REGION = 'us-east-2'
        AWS_S3_BUCKET = 'spaceportal'
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
           }
        }
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }
    }
}