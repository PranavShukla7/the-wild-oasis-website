# The Wild Oasis Website

A luxury cabin booking and reservation platform built with modern web technologies. This full-stack application allows users to browse available cabins, make reservations, manage their bookings, and update their profiles.

## 🌍 Project Overview

The Wild Oasis is a sophisticated web application designed for a luxury cabin resort. It provides:

- **Cabin Browsing**: Explore available luxury cabins with detailed information
- **Reservation System**: Book cabins for specific dates with real-time availability checks
- **User Authentication**: Secure Google OAuth login via NextAuth
- **Reservation Management**: View, edit, and delete your bookings
- **Guest Profiles**: Manage personal information and preferences
- **Admin Panel**: Access account settings and reservation history

## 🏗️ Tech Stack

### Frontend

- **React** `19.2.3` - UI library for building components
- **Next.js** `16.1.1` - React framework with server-side rendering and API routes
- **Tailwind CSS** `4.1.18` - Utility-first CSS framework for styling
- **@heroicons/react** `2.2.0` - Beautiful SVG icons
- **react-day-picker** `9.13.0` - Date picker component for reservation dates

### Backend & Database

- **Supabase** - PostgreSQL database and real-time features via `@supabase/supabase-js` `2.91.1`
- **NextAuth.js** `5.0.0-beta.30` - Authentication and authorization

### Development Tools

- **ESLint** `9` - Code quality and linting
- **PostCSS** `8.5.6` - CSS transformation
- **Babel React Compiler** `1.0.0` - Optimized React compilation
- **Autoprefixer** `10.4.23` - Automatic vendor prefixes for CSS

## 📋 Project Structure

```
├── app/
│   ├── _components/          # Reusable React components
│   │   ├── Cabin.js          # Individual cabin display
│   │   ├── CabinList.js      # Cabin listing page
│   │   ├── Reservation.js    # Reservation form
│   │   ├── ReservationList.js # Booked reservations display
│   │   ├── DateSelector.js   # Date picker for reservations
│   │   ├── LoginMessage.js   # Authentication UI
│   │   ├── Navigation.js     # Site navigation
│   │   └── ...other components
│   ├── _lib/                 # Utility functions and services
│   │   ├── auth.js           # NextAuth configuration
│   │   ├── actions.js        # Server actions
│   │   ├── data-service.js   # Database queries
│   │   └── supabase.js       # Supabase client
│   ├── _styles/
│   │   └── globals.css       # Global CSS styles
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   └── cabins/           # Cabin API endpoints
│   ├── cabins/               # Cabin listing page
│   │   └── [cabinid]/        # Individual cabin details
│   ├── account/              # User account pages
│   │   ├── profile/          # Profile management
│   │   └── reservations/     # Reservation management
│   ├── about/                # About page
│   ├── login/                # Login page
│   ├── layout.js             # Root layout
│   ├── page.js               # Home page
│   └── ...other pages
├── public/                   # Static assets
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
├── middleware.js             # Next.js middleware
├── jsconfig.json             # JavaScript path aliases
└── package.json              # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account for database
- Google OAuth credentials for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd the-wild-oasis-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<your-nextauth-secret>
   AUTH_GOOGLE_ID=<your-google-oauth-id>
   AUTH_GOOGLE_SECRET=<your-google-oauth-secret>
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run prod` - Build and start production server

## 🔐 Authentication

- **Provider**: Google OAuth via NextAuth.js
- **Protection**: Pages in `/account/*` require authentication
- **User Creation**: Guest records are automatically created in Supabase upon first login
- **Session Management**: Handled by NextAuth with secure tokens

## 📝 Key Features

### 1. **Cabin Management**

- Display all available cabins with images, pricing, and capacity
- Individual cabin detail pages
- Image optimization with Next.js Image component

### 2. **Reservation System**

- Browse available dates using date picker
- Create new reservations
- Edit existing reservations
- Cancel reservations with confirmation
- Real-time availability checking

### 3. **User Account**

- Update profile information
- View booking history
- Manage reservations
- Personal settings

### 4. **Responsive Design**

- Mobile-first design with Tailwind CSS
- Optimized images for all screen sizes
- Accessible UI components

## 🗄️ Database Schema (Supabase)

The application uses PostgreSQL via Supabase with tables for:

- **guests** - User account information
- **cabins** - Cabin details and pricing
- **bookings** - Reservation records
- Additional tables for settings and preferences

## 🎨 Styling

- **Framework**: Tailwind CSS v4
- **Custom Colors**: Primary and Accent color palettes
- **Icons**: Hero Icons for UI elements
- **Responsive**: Mobile-first responsive design

## 🔒 Security Features

- NextAuth.js for secure authentication
- Protected API routes
- Environment variable protection for sensitive data
- CSRF protection via NextAuth
- Google OAuth for secure login

## 📱 Responsive & Performance

- **Server-Side Rendering**: Improved SEO with Next.js
- **Image Optimization**: Automatic image optimization and formatting
- **React Compiler**: Babel plugin for optimized React code
- **Middleware**: Request handling and protection

## 🐛 Development

### Code Quality

- ESLint for code consistency
- Next.js built-in linting

### Best Practices

- Server Components for data fetching
- Server Actions for form submissions
- Component-based architecture
- CSS modules and Tailwind for styling

## 📚 Learning Resources

This project demonstrates:

- Modern React patterns and hooks
- Next.js App Router and file-based routing
- Database integration with Supabase
- Authentication with NextAuth.js
- Full-stack development with Next.js
- Real-time data fetching and mutations

## 🤝 Contributing

Feel free to fork, modify, and use this project for learning purposes. This is a professional-level application suitable for portfolio demonstrations.

## 📄 License

This project is part of a professional React learning course.

## 👨‍💻 Author

Built as a comprehensive learning project for modern web development practices.

---

**Enjoy exploring the wild oasis! 🌲🏡**
