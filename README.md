# Cookie Consent Banner

A React + Vite project demonstrating a fixed-position cookie consent banner that persists during page scrolling.

## Project Overview

This project trains the model to recognize UI elements that use fixed positioning, anchored to the bottom of the viewport. The cookie banner floats above page content and remains visible as users scroll through the page.

## Features

- **Fixed Cookie Banner**: Positioned at the bottom of the viewport using fixed positioning
- **Dummy Content**: Realistic page layout with header navigation and scrollable content
- **Interactive Buttons**: Reject and Accept All buttons that dismiss the banner
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Tailwind CSS**: Utility-first CSS framework for styling

## Project Structure

```
src/
├── App.jsx          # Main application component with cookie banner
├── main.jsx         # React entry point
└── index.css        # Tailwind CSS imports

index.html          # HTML template
package.json        # Project dependencies and scripts
vite.config.js      # Vite configuration
tailwind.config.js  # Tailwind CSS configuration
postcss.config.js   # PostCSS configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Future Enhancement

The code includes a comment flagging a future bug: `Remove 'fixed bottom-0' to make it scroll away with the page`. This demonstrates how the banner's positioning can be easily modified to demonstrate different layout behaviors.

## Technologies Used

- **React 18**: Modern UI library
- **Vite**: Next generation frontend build tool
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer support
