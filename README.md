# Personal Developer Portfolio Site

A modern personal portfolio website built with Next.js that showcases blog posts from Tistory and GitHub projects. This project demonstrates how to integrate external data sources using RSS feeds and APIs.

## 🚀 Features

- **Home Page**: Clean landing page with animated logo and real-time clock
- **Blog Articles**: Automatically fetches and displays blog posts from Tistory using RSS feeds
- **GitHub Projects**: Shows GitHub repositories with star counts, forks, and other metadata
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Real-time Updates**: Dynamic content loading from external sources

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Data Sources**: 
  - Tistory RSS Feed
  - GitHub REST API
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── articles/       # Blog articles page with Tistory integration
│   ├── projects/       # GitHub projects page
│   ├── components/     # Reusable UI components
│   └── page.tsx        # Home page
├── types/              # TypeScript type definitions
└── ...
```

## 🔧 Data Integration

### Tistory Blog Integration
The site fetches blog posts from Tistory using RSS feeds:
- RSS feed URL: `https://suhalee.tistory.com/rss`
- Parses XML content to extract post metadata
- Calculates reading time and formats dates
- Supports both client-side and server-side rendering

### GitHub Projects Integration
GitHub repositories are fetched using the GitHub REST API:
- Filters out forked and archived repositories
- Sorts by popularity (stars + forks)
- Displays repository metadata including language, license, and topics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables (Optional)
For enhanced Tistory integration, you can set up environment variables:

```env
# Tistory API Configuration (Optional - RSS is used by default)
TISTORY_ACCESS_TOKEN=your_access_token_here
TISTORY_BLOG_NAME=your_blog_name_here
```

### Customizing Data Sources

#### Change Tistory Blog
Update the RSS feed URL in `src/app/articles/tistory-api.ts`:
```typescript
const response = await fetch('https://your-blog.tistory.com/rss');
```

#### Change GitHub Username
Update the GitHub username in `src/app/projects/page.tsx`:
```typescript
const repos = await fetchGitHubRepos('your-github-username');
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `src/app/globals.css` - Global styles
- Component-specific Tailwind classes

### Components
Key components can be found in `src/app/components/`:
- `Navigation.tsx` - Site navigation
- `RealTimeClock.tsx` - Real-time clock component
- `LoadingSpinner.tsx` - Loading states
- `ErrorDisplay.tsx` - Error handling

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The project includes all necessary configurations for Vercel deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

---

Built with ❤️ using Next.js and modern web technologies.
