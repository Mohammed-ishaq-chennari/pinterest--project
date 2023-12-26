# Pinterest Clone Backend

Welcome to the backend repository for the Pinterest Clone project! This project allows users to sign up, log in, create their profiles, and post photos. The primary emphasis is on the backend development, with the frontend being handled separately.

## Features

- **User Authentication**: Secure user authentication system for sign up and login functionality.
- **User Profiles**: Users can create and customize their profiles with a unique ID.
- **Image Posting**: Ability to upload and post images to share with the community.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user information and image data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JWT**: JSON Web Token for secure user authentication.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or a cloud MongoDB database
- Clone the repository to your local machine

### Installation

1. Install dependencies:
    ```bash
    npm install
    ```

2. Set up environment variables:
    Create a `.env` file in the root directory and provide the following variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

3. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

- **POST /api/signup**: Create a new user account.
- **POST /api/login**: Log in with existing credentials.
- **GET /api/user/:id**: Get user profile information by ID.
- **POST /api/post**: Upload and post an image.
- **GET /api/posts**: Get a list of all posted images.

## Contributing

Feel free to contribute by submitting issues, feature requests, or pull requests.

## Acknowledgments

Special thanks to [Pinterest](https://www.pinterest.com/) for the inspiration behind this project.

Happy coding!
