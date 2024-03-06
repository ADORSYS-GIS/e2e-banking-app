# Building and Uploading Docker Images to ghcr.io using Github Action
This document outlines the steps to build a Docker image and upload it to ghcr.io using a Github Action. The process involves building the frontend, backend and using a translator service to communicate with them.

## Prerequisites
- A Github repository for each sub-project with a Dockerfile.
- A personal access token (PAT) with write:packages scope. You can create a PAT by following these steps: [Github Docs ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### Steps
1. Create new files named .github/workflows/maven.yml, .github/workflows/node.yml, and .github/workflows/rust.yml in the main project directory for the backend, frontend and translator respectively.
2.  In the above created files, define the Github Action workflow for each.
3. Save the various .yml files.
4. Commit and push the changes to your repository.
5. Github Action will automatically trigger the workflow defined in the above files whenever pushed to the mentioned branch.
6. The workflow will build the frontend, backend and translator Docker images using their respective Dockerfiles and push them to ghcr.io using the provided credentials.
7. You can access the Docker images on ghcr.io at ghcr.io/<owner>/<repository>/<image>:<tag>, where <owner> is your GitHub username or organization, <repository> is the name of your repository, <image> is the name of the Docker image(frontend, backend or translator) and <tag> is the SHA of the commit.
8. Make sure to update your deployment or other relevant scripts to use the newly built Docker images from ghcr.io.