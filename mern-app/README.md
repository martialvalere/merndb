# MERN App on Azure

## Local Development

1. **Install dependencies:**
   - Backend:
     ```bash
     cd server
     npm install
     ```
   - Frontend:
     ```bash
     cd ../client
     npm install
     ```
2. **Set up environment variables:**
   - Copy `.env.example` to `.env` in the `server` folder and fill in your MongoDB Atlas URI.
3. **Run the app locally:**
   - In one terminal, start the backend:
     ```bash
     cd server
     npm run dev
     ```
   - In another terminal, start the frontend:
     ```bash
     cd client
     npm start
     ```

## Production Build & Azure Deployment

1. **Build the React frontend:**
   ```bash
   cd client
   npm run build
   ```
2. **Move the build to the backend:**
   - The backend is set up to serve the `client/build` folder.
3. **Deploy to Azure:**
   - Follow the Azure Web App instructions in the main guide.
   - Set environment variables in Azure for `MONGODB_URI` and `PORT`.

## MongoDB Atlas Setup
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a cluster.
- Whitelist your IP and create a database user.
- Get your connection string and use it in your `.env` file.