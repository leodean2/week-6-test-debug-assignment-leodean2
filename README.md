
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
```


```
## Test Coverage

### Client-side Coverage
![Client Coverage](./client/coverage/lcov-report/screenshot.png)

### Server-side Coverage
![Server Coverage](./server/coverage/lcov-report/screenshot.png)
