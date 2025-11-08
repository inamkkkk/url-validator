# URL Validator API

A simple Node.js API that validates and checks the accessibility of URLs.

## Features

*   Validates URL format.
*   Checks if the URL is accessible (returns a 200 status code).

## Technologies

*   Node.js
*   Express.js
*   Axios

## Folder Structure


├── server.js
├── routes
│   └── url.routes.js
├── controllers
│   └── url.controller.js
├── middlewares
│   └── error.middleware.js
├── utils
│   └── validator.js
└── package.json


## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd url-validator-api
    

3.  Install dependencies:

    
    npm install
    

## Usage

1.  Start the server:

    
    npm start
    

2.  Access the API endpoint:

    `POST /api/url/validate`

    Request body:

    
    {
      "url": "https://www.example.com"
    }
    

    Response body:

    
    {
      "valid": true,
      "accessible": true
    }
    

## API Endpoints

*   `POST /api/url/validate`: Validates and checks the accessibility of a URL.

## Error Handling

*   Invalid URL format: Returns a 400 Bad Request error.
*   URL not accessible: Returns `accessible: false`.
*   Server error: Returns a 500 Internal Server Error.
