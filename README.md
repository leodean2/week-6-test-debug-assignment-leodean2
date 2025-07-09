
# Testing and Debugging MERN Applications
# MERN Testing Project

## Testing Strategy

### Unit Testing
- Client: React components with React Testing Library
- Server: Controller functions with Jest

### Integration Testing
- API endpoints with Supertest
- Database operations with MongoDB Memory Server

### End-to-End Testing
- User flows with Cypress

## Running Tests

### Client
```bash
cd client
npm test        # Run unit tests
npm run test:coverage  # Run tests with coverage
npm run cypress:open   # Open Cypress UI


## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```
## Test Coverage

### Client-side Coverage
![Client Coverage](./client/coverage/lcov-report/screenshot.png)

### Server-side Coverage
![Server Coverage](./server/coverage/lcov-report/screenshot.png)
