
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author?: string;
  link: string;
}

export const featuredArticles: Article[] = [
  {
    id: '1',
    title: 'DeepMind Unveils New AI Model That Can Predict Protein Structures with Unprecedented Accuracy',
    excerpt: 'The latest breakthrough from DeepMind is revolutionizing medicine and biological research with capabilities that surpass previous models.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3',
    category: 'Research',
    date: 'May 10, 2025',
    author: 'Sarah Johnson',
    link: '#'
  },
  {
    id: '2',
    title: 'OpenAI Launches GPT-5 with Enhanced Reasoning and Multimodal Capabilities',
    excerpt: 'The next generation language model demonstrates remarkable improvements in understanding context and solving complex problems.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3',
    category: 'Technology',
    date: 'May 8, 2025',
    author: 'Michael Chen',
    link: '#'
  },
];

export const latestArticles: Article[] = [
  {
    id: '3',
    title: 'Microsoft Introduces AI-Powered Productivity Suite for Enterprise',
    excerpt: 'New tools aim to streamline workflows and boost productivity across organizations with advanced AI assistants.',
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3',
    category: 'Enterprise',
    date: 'May 7, 2025',
    link: '#'
  },
  {
    id: '4',
    title: 'Study Reveals Impact of AI on Healthcare Outcomes Across Rural Communities',
    excerpt: 'Research highlights how artificial intelligence is addressing healthcare disparities in underserved areas.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3',
    category: 'Healthcare',
    date: 'May 5, 2025',
    link: '#'
  },
  {
    id: '5',
    title: 'AI Ethics Board Proposes New Guidelines for Responsible AI Development',
    excerpt: 'The comprehensive framework addresses concerns about bias, privacy, and transparency in artificial intelligence systems.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3',
    category: 'Ethics',
    date: 'May 3, 2025',
    link: '#'
  },
  {
    id: '6',
    title: 'Startup Raises $50M to Build AI Infrastructure for Climate Research',
    excerpt: 'The funding will accelerate development of specialized machine learning models to tackle climate change challenges.',
    image: 'https://images.unsplash.com/photo-1586685372690-ab8478aeda27?ixlib=rb-4.0.3',
    category: 'Environment',
    date: 'May 2, 2025',
    link: '#'
  },
];

export const aiInterviews: Article[] = [
  {
    id: '7',
    title: 'AI Authority Interview: Leading the Future of Ethical AI Development',
    excerpt: 'Dr. Emily Chen discusses her groundbreaking work on ensuring AI systems align with human values and ethical principles.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
    category: 'Interview',
    date: 'April 30, 2025',
    author: 'Dr. Emily Chen',
    link: '#'
  },
  {
    id: '8',
    title: 'How This Startup is Using AI to Revolutionize Supply Chain Management',
    excerpt: 'CEO Mark Rodriguez explains how their platform is helping businesses predict disruptions before they happen.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3',
    category: 'Interview',
    date: 'April 28, 2025',
    author: 'Mark Rodriguez',
    link: '#'
  },
  {
    id: '9',
    title: 'The Future of AI Education: Making Advanced Learning Accessible',
    excerpt: 'Education innovator Lisa Park shares insights on democratizing AI knowledge and building the next generation of AI specialists.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efd?ixlib=rb-4.0.3',
    category: 'Interview',
    date: 'April 25, 2025',
    author: 'Lisa Park',
    link: '#'
  },
];

export const mlArticles: Article[] = [
  {
    id: '10',
    title: 'Reinforcement Learning Breakthrough Enables Robots to Learn Complex Tasks',
    excerpt: 'New algorithms allow robots to master intricate physical movements with minimal training data.',
    image: 'https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-4.0.3',
    category: 'Machine Learning',
    date: 'April 22, 2025',
    link: '#'
  },
  {
    id: '11',
    title: 'New Framework Makes Neural Networks More Efficient on Edge Devices',
    excerpt: 'Researchers have developed a method to run sophisticated AI models on smartphones and IoT devices.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3',
    category: 'Machine Learning',
    date: 'April 20, 2025',
    link: '#'
  },
  {
    id: '12',
    title: 'Generative Models Create Synthetic Data to Address Privacy Concerns',
    excerpt: 'Machine learning teams are using artificial data to train models while protecting sensitive information.',
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3',
    category: 'Machine Learning',
    date: 'April 18, 2025',
    link: '#'
  },
];
