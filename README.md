# AI Engineer Portfolio

A professional portfolio website showcasing AI/ML expertise, projects, and experience.

## 🚀 Live Demo

Visit the live portfolio at: [Your GitHub Pages URL will be here]

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Sections Include**:
  - Hero section with professional photo
  - About me
  - Work experience
  - Featured projects (Generative AI, Computer Vision, Data Science)
  - Technical skills with interactive progress bars
  - Volunteer experience
  - Achievements
  - Contact information

## 🛠️ Built With

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Local Development
1. Clone the repository
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/public` directory.

## 🌐 GitHub Pages Deployment

This project is set up for automatic deployment to GitHub Pages:

1. **Push to main/master branch**: The GitHub Action will automatically build and deploy your site
2. **Enable GitHub Pages**: Go to your repository settings > Pages > Source: "GitHub Actions"
3. **Custom Domain** (optional): Add a `CNAME` file with your domain

### Manual Deployment Steps

1. Fork/clone this repository
2. Update the content in `client/src/data/resumeData.ts` with your information
3. Replace the profile photo in `attached_assets/`
4. Push to your main branch
5. Enable GitHub Pages in repository settings
6. Your site will be available at `https://[username].github.io/[repository-name]`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── data/          # Resume data and content
│   │   ├── pages/         # Page components
│   │   └── hooks/         # Custom React hooks
├── attached_assets/        # Images and static assets
├── dist/                  # Production build output
├── .github/workflows/     # GitHub Actions for deployment
└── README.md             # This file
```

## 🎨 Customization

### Update Your Information
Edit `client/src/data/resumeData.ts` to include:
- Personal information
- Work experience
- Projects
- Skills
- Contact details

### Add Your Photo
Replace `attached_assets/image_1743818166760.png` with your professional photo

### Customize Colors
Update `theme.json` to change the color scheme

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS