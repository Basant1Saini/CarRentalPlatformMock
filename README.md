# Car Rental Platform

A modern car rental platform built with the MERN stack (MongoDB, Express.js, React, Node.js) using Vite for fast development and build processes.

## Tech Stack

- **Frontend**: React 18 + Vite + JavaScript (ES6+)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite (fast HMR and optimized builds)

## Features

- User registration and authentication
- Car browsing and filtering
- Booking management
- Payment integration ready
- Admin dashboard
- Responsive design
- Real-time availability updates

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn package manager

## Installation

### Clone the repository
```bash
git clone <repository-url>
cd CarRentalPlatformMock
```

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/car-rental
JWT_SECRET=your-jwt-secret-key
NODE_ENV=development
```

### Frontend Setup
```bash
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create `.env` file in frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Car Rental Platform
```

## Running the Application

### Start MongoDB
```bash
mongod
```

### Start Backend Server
```bash
cd backend
npm run dev
```

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
CarRentalPlatformMock/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── carController.js
│   │   └── bookingController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Car.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── cars.js
│   │   └── bookings.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── database.js
│   ├── utils/
│   │   └── validators.js
│   ├── package.json
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── auth/
│   │   │   ├── cars/
│   │   │   └── bookings/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Cars.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useApi.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── helpers.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Cars
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/cars` - Add new car (Admin)
- `PUT /api/cars/:id` - Update car (Admin)
- `DELETE /api/cars/:id` - Delete car (Admin)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

## Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run test     # Run tests
```

### Frontend
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Package.json Dependencies

### Backend Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-validator": "^7.0.1",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
}
```

### Frontend Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.18.0",
    "axios": "^1.6.0",
    "react-hook-form": "^7.47.0",
    "react-query": "^3.39.3",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.1.0",
    "vite": "^4.5.0",
    "tailwindcss": "^3.3.5",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "@testing-library/react": "^13.4.0",
    "vitest": "^0.34.6"
  }
}
```

## Database Schema

### User Model
```javascript
const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  phone: String,
  createdAt: { type: Date, default: Date.now }
}
```

### Car Model
```javascript
const carSchema = {
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  features: [String],
  images: [String],
  location: String,
  createdAt: { type: Date, default: Date.now }
}
```

### Booking Model
```javascript
const bookingSchema = {
  user: { type: ObjectId, ref: 'User', required: true },
  car: { type: ObjectId, ref: 'Car', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
}
```

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/car-rental
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Car Rental Platform
VITE_APP_VERSION=1.0.0
```

## Testing

### Backend Testing
```bash
cd backend
npm test                    # Run all tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run tests with coverage
```

### Frontend Testing
```bash
cd frontend
npm test                   # Run component tests
npm run test:ui           # Run tests with UI
npm run test:coverage     # Run tests with coverage
```

## Development Workflow

### Code Quality
```bash
# Backend
npm run lint              # ESLint check
npm run lint:fix          # Fix ESLint issues
npm run format            # Prettier formatting

# Frontend
npm run lint              # ESLint check
npm run lint:fix          # Fix ESLint issues
npm run type-check        # TypeScript check (if using TS)
```

### Git Hooks (Recommended)
```bash
npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables:
   - `VITE_API_URL=https://your-backend-url.com/api`
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

### Backend (Railway/Render/Heroku)
1. Set environment variables in platform
2. Configure build settings:
   - Build command: `npm install`
   - Start command: `npm start`
3. Database setup:
   - Use MongoDB Atlas for production
   - Update `MONGO_URI` with Atlas connection string

### Docker Deployment (Optional)
```dockerfile
# Backend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Check if MongoDB is running
sudo systemctl status mongod
# Start MongoDB
sudo systemctl start mongod
```

**Port Already in Use**
```bash
# Find process using port 5000
lsof -i :5000
# Kill the process
kill -9 <PID>
```

**Tailwind Styles Not Loading**
- Ensure Tailwind directives are in `src/index.css`
- Check `tailwind.config.js` content paths
- Restart Vite dev server

**CORS Issues**
- Verify `CORS_ORIGIN` in backend `.env`
- Check frontend API URL configuration
- Ensure backend CORS middleware is properly configured

### Performance Optimization

**Frontend**
- Use React.lazy() for code splitting
- Implement virtual scrolling for large lists
- Optimize images with proper formats and sizes
- Use React Query for efficient data fetching

**Backend**
- Implement database indexing
- Use pagination for large datasets
- Add response compression
- Implement caching strategies

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## Security Considerations

- JWT tokens stored in httpOnly cookies
- Input validation on all endpoints
- Rate limiting implemented
- Helmet.js for security headers
- Password hashing with bcrypt
- Environment variables for sensitive data

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Follow coding standards and add tests
4. Commit changes: `git commit -m 'Add feature'`
5. Push to branch: `git push origin feature-name`
6. Submit a pull request with detailed description

### Code Style Guidelines
- Use ESLint and Prettier configurations
- Follow React best practices
- Write meaningful commit messages
- Add JSDoc comments for functions
- Maintain consistent naming conventions

## License

MIT License - see LICENSE file for details

## Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Review troubleshooting section