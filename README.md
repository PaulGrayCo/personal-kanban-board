# Kanban Board

A simple kanban board application built with vanilla JavaScript and deployed on Netlify.

## Features

- Progressive Web App (PWA) support
- Serverless API endpoints
- Local storage for offline functionality
- Responsive design

## Project Structure

```
kanban-board/
├── public/
│   ├── index.html              # Main kanban board app
│   ├── manifest.json           # PWA manifest
│   ├── sw.js                   # Service worker
│   └── icons/                  # App icons
├── netlify/
│   └── functions/
│       ├── cards.js            # Main API endpoint
│       └── database.js         # Database helper
├── package.json                # Dependencies
├── netlify.toml               # Netlify config
└── README.md                  # Setup instructions
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm run dev
   ```

3. Deploy to Netlify:
   ```bash
   npm run deploy
   ```

## API Endpoints

- `GET /api/cards` - Get all cards
- `POST /api/cards` - Create a new card
- `PUT /api/cards` - Update a card
- `DELETE /api/cards?id=<card_id>` - Delete a card

## Development

The application uses Netlify Functions for the backend API and serves static files from the `public` directory. The database is currently in-memory for demo purposes - in production you'd want to use a persistent database like FaunaDB or MongoDB.

----------

# Personal Kanban Board

A kanban board for humans who make stuff (and need to remember what they're doing).

## Features

- 🎯 Four-column workflow: Brain Dump → Ready to Tackle → Currently Doing → Done
- 📱 PWA with offline support
- 🎨 Paul Gray brand aesthetic  
- ⏰ Due dates and times
- 🏷️ Color-coded labels
- 🖱️ Drag & drop between columns
- 💾 SQLite database storage
- 🔄 Real-time sync with fallback to localStorage

## Deployment with Claude Code

1. **Initialize the project:**
   ```bash
   claude-code init kanban-board
   cd kanban-board
   ```

2. **Create the project structure:**
   - Copy all the files from this artifact into the correct directories
   - Install dependencies: `npm install`

3. **Deploy to Netlify:**
   ```bash
   claude-code deploy --platform netlify
   ```

4. **That's it!** Your kanban board will be live and accessible from anywhere.

## Local Development

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run locally: `netlify dev`
3. Visit `http://localhost:8888`

## PWA Features

- Install as app on mobile/desktop
- Works offline
- Background sync when connection returns
- App icons and splash screen

## Tech Stack

- Frontend: Vanilla HTML/CSS/JS
- Backend: Netlify Functions (Node.js)
- Database: SQLite
- PWA: Service Worker + Web App Manifest
- Hosting: Netlify (free tier)

---

Built with ❤️ for creative professionals who need to stay organized without the complexity.