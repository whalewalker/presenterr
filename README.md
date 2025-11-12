# Coding Presentation

An interactive React-based presentation about learning to code, built with Vite, React 18, and Tailwind CSS. Features engaging slides with beautiful gradients, animations, and real-world examples.

## ✨ Features

- 🎯 **16 interactive slides** covering coding fundamentals and inspiration
- 👨‍💻 **Speaker introduction** with personal story and mantra
- 🇳🇬 **Nigerian tech heroes** - Success stories from Paystack, Flutterwave, and PiggyVest founders
- 📚 **Learning resources** - Curated list of free platforms to start coding
- ⌨️ **Keyboard navigation** (Arrow keys ← →)
- 🎨 **Beautiful gradient backgrounds** with smooth transitions
- 🖼️ **Images and GIFs** for visual engagement
- 📱 **Fully responsive design** - works on all devices
- 🎭 **Smooth animations** and hover effects

## 🎓 Topics Covered

1. Speaker introduction (Abdullah Ismail - Moniepoint)
2. What is coding and why it matters
3. Real-world applications of code
4. Career opportunities in tech
5. Nigerian tech success stories
6. First coding example (Python)
7. Where to learn programming
8. Call to action and inspiration

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🎮 Usage

- Use **Arrow keys** (← →) to navigate between slides
- Click **Previous/Next** buttons to navigate
- Click on **slide indicators** to jump to a specific slide
- Press **F** for fullscreen mode (browser dependent)

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **lucide-react** - Beautiful icon library
- **Unsplash** - High-quality images
- **Giphy** - Animated GIFs

## 📁 Project Structure

```
presentation/
├── src/
│   ├── components/
│   │   └── CodingPresentation.jsx  # Main presentation component
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Adding Slides

Edit the `slides` array in `src/components/CodingPresentation.jsx`:

```javascript
{
  title: "Your Title",
  subtitle: "Optional subtitle",
  icon: IconComponent,
  question: "Main question?",
  content: ["Point 1", "Point 2"],
  bg: "from-color-700 to-color-800"
}
```

### Changing Colors

Modify the gradient backgrounds using Tailwind color classes in the `bg` property.

### Adding Images

Use the `image` or `gif` property in slide objects to add visuals.

## 📝 License

MIT

## 👨‍💻 Author

**Abdullah Ismail**  
Software Engineer at Moniepoint  
*"I can make anything happen, Just believe"*
# presenterr
