## Introduction and overview of sass

sass (syntactically awesome style sheets) is a scripting language that extends css. sass brings typical progamming features and functionality such as functions,loops,maxims and inheritance into css thereby making css more organised, easier to mainntain and create complex styles.It is often refered to as **css with super powers**. sass has the two syntax that is the .scss and the .sass. The .scss is popularlily used because of it's simple syntax that is similar to css. sass can be used to build css frameworks and libraries.

# Prerequisites

Before being able to use sass, make sure to have the following installed

- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm): To manage Node.js versions.

- [node.js] (https://nodejs.org/en/):javascript runtime enviroment, the foundation on which sass is built.

- [npm] (https://www.npmjs.com/): Package manager for node.js


- [sass] (https://sass-lang.com/install/) :The preprocessor programming language that is either interpreted or compiled into css.

# installation
Follow the following steps to install and use sass:

1. Install nvm:
   - Visit the nvm Github repository: (https://github.com/nvm-sh/nvm)
   - Follow the installation instructions for your operating system.

2. Install Node.js and npm using nvm:
   ```bash
   nvm install node
  ```

3. install sass:
    ```bash
    npm add sass -D

    ```

## Getting started with sass

Follow the following to use sass in the e2e-banking-app project:

1. clone the github repository
    - Open the github repository on your browser: https://github.com/ADORSYS-GIS/e2e-banking-app
    - copy the url based on your requirement
    - ```git clone {url}
    ```
2. Change to the project's  front end directory
    ```bash
    cd e2e-banking-app/power-pay-frontend
    ```
3. install project dependencies
    ```bash
    npm install
    ```
4. Create files
    Create .scss file(s) in the src directory for the scss code. 
    
5. Start coding 
    - sass functions, varaibles and all other sass features go to the .scss file
    - visit the sass website for sass basics: https://sass-lang.com/guide/ 

6.Import the .scss file(s) in the app.tsx file,use the features defined in the scss file and the styles defined in the scss file will be automatcally applied.





