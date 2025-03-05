
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageBadge from '../components/PageBadge';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const Blog = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const articleRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Blog article data
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2023",
      excerpt: "Explore the emerging artificial intelligence trends that will shape business operations and decision-making in the coming year.",
      image: "/placeholder.svg",
      date: "June 15, 2023",
      category: "AI Strategy",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How Natural Language Processing is Transforming Customer Service",
      excerpt: "Discover how NLP technologies are revolutionizing customer interactions and enabling more personalized support experiences.",
      image: "/placeholder.svg",
      date: "May 28, 2023",
      category: "NLP",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Building Ethical AI Systems: A Framework for Businesses",
      excerpt: "Learn about the key considerations and best practices for implementing AI solutions that align with ethical principles and values.",
      image: "/placeholder.svg",
      date: "May 12, 2023",
      category: "AI Ethics",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "The ROI of AI: Measuring the Business Impact of Artificial Intelligence",
      excerpt: "A comprehensive guide to evaluating the return on investment for AI implementations across different business functions.",
      image: "/placeholder.svg",
      date: "April 29, 2023",
      category: "Business",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Computer Vision Applications Changing the Manufacturing Industry",
      excerpt: "Explore how computer vision technology is improving quality control, safety, and efficiency in modern manufacturing facilities.",
      image: "/placeholder.svg",
      date: "April 15, 2023",
      category: "Computer Vision",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Generative AI: Creative Applications for Marketing and Content Creation",
      excerpt: "Discover how generative models are being used to create innovative marketing campaigns and streamline content production.",
      image: "/placeholder.svg",
      date: "March 30, 2023",
      category: "Generative AI",
      readTime: "8 min read"
    }
  ];

  // Categories for filtering (future implementation)
  const categories = [
    "All Topics",
    "AI Strategy",
    "NLP",
    "Computer Vision",
    "AI Ethics",
    "Business",
    "Generative AI"
  ];

  useEffect(() => {
    articleRefs.current = articleRefs.current.slice(0, articles.length);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = articleRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1 && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    articleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [articles.length]);

  return (
    <div className="bg-black min-h-screen relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95 pointer-events-none"></div>
      
      {/* Floating orbs for visual consistency */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-neon-orange/5 filter blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <PageBadge text="Insights & Expertise" icon="book" />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">
            AI Insights Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest thoughts on artificial intelligence, machine learning, and how these technologies are transforming businesses
          </p>
        </div>

        {/* Category Filter - For future implementation */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                index === 0
                  ? 'bg-white/10 text-white font-medium border border-white/20'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card overflow-hidden rounded-xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video md:aspect-auto">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neon-blue/20 text-neon-blue">
                    <Tag className="w-3 h-3 mr-1" />
                    {articles[0].category}
                  </span>
                  <span className="inline-flex items-center text-xs text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {articles[0].date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{articles[0].title}</h2>
                <p className="text-gray-300 mb-6">{articles[0].excerpt}</p>
                <div className="mt-auto">
                  <Link 
                    to={`#`} 
                    className="neon-button-blue px-6 py-2 inline-flex items-center"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <div
              key={article.id}
              ref={(el) => (articleRefs.current[index + 1] = el)}
              className={`transition-all duration-700 ${
                visibleItems.includes(index + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card overflow-hidden rounded-xl border border-white/10 h-full flex flex-col">
                <div className="relative aspect-video">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neon-blue/20 text-neon-blue">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                    <Link to="#" className="text-neon-blue hover:text-white transition-colors duration-300 flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Sign-up */}
        <div className="mt-16 glass-card p-8 rounded-xl border border-white/10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-6">Stay updated with the latest in AI developments and receive our expert insights directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue outline-none transition-colors duration-300"
            />
            <button 
              type="submit"
              className="neon-button-orange px-6 py-3 rounded-lg"
            >
              <span className="relative z-10">Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
