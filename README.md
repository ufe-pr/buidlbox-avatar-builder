# buidlbox-avatar-builder

## Overview

This is an implementation of an avatar builder created for the BuidlBox Avatar builder challenge. This project provides a user-friendly interface for creating avatars and emits a custom vue component event when the avatar-building process is complete. The emitted event includes a JSON object that contains the user's avatar selections.

## Project Structure

The core functionality of the avatar builder is implemented as a single Vue 3 component, which can be found in the following location:

```plaintext
src/App.vue
```

## Usage

To use the avatar builder, follow the steps below:

1. Clone this repository to your local machine.

2. Navigate to the project directory and install the required dependencies by running the following command:

```sh
npm install
```

3. Once the dependencies are installed, you can start the development server. Use the following command to compile the project and enable hot-reloading for development:

```sh
npm run dev
```

4. Open your web browser and access the development server at the specified URL.

5. Use the user-friendly interface to build your avatar by making selections and customizing the appearance.

6. When you are satisfied with your avatar and have completed the customization, click the "Finish" button.

7. The component will emit a `built` event, and this event will contain a JSON object with details about the user's selections.

## Additional Tools

For code quality and style enforcement, this project utilizes ESLint. You can lint your code by running the following command:

```sh
npm run lint
```

## Conclusion

The **buidlbox-avatar-builder** is a versatile Vue 3 component that makes it easy to create avatars with a smooth user experience. If you encounter any issues or have questions about the project, please refer to the documentation, or don't hesitate to reach out to the project maintainers.

Feel free to explore and customize the avatar builder to suit your specific requirements and styling preferences.