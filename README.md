# Platform - Deploy with Confidence

A modern deployment platform inspired by Render.com, built with Next.js and Firebase.

## Features

- 🚀 **Project Management**: Create and manage multiple projects
- 📊 **Dashboard**: Real-time overview of deployments and project status
- 🔄 **Continuous Deployment**: Automated deployments from Git repositories
- 📈 **Analytics**: Monitor deployment success rates and performance
- 🔐 **Authentication**: Secure user authentication with Firebase Auth
- 💾 **Database**: Real-time data synchronization with Firestore
- 🎨 **Modern UI**: Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project (for backend services)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/j143/platform.git
cd platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase configuration

4. Configure environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
# ... other Firebase config values
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js 13+ app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and configurations
│   ├── firebase.ts  # Firebase configuration
│   ├── types.ts     # TypeScript type definitions
│   └── utils.ts     # Helper functions
└── ...
```

## Core Components

- **Dashboard**: Overview of projects and deployments
- **Sidebar**: Navigation with project management
- **ProjectCard**: Individual project display
- **DeploymentCard**: Deployment status and information
- **Header**: Search and user management

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Heroicons
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Deployment**: Vercel (recommended)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions, please open an issue or contact the maintainers.
