# Kumar Sankalp - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with professional photo
  - About section with personal summary
  - Skills showcase with technology icons
  - Featured project (CabNest) with detailed description
  - Education and certifications timeline
  - Contact form with Web3Forms integration
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Downloadable Resume**: Direct link to PDF resume

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: Web3Forms API

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sankalp2233/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5000`

## 🔧 Configuration

### Contact Form Setup

To enable the contact form, you need to:

1. Go to [Web3Forms](https://web3forms.com/)
2. Create a free account and get your access key
3. Open `src/sections/Contact.jsx`
4. Replace `'YOUR_WEB3FORMS_KEY'` with your actual access key

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── Kumar-Sankalp-Resume.pdf
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profile.jpg
│   │       └── cabnest-logo.webp
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.mjs
└── tailwind.config.mjs
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will auto-detect Vite and configure build settings
5. Add your Web3Forms access key to environment variables
6. Deploy!

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 📝 Customization

1. **Personal Information**: Update details in all section components
2. **Profile Photo**: Replace `src/assets/images/profile.jpg`
3. **Project Logo**: Replace `src/assets/images/cabnest-logo.webp`
4. **Resume**: Replace `public/Kumar-Sankalp-Resume.pdf`
5. **Colors**: Modify Tailwind classes in components
6. **Content**: Edit text in each section component

## 📧 Contact

- **Email**: kumarsankalp2310@gmail.com
- **Phone**: +91 7303506822
- **GitHub**: [sankalp2233](https://github.com/sankalp2233)
- **LinkedIn**: [Kumar Sankalp](https://linkedin.com/in/kumar-sankalp)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Kumar Sankalp**
