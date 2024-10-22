I'll correct and improve the markdown formatting for your README. Here's the corrected version:

```markdown
# Real-time Chat Application

This is a real-time chat application with a backend built in Node.js using Express, MongoDB, and AWS services for storage, and a frontend built with Next.js and Chakra UI. The app supports user authentication, messaging, and file uploads with AWS S3 integration.

## Features

- Real-time messaging
- User authentication with JWT and bcrypt
- Secure file uploads to AWS S3
- Modern UI built with Next.js and Chakra UI
- MongoDB integration with Mongoose
- CORS-enabled API for secure cross-origin communication

## Technologies

### Backend (Node.js/Express)
- **Express**: Fast, unopinionated web framework
- **MongoDB & Mongoose**: NoSQL database with object data modeling
- **JWT (jsonwebtoken)**: User authentication and authorization
- **Bcrypt**: Password hashing
- **AWS SDK**: File upload to AWS S3 using the AWS SDK
- **Dotenv**: For environment variables
- **Cors**: Cross-Origin Resource Sharing middleware

### Frontend (Next.js/React)
- **Next.js**: React framework for building fast, server-rendered applications
- **Chakra UI**: Simple, modular, and accessible UI components for React
- **Axios**: For HTTP requests to the backend API
- **Tailwind CSS**: Utility-first CSS framework for custom designs
- **Framer Motion**: Animation library for React
- **TypeScript**: Strongly-typed JavaScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [AWS Account](https://aws.amazon.com/) for S3 storage

### Backend Setup

1. Clone the repository:

   ```bash
   git clone <backend-repo-url>
   cd backend
```

2. Install dependencies:

```shellscript
npm install
```


3. Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
AWS_ACCESS_KEY_ID=<Your AWS Access Key>
AWS_SECRET_ACCESS_KEY=<Your AWS Secret Key>
AWS_S3_BUCKET=<Your S3 Bucket Name>
```


4. Start the backend server:

```shellscript
npm run dev
```




### Frontend Setup

1. Clone the repository:

```shellscript
git clone <frontend-repo-url>
cd front-end
```


2. Install dependencies:

```shellscript
npm install
```


3. Start the development server:

```shellscript
npm run dev
```




## Testing the Application

1. Open `http://localhost:3000` in your browser to access the frontend interface.
2. Use the chat interface to send real-time messages, upload files, and authenticate with JWT-based login.


## Available Scripts

### Backend Scripts

- `npm start`: Starts the backend server in production mode.
- `npm run dev`: Runs the backend in development mode.


### Frontend Scripts

- `npm run dev`: Runs the frontend in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.


