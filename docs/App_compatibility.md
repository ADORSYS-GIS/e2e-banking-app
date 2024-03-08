## Description

    As part of our efforts to improve user experience and engagement, we are looking to investigate and implement Progressive Web App (PWA) features within our React application.
    So in order for our PWA to be effective and efficient, we have to make sure it is compatible with any system and devices to improve user experience. To perform this we need to investigate on the compatibility criteria’s inorder to Assess our current React app's architecture and identify changes needed to support PWA features.

## On what devices can a PWA run ?

Progressive Web Apps (PWAs) can run on a variety of devices, including:

1. Desktop computers: PWAs are supported on major web browsers like Chrome, Safari, and Edge on desktop operating systems such as Windows, macOS, and Linux.
    
2. Mobile devices: PWAs work on both Android and iOS devices. On Android, PWAs can be installed and run like native apps from the home screen, while on iOS, they can be added to the home screen and launched in standalone mode.
    
3. Tablets: PWAs can be used on various tablet devices, including iPads, Android tablets, and Windows tablets.
    

## Compatibility Criteria

The compatibility criteria for Progressive Web Apps (PWAs) ensure that they function effectively across various devices, browsers, and platforms. So in order for our PWA to be compatible with different system, we have to consider the following criteria's;

1. **Cross-Browser Compatibility:** 

    PWAs should work consistently across different web browsers, including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and others. Test your PWA on multiple browsers to ensure compatibility and consistent behaviour.
2. **Cross-Device Compatibility:** 

    PWAs should be compatible with different types of devices, including desktop computers, smartphones, tablets, and other internet-enabled devices. Ensure that your PWA is responsive and adapts seamlessly to various screen sizes, resolutions, and orientations.
3. **Operating System Compatibility:** 

    PWAs should be compatible with different operating systems, including Windows, macOS, Linux, iOS, and Android. Test your PWA on different operating systems to ensure that it works as expected and provides a consistent user experience across platforms.
4. **Feature Compatibility:** 

    PWAs should be compatible with a wide range of web features and APIs, including service workers, web app manifest, push notifications, and others. Ensure that your PWA gracefully handles situations where certain features are not supported by the user's device or browser.
5. **Performance Compatibility:** 

    PWAs should perform well on devices with varying hardware capabilities, network conditions, and resource constraints. Optimize your PWA for fast loading times, smooth navigation, and efficient use of system resources to provide a responsive and snappy user experience.
6. **Security Compatibility:** 

    PWAs should adhere to best practices for web security and privacy to protect user data and ensure a secure browsing experience. Serve your PWA over HTTPS to encrypt data transmitted between the user's device and the server, and implement security features such as Content Security Policy (CSP) to mitigate common security risks.

## So in order for Our PWA to be compatible with diverse systems we have to implement the following in our react architecture

1. **Service Worker:**
    - Service workers are JavaScript files that act as intermediaries between the PWA and the network.
    - They run separately from the main browser thread and have the ability to intercept and handle network requests made by the PWA.
    - Service workers enable important PWA features such as offline functionality, by allowing the caching of assets and resources locally on the user's device.
    - They also enable other advanced features like push notifications, background synchronisation, and intercepting requests to provide customised responses, which enhance the overall user experience.
    - Service workers are essential for making PWAs feel more like native apps by allowing them to work reliably even when the user is offline or on a slow or unreliable network connection.
2. **Web App Manifest:**
    - The web app manifest is a JSON file (usually named manifest.json) that provides metadata about the PWA to the browser.
    - It includes information such as the PWA's name, description, icon, theme colors, and other properties.
    - The manifest file enables the browser to understand that the website is a PWA and provides instructions on how the PWA should behave when installed on the user's device.
    - For example, it specifies the PWA's display mode (e.g., fullscreen, standalone) and whether it should appear in the user's home screen or app drawer.
    - The web app manifest is crucial for enhancing the discoverability and accessibility of the PWA and providing users with a native app-like experience.
3. **HTTPS (Secure Origin):**
    - PWAs must be served over HTTPS (Hypertext Transfer Protocol Secure) to ensure the security and integrity of data transmitted between the PWA and the server.
    - HTTPS encrypts the data exchanged between the user's device and the server, protecting it from unauthorised access or tampering by malicious actors.
    - Serving the PWA over HTTPS is essential for protecting user privacy and sensitive information, such as login credentials, payment details, and personal data.
    - Additionally, certain PWA features, such as service workers and push notifications, require a secure origin (HTTPS) to function properly.
    - Ensuring that the PWA is served over HTTPS is a critical security measure and a prerequisite for enabling advanced PWA features and capabilities.

## Limitations of PWA

Despite the benefits of PWAs, they do have some limitations. 

- **Limited Browser Support**
    
    While PWAs are designed to be cross-platform, some browsers such as Safari and Edge may not provide optimal support for PWAs. This can result in inconsistent behaviour or limited functionality when accessing PWAs on these browsers. Efforts of improving browser support for PWAs are still underway.
    
- **Performance on Older Devices**
    
    PWAs may not be compatible with older devices running outdated browsers. This can limit the accessibility and usage of PWAs for users who have not upgraded their devices or browsers to more recent versions.
    
- **Offline Limitations**
    
    PWAs can work offline to some extent by utilizing service workers and caching strategies. However, their offline capabilities may not be as robust as native apps that can store and process data locally. PWAs may have limitations in terms of offline functionality and synchronization when compared to fully native solutions.
    
- **Limited Native Functionality**
    
    PWAs may not have access to all native device features and APIs that native apps do. For example, accessing certain hardware components like the camera, fingerprint sensor, or Bluetooth may be restricted or unavailable in PWAs.
    
- **Storage Limitations**
    
    PWAs typically have limited storage capabilities compared to native apps, especially on mobile devices. This may impact the ability to store large amounts of data locally or provide extensive offline functionality.
    
- **Less Discoverability**
    
    Since PWAs are primarily distributed through web channels rather than app stores, they may be less discoverable to users who are not actively searching for them. We may need to invest in marketing and promotion to increase visibility and adoption of our PWA.

    
