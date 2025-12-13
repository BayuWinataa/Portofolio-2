import { IProject } from '../interface/Project'

export const projectsData: IProject[] = [
  {
    title: 'E-Commerce Platform',
    image: '/projects/ecommerce.jpg',
    deskripsi:
      'Full-stack e-commerce platform with payment integration, product management, and user authentication.',
    description: 'Built with Next.js, TypeScript, and Stripe API. Features include product catalog, shopping cart, order management, and admin dashboard.',
    type: 'web',
    demo: 'https://ecommerce-demo.example.com',
    repo: 'https://github.com/username/ecommerce-platform',
  },
  {
    title: 'Portfolio Website',
    image: '/projects/portfolio.jpg',
    deskripsi:
      'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    description: 'Personal portfolio showcasing projects, skills, and experience with smooth animations and dark mode support.',
    type: 'web',
    demo: 'https://portfolio.example.com',
    // No repo for this one
  },
  {
    title: 'Social Media Dashboard',
    image: '/projects/dashboard.jpg',
    deskripsi:
      'Analytics dashboard for social media metrics with charts and real-time data.',
    description: 'Real-time analytics dashboard displaying metrics from multiple social media platforms with Chart.js visualization.',
    type: 'web',
    demo: 'https://socialdash.example.com',
    repo: 'https://github.com/username/social-dashboard',
  },
  {
    title: 'Recipe Finder App',
    image: '/projects/recipe.jpg',
    deskripsi:
      'Web application for searching and saving recipes with ingredient filtering.',
    description: 'Responsive recipe app with advanced filtering, search functionality, and ability to save favorites to local storage.',
    type: 'web',
    // Only repo available
    repo: 'https://github.com/username/recipe-finder',
  },
  {
    title: 'Banking App UI Design',
    image: '/projects/banking-ui.jpg',
    deskripsi:
      'Modern banking app UI/UX design with intuitive navigation and clean interface for mobile users.',
    description: 'Complete UI/UX design system created in Figma with component library, user flows, and high-fidelity prototypes.',
    type: 'ui-ux',
    demo: 'https://figma.com/file/banking-design',
    // UI design typically doesn\'t need repo
  },
  {
    title: 'Food Delivery App',
    image: '/projects/food-ui.jpg',
    deskripsi:
      'Complete UI/UX design for food delivery application with user-friendly ordering flow.',
    description: 'End-to-end design for mobile food delivery app including wireframes, prototypes, and design specifications.',
    type: 'ui-ux',
    demo: 'https://figma.com/file/food-delivery-design',
    repo: 'https://github.com/username/food-delivery-prototype',
  },
  {
    title: 'E-Learning Platform',
    image: '/projects/elearning-ui.jpg',
    deskripsi:
      'Educational platform UI design with interactive elements and responsive layout.',
    description: 'Comprehensive learning platform design with course listings, student dashboards, and interactive lesson components.',
    type: 'ui-ux',
    // Only live prototype
    demo: 'https://elearning-prototype.vercel.app',
  },
  {
    title: 'Travel Booking Website',
    image: '/projects/travel.jpg',
    deskripsi:
      'Responsive travel booking website with search, filters, and booking management system.',
    description: 'Full-featured travel booking platform with destination search, price comparison, booking history, and user reviews.',
    type: 'web',
    demo: 'https://travelbooking.example.com',
    repo: 'https://github.com/username/travel-booking',
  },
  {
    title: 'Weather App',
    image: '/projects/weather.jpg',
    deskripsi: 'Real-time weather application with forecast and location-based services.',
    description: 'Weather app using OpenWeather API with 7-day forecast, location search, and temperature unit conversion.',
    type: 'web',
    // Only repository available
    repo: 'https://github.com/username/weather-app',
  },
  {
    title: 'Task Management Tool',
    image: '/projects/tasks.jpg',
    deskripsi: 'Collaborative task management application with real-time updates.',
    description: 'Team task management tool with kanban boards, task assignment, deadlines, and progress tracking.',
    type: 'web',
    demo: 'https://taskapp.example.com',
    repo: 'https://github.com/username/task-management',
  },
]
