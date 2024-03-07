# Description

As part of our efforts to improve user experience and engagement, we are looking to investigate and implement Progressive Web App (PWA) features within our React application. 

This includes setting up offline capabilities, and ensuring the app is installable on users' home screens across different platforms. The goal is to enhance app performance, reliability, and accessibility, aligning with PWA best practices and taking into consideration limitations.

# What is a PWA ?

A PWA (Progressive Web Application) is an app, that’s built using web platform technologies, but that provides a user experience like that of an app. Like a website, PWAs can run and can be installed  on multiple platforms and devices from a single codebase.

Like a platform-specific app, it can be installed on a device, can operate while offline and in the background, and can integrate with the device and other installed apps.

PWAs are deployed using Standard Web Platform Technologies , so they can run on multiple Operating Systems and device classes from a single codebase.

# How it functions

Progressive Web Apps (PWAs) function by leveraging modern web technologies to deliver a fast, reliable, and engaging user experience similar to that of native apps. Here's how PWAs work:

1. Initial Loading and Installation:

When a user first accesses a PWA, the necessary resources (HTML, CSS, JavaScript) are fetched from the server and loaded into the browser. If the PWA meets certain criteria (e.g., served over HTTPS, has a web app manifest), the browser may prompt the user to install the app to their device's home screen or app drawer.

2. Service Worker Installation:

As part of the initial loading process, a service worker is registered in the background. The service worker is a JavaScript file that runs separately from the main browser thread and intercepts network requests made by the PWA.

3. Caching of Resources:

The service worker caches essential resources, such as HTML, CSS, JavaScript, and media files, locally on the user's device. This allows the PWA to load quickly and provide a smooth user experience, even when the user is offline or on a slow or unreliable network connection.

4. Offline Functionality: 

When the user is offline, the service worker serves cached resources from the device's storage rather than fetching them from the server. This enables the PWA to continue functioning, even when there is no internet connection.

5. Data Fetching:

When the user interacts with the PWA, such as submitting a form or requesting new content, the PWA sends a network request to the server to fetch the necessary data. If the user is offline, the service worker may intercept the request and serve cached data instead.

6. Syncing Data: 

If the user performs actions while offline, such as submitting a form or making changes to data, the PWA can queue these actions and sync them with the server once the user is back online. This is achieved using background sync, a feature provided by service workers.

7. Online Functionality:

When the user is online, the PWA fetches data from the server as usual, providing real-time updates and ensuring that the user has access to the latest content and features.

# What are PWA requirements

The three main requirements of a Progressive Web App (PWA) are:

1. Service Worker:

Service workers are JavaScript files that run in the background and intercept network requests made by the PWA. They enable features such as offline functionality, push notifications, and caching of assets, allowing the PWA to work reliably even with a limited internet connection.

2. Web App Manifest:

The web app manifest is a JSON file (manifest.json) that provides metadata about the PWA, such as its name, description, icon, and theme colors. The manifest file enables the browser to understand that the website is a PWA and allows users to install the app to their home screen or app drawer, providing a native app-like experience.

3. HTTPS (Secure Origin): 

PWAs must be served over HTTPS to ensure the security and integrity of data transmitted between the app and the server. Serving your PWA over HTTPS is essential for protecting user privacy and sensitive information, as well as for enabling certain PWA features such as service workers and push notifications.

# How does the PWA help our system for Real

- Increased Reach:

PWAs are optimized for performance, with fast loading times. By leveraging caching techniques and minimizing network requests which gives a positive user experience, even on slow or unreliable networks.

- Offline Functionality:

PWAs can work offline or with a limited internet connection, allowing users to access content and features even when they are offline. This offline functionality improves accessibility and ensures that users can engage with our app regardless of their network status.

- Reduced Development Costs:

PWAs use standard web technologies and can be built using existing web development frameworks and tools. This reduces development costs and complexity compared to building separate native apps for different platforms.

- Lower Maintenance Costs: 

PWAs are easier to maintain and update compared to native apps, as changes can be made to the web application codebase and deployed instantly to all users. Also if you have to always pay the deployment cost for you native app that are stored on app stores, it will be very costly.

- Push Notifications: 

PWAs can send push notifications to users even when the app is not actively in use. This can be used to notify users about new features, promotions, or important updates, keeping them engaged with the app.

# Best Practices of PWAs

Implementing a Progressive Web App (PWA) involves several best practices to ensure optimal performance, user experience, and functionality across various devices and platforms. Below are some best practices to implement in order to ensure optimisation….

- Adapt to all Browsers & Devices

    Our PWA is based on web technologies meaning that, on top of being installable on devices, PWAs can run in web browsers too. To ensure compatibility, it’s essential to test our app across various browsers, phones and operating systems.

    We also ensure users can interact with our app, no matter how they access our content. (We should make sure our apps content can be assessed through any inputs).

- Provide an Offline Experience 

    In our case, our PWA should function even when the user is offline. Means we can continue using all our app’s functionalities even when offline. In such a way that it doesn’t restrict our user to have internet connection.

- Make it Fast

    The speed at which our app loads and performs it’s core functions plays a role in user engagement and relation (The more time it takes to load, the poor the user experience).

    This is because different users have different expectations for installed apps compared to websites. They expect them to be fast and responsive.

- Make it Accessible

    Accessibility is crucial to ensure everyone can use our app, regardless of an individuals abilities or the device they use to access it. It is also required by law, and ensures that as many people as possible use our app.

- Provide an App-like Experience
    
    - Integrate with the Operating System

        Users expect installed PWAs to behave like an installed platform-specific app. We should integrate our app with the Operating System such that it can send Push Notifications to the user’s device.

    -  App Look and Feel

        Design your PWA to provide an app-like experience, including smooth transitions, gestures, and navigation patterns. Use progressive enhancement techniques to enhance functionality based on the capabilities of the user's device and browser.

- Installability

Make your PWA installable by adding a web app manifest file (manifest.json) and a service worker to enable offline functionality. Ensure that users can easily install your PWA on 
their device's home screen or app drawer for quick access.

- Security

Security is a critical best practice for Progressive Web Apps (PWAs) to ensure the protection of user data and maintain a trustworthy user experience, such as User Privacy, Authentication  and Authorisation.

# Limitations of PWA

Despite the best practices of PWAs, they do have some limitations. 

- Limited Browser Support

    While PWAs are designed to be cross-platform, some browsers such as Safari and Edge may not provide optimal support for PWAs. This can result in inconsistent behaviour or limited functionality when accessing PWAs on these browsers. Efforts of improving browser support for PWAs are still underway.

- Performance on Older Devices

    PWAs may not be compatible with older devices running outdated browsers. This can limit the accessibility and usage of PWAs for users who have not upgraded their devices or browsers to more recent versions.

- Offline Limitations

    PWAs can work offline to some extent by utilizing service workers and caching strategies. However, their offline capabilities may not be as robust as native apps that can store and process data locally. PWAs may have limitations in terms of offline functionality and synchronization when compared to fully native solutions.

- Limited Native Functionality 

    PWAs may not have access to all native device features and APIs that native apps do. For example, accessing certain hardware components like the camera, fingerprint sensor, or Bluetooth may be restricted or unavailable in PWAs.

- Storage Limitations

    PWAs typically have limited storage capabilities compared to native apps, especially on mobile devices. This may impact the ability to store large amounts of data locally or provide extensive offline functionality.

- Less Discoverability

    Since PWAs are primarily distributed through web channels rather than app stores, they may be less discoverable to users who are not actively searching for them. We may need to invest in marketing and promotion to increase visibility and adoption of our PWA.