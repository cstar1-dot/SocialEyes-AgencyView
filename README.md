# 🚀 SocialEyes Agency Dashboard

A modern, interactive social media analytics dashboard built with React, Vite, and Recharts.

## ✨ Features

- 📊 **Real-time Analytics** - Live engagement, followers, and performance metrics
- 📈 **Interactive Charts** - Line, bar, and pie charts powered by Recharts
- 🎨 **Dark Theme Design** - Modern dark mode with gradient accents
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for instant development and production builds
- 🔄 **Time Range Filters** - 24h, 7 days, 30 days, 90 days analytics views

## 📦 Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide Icons** - Icon library

## 🎯 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cstar1-dot/SocialEyes-AgencyView.git
cd SocialEyes-AgencyView

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 Dashboard Sections

1. **Header** - Navigation and time range selector
2. **Stats Cards** - Key metrics with trend indicators
3. **Engagement Chart** - Line chart showing engagement trends
4. **Platform Distribution** - Pie chart of social platform breakdown
5. **Growth Timeline** - Bar chart of followers vs posts over time
6. **Content Types** - Distribution of content types across platforms

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run deploy
```

Or connect your GitHub repo to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects React + Vite
5. Click Deploy ✨

### Deploy to Netlify

```bash
npm run build
# Drag dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push
```

## 📝 Customization

### Edit Colors
Update `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { 500: '#your-color' }
    }
  }
}
```

### Update Data
Edit `src/components/ChartContainer.jsx` to connect real APIs:
```js
const [data, setData] = useState([])

useEffect(() => {
  // Fetch from your API
  fetch('/api/analytics')
    .then(res => res.json())
    .then(data => setData(data))
}, [])
```

### Add More Charts
Copy `ChartContainer` component and modify the chart type and data.

## 🔗 API Integration

Replace mock data with real API calls:

```js
// In Dashboard.jsx or ChartContainer.jsx
useEffect(() => {
  const fetchAnalytics = async () => {
    const response = await fetch('/api/analytics?timeRange=' + timeRange)
    const data = await response.json()
    // Update state with real data
  }
  fetchAnalytics()
}, [timeRange])
```

## 📱 Responsive Breakpoints

- **Mobile** - < 640px
- **Tablet** - 640px - 1024px
- **Desktop** - > 1024px

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ by SocialEyes Team
