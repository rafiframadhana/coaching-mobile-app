# 🎯 Coaching Mobile App Demo

A React Native mobile application built with Expo that demonstrates a simple coaching platform where users can access personalized coaching tasks and track their progress.

## 📱 Overview

This is a coaching mobile app demo designed to showcase task management and user authentication features for a coaching platform. The app includes role-based access control, allowing only coaching participants to access the main application features.

### Key Features

- **Authentication System**: Mock login with role-based access control
- **Task Management**: View and manage coaching tasks with subtasks
- **Coach Interface**: Connect with your assigned coach
- **Progress Tracking**: Monitor task completion and progress
- **Responsive Design**: Clean, modern UI built with NativeWind (Tailwind CSS)

## 🚀 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with file-based routing
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Context API
- **TypeScript**: Full TypeScript support
- **UI Components**: Custom components with modern design

## 📁 Project Structure

```
coaching-mobile-app/
├── app/                     # Main application screens
│   ├── (auth)/             # Authentication screens
│   │   ├── login.tsx       # Login screen
│   │   └── starter.tsx     # Welcome/starter screen
│   ├── (tabs)/             # Main app tab screens
│   │   ├── index.tsx       # Home/dashboard
│   │   ├── tasks.tsx       # Tasks overview
│   │   └── profile.tsx     # User profile
│   ├── (no-access)/        # Restricted access screen
│   ├── tasks/              # Task detail screens
│   │   └── [id]/           # Dynamic task pages
│   └── _layout.tsx         # Root layout
├── contexts/               # React Context providers
│   └── AuthContext.tsx     # Authentication context
├── hooks/                  # Custom React hooks
│   └── useAuthGuard.tsx    # Authentication guard hook
└── global.css             # Global styles
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coaching-mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on specific platforms**
   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 🔐 Authentication

The app uses a mock authentication system with the following test credentials:

### Coaching Participant (Full Access)
- **Email**: `johndoe@example.com`
- **Password**: `password`

### Regular User (Restricted Access)
- **Email**: Any other email
- **Password**: `password`

## 🎯 App Features

### Dashboard
- Welcome message
- Quick statistics overview
- Task completion metrics

### Tasks Management
- View all assigned coaching tasks
- Access detailed task descriptions
- Break down tasks into manageable subtasks
- Track progress and completion

### Coach Interface
- View coach information
- Quick action buttons:
  - 📅 Calendar integration
  - 💬 Direct messaging
  - 🚨 Urgent notifications

### Example Tasks
The app includes sample coaching tasks focused on job search and career development:

- Update Resume for Australian Format
- Research Visa Requirements
- Complete English Proficiency Test
- Apply for Skills Assessment
- Network with Australian Professionals
- Practice Interview Skills
- Research Cost of Living
- Prepare Portfolio for Job Applications
- Connect with Recruitment Agencies
- Study Australian Workplace Culture
- Complete LinkedIn Profile Optimization
- Research Industry Trends
- Plan Accommodation Strategy

## 🎨 Design System

The app follows a clean, modern design philosophy:

- **Colors**: Blue primary, gray neutrals, semantic colors for status
- **Typography**: System fonts with clear hierarchy
- **Components**: Reusable card-based layouts
- **Icons**: Emoji-based icons for quick recognition
- **Spacing**: Consistent padding and margins

## 🔒 Access Control

The app implements role-based access control:

1. **Unauthenticated Users**: Redirected to login screen
2. **Regular Users**: Limited to "no access" screen
3. **Coaching Participants**: Full access to all features

## 📱 Screens Overview

### Authentication Flow
- **Starter Screen**: App introduction and welcome
- **Login Screen**: User authentication
- **No Access Screen**: For non-coaching participants

### Main Application
- **Home Tab**: Dashboard with overview statistics
- **Tasks Tab**: Coach profile and task list
- **Profile Tab**: User profile and settings
- **Task Detail**: Individual task breakdown with subtasks
- **Subtask Detail**: Granular task management

## 🛠 Development Scripts

```bash
# Start development server
npm start

# Reset project (remove example code)
npm run reset-project

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web

# Lint code
npm run lint
```

## 🚀 Getting Started with Development

1. **Explore the Authentication Flow**
   - Start with `contexts/AuthContext.tsx` to understand user management
   - Check `hooks/useAuthGuard.tsx` for navigation logic

2. **Understand the Routing**
   - Expo Router uses file-based routing
   - Protected routes are handled automatically

3. **Customize the Design**
   - Modify `global.css` for global styles
   - Use NativeWind classes for component styling

4. **Add New Features**
   - Create new screens in the `app/` directory
   - Add context providers in `contexts/`
   - Build reusable hooks in `hooks/`

## 📋 Next Steps

This demo provides a foundation for:

- **Real Authentication**: Replace mock auth with actual backend integration
- **API Integration**: Connect to coaching platform APIs
- **Push Notifications**: Add real-time updates for tasks and messages
- **Offline Support**: Cache tasks and sync when online
- **Video Calls**: Integrate video calling for coach sessions
- **Progress Analytics**: Add detailed progress tracking and analytics
- **Payment Integration**: Add subscription and payment features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is a demo application for educational and development purposes.

---

**Built using React Native and Expo**
