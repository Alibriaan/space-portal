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
        AWS_S3_CREDENTIALS = 'space-portal-s3-publisher-credentials'
        AWS_S3_REGION = 'us-east-2'
        AWS_S3_BUCKET = 'spaceportal'
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
        // stage('Install') {
        //     steps {
        //         echo 'Install process'
        //         sh 'npm install'
        //     }
        // stage('Testing') {
        //     steps {
        //         echo 'Test process'
        //         sh 'npm run test:unit'
                // sh 'npm run test:unit:component'
                // sh 'npm run test:e2e'
            }
        }
        // stage('Build') {
        //   steps {
        //     sh 'npm run build'
        //   }
        // }
        stage('S3 Deploy') {
            withAWS(region:AWS_S3_REGION, credentials: AWS_S3_CREDENTIALS) {
              sh 'echo "Uploading content with AWS creds"'
                s3Upload(path: WORKSPACE, workingDir:'build', bucket: AWS_S3_BUCKET)
            }
        }
    }
}