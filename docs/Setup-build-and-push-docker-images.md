# Building and Uploading Docker Images to ghcr.io using Github Action
This document outlines the steps to build a Docker image and upload it to ghcr.io using a Github Action. The process involves building the frontend, backend and using a translator service to communicate with them.

## About Github Actions
Github Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and publish docker images on the ghcr.io, test every pull request to your directory. For a deeper understanding you can see [Learn Github Actions](https://docs.github.com/en/actions/learn-github-actions)

## Prerequisites
- A Github repository for each sub-project with a Dockerfile.
- A personal access token (PAT) with write:packages scope. You can create a PAT by following these steps: [Github Docs ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### Step 1.
- Create new files named:
 .github/workflows/maven.yml, 
 .github/workflows/node.yml, and 
 .github/workflows/rust.yml 
 in the main project directory for the backend, frontend and translator respectively.

 ### Step 2.
 - In the above created files, define the Github Action workflow for each.

 ### Step 3.
- Save the various .yml files.

### Step 4.
- Commit and push the changes to your repository.

### Step 5.
- Github Action will automatically trigger the workflow defined in the above files whenever pushed to the mentioned branch.

### Step 6.
- The workflow will build the frontend, backend and translator Docker images using their respective Dockerfiles and push them to ghcr.io using the provided credentials.

### Step 7.
- You can access the Docker images on ghcr.io at ghcr.io/<owner>/<repository>/<image>:<tag>, where <owner> is your GitHub username or organization, <repository> is the name of your repository, <image> is the name of the Docker image(frontend, backend or translator) and <tag> is the SHA of the commit.

### Step 8.
- Make sure to update your deployment or other relevant scripts to use the newly built Docker images from ghcr.io.