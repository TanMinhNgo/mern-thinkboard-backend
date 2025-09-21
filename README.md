# MERN ThinkBoard - Backend

A RESTful API backend for the ThinkBoard note-taking application built with Node.js, Express, and MongoDB. This server provides endpoints for managing notes with full CRUD operations.

## 🚀 Features

- **RESTful API**: Clean and intuitive API endpoints
- **Express.js**: Fast and minimalist web framework
- **MongoDB Integration**: Flexible NoSQL database support
- **CORS Enabled**: Cross-origin resource sharing for frontend integration
- **Environment Configuration**: Secure environment variable management
- **Error Handling**: Comprehensive error handling and validation
- **ES Modules**: Modern JavaScript module system

## 🛠️ Tech Stack

- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - MongoDB Object Modeling
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variable Management
- **Nodemon** - Development Server Auto-restart

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanMinhNgo/mern-thinkboard-backend.git
   cd mern-thinkboard-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/thinkboard
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/thinkboard
   NODE_ENV=development
   ```

4. **Start the server**
   
   **Development mode:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   **Production mode:**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Test the API**
   
   The server will start on `http://localhost:8080`
   
   Test endpoint: `GET http://localhost:8080/api/notes`

## 📁 Project Structure

```
src/
├── controllers/        # Route controllers
│   └── notesController.js
├── routes/            # API routes
│   └── notesRoutes.js
├── models/            # Database models (coming soon)
│   └── Note.js
├── middleware/        # Custom middleware (coming soon)
├── config/           # Configuration files (coming soon)
│   └── database.js
└── server.js         # Main server file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run lint` - Run ESLint (if configured)

## 📡 API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/notes` | Get all notes |
| GET    | `/api/notes/:id` | Get note by ID |
| POST   | `/api/notes` | Create new note |
| PUT    | `/api/notes/:id` | Update note by ID |
| DELETE | `/api/notes/:id` | Delete note by ID |

### Request/Response Examples

**GET /api/notes**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Sample Note",
    "content": "This is a sample note content",
    "createdAt": "2023-12-01T10:30:00Z",
    "updatedAt": "2023-12-01T10:30:00Z"
  }
]
```

**POST /api/notes**
```json
// Request Body
{
  "title": "New Note",
  "content": "Note content here"
}

// Response
{
  "_id": "507f1f77bcf86cd799439012",
  "title": "New Note",
  "content": "Note content here",
  "createdAt": "2023-12-01T10:35:00Z",
  "updatedAt": "2023-12-01T10:35:00Z"
}
```

## 🌐 Frontend Integration

This backend is designed to work with the MERN ThinkBoard frontend application.

**Frontend Repository**: [mern-thinkboard-frontend](https://github.com/TanMinhNgo/mern-thinkboard-frontend)

### CORS Configuration

The server is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (React dev server)
- Your production frontend URL

## 🚀 Deployment

### Environment Variables for Production

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
```

### Deploy to Render/Railway/Heroku

1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables in deployment settings
5. Deploy!

### Deploy to VPS

```bash
# Clone and setup
git clone <your-repo>
cd mern-thinkboard-backend
npm install

# Install PM2 for process management
npm install -g pm2

# Start with PM2
pm2 start src/server.js --name "thinkboard-api"
pm2 save
pm2 startup
```

## 🧪 Testing

```bash
# Test API endpoints using curl
curl -X GET http://localhost:8080/api/notes
curl -X POST http://localhost:8080/api/notes -H "Content-Type: application/json" -d '{"title":"Test","content":"Test content"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tan Minh Ngo**
- GitHub: [@TanMinhNgo](https://github.com/TanMinhNgo)

## 🔮 Roadmap

- [ ] MongoDB integration with Mongoose
- [ ] User authentication & authorization
- [ ] Input validation & sanitization
- [ ] Rate limiting
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Logging middleware
- [ ] Database seeding scripts

## 🙏 Acknowledgments

- Express.js team for the excellent framework
- MongoDB team for the flexible database
- Node.js community for the ecosystem

---

⭐ Star this repo if you find it helpful!