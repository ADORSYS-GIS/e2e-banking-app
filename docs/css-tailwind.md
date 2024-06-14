

# Tailwind CSS

## Overview

**What is Tailwind?**

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built CSS Classes for quickly building user interface.it promote a highly modular and reusable approach styling. This documentation will guide you on how to use tailwind in our powerpay project.

## Get Started with Tailwind CSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for calss names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable with zero-runtime.

## Installation

Before installing tailwind you must have node.js preinstalled in your system if not visit the README.md file in this repository they're steps listed on it how to install Node.js and run it.The reason why, is you need to have a nodejs to hava/use the npm. Take an example we use pip to install packages in python.

Follow this steps to install tailwind:

 - Run the following command in your terminal:
```bash
npm install tailwindcss
```
 -  Once installed, clone the repository:
```bash
git clone https://github.com/ADORSYS-GIS/e2e-banking-app.git

```
 - Navigate to the project directory:
```bash
cd e2e-banking-app

```
 - Navigate to the power-pay-front-end:
```bash
cd power-pay-frontend
```
 - Generate a tailwind CSS configuration file by running the command:
```bash
npx tailwindcss init
```
 - This command create a tailwind.config.js file in your project's root directory.

 - Configure your template path; Add the paths to all your templates files in your tailwind.config.js file. e.g.,
```
/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}
```

 - Customize the configuration file to match your projects design requirements. You can modify various settings like colors, typography, breakpoints, etc., to create a consistent design system.

 - Create a CSS file (e.g., tailwind.css) where you will include the Tailwind CSS styles. Import the Tailwind CSS libary by adding the following line to your CSS file:
```bash
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

```
 - To compile and generate the final CSS file that include the tailwind CSS styles, you need to use a build took like webpack or gulp. Set up your build tool to process your CSS files and compile them into a single CSS file that will be used in your project.

 - Run your build tool's build command to compile the CSS file. This command will process the Tailwind CSS classes and generate the final CSS file that includes all the styles you have used run e.g.,:
```bash
gulp --config tailwind.config.js
```
 - Link the generated CSS file to your HTML file. You can do this by adding a <link> tag in the <head> section of your HTML file, like this:
    ```
    <link rel="stylesheet" href="path/to/your/generated-styles.css">
    ```

    - With the Tailwind CSS styles linked to your HTML file, you can now see the styles applied to your project's elements and start using the utility classes provided by Tailwind CSS.


    ## Using Utility Classes

    Tailwind CSS provides a wide range of utility classes that you can use to style ypur HTLM elements and components. These utility classes follow a consistent naming convention and component and provide a high level of flexibility.

    Here are a few examples:

    1. To set the background color of an element, use the blog-{color} class. For example, bg-blue-500 sets the background color to a shade of blue.

    2. To apply padding to an element, use the p-{size} class. For example, p-4 adds 4 units of padding to all side of the element.

    3. To change the font size, use the text-{size} class. For example, text-lg sets the font size to large.

    4. Tailwind CSS also offers various responsive classes that allow you to apply   styles based on the different screens sizes. For example, md:text-xl applies the text-xl class only on medium-sized screens and above.

    - You can refer to the official tailwind CSS documentation fo a comprehensive list of utility classes and their usage.

    ## Customization

    Tailwind CSS provides extensive customization options to tailor the framwork to your project's specific needs. You can modify the default configuration file (tailwind.config.js) to adjust colors, typography, spacing, breakpoints, and more.

    By customizing the configuration, you can create a consistent design system that aligns with your project's branding and requirements.





