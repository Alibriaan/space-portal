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
        AWS_S3_BUCKET = 'spaceportal-dev'
        BASE_URL = 'http://spaceportal-dev.s3-website.us-east-2.amazonaws.com/'
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
                sh 'npm install'
            }
        }
        stage('Unit Testing') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy To Develop Instance') {
            steps {
                withAWS(region:AWS_S3_REGION, credentials: AWS_S3_CREDENTIALS) {
                    s3Upload(
                        bucket: AWS_S3_BUCKET,
                        includePathPattern: "**/*.*",
                        workingDir: "${WORKSPACE}/build",
                    )
                }
            }
        }
        stage('Cypress install') {
            steps{
                sh "node_modules\\.bin\\cypress run"
            }
        }
        stage('E2E Testing') {
            steps {
                sh 'npm run test:e2e'
            }
        }
    }
}