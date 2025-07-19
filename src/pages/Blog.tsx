
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageBadge from '../components/PageBadge';
import { ArrowRight, Calendar, Tag, Clock, TrendingUp, Users, Zap } from 'lucide-react';

const Blog = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const articleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Opportunities",
      excerpt: "Explore the latest artificial intelligence trends reshaping business operations and discover opportunities for competitive advantage in the evolving digital landscape.",
      image: "/placeholder.svg",
      date: "December 15, 2023",
      category: "AI Strategy",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "How Natural Language Processing Revolutionizes Customer Experience",
      excerpt: "Discover how advanced NLP technologies are transforming customer interactions, enabling personalized experiences and driving unprecedented engagement levels.",
      image: "/placeholder.svg",
      date: "December 8, 2023",
      category: "NLP",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Building Ethical AI: A Comprehensive Framework for Responsible Innovation",
      excerpt: "Learn essential principles and best practices for implementing AI solutions that align with ethical standards while driving business value and social responsibility.",
      image: "/placeholder.svg",
      date: "November 28, 2023",
      category: "AI Ethics",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Measuring AI Success: ROI Metrics That Matter for Modern Businesses",
      excerpt: "A strategic guide to evaluating artificial intelligence investments and measuring tangible business impact across different organizational functions and industries.",
      image: "/placeholder.svg",
      date: "November 15, 2023",
      category: "Business Intelligence",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Computer Vision in Manufacturing: Transforming Quality and Efficiency",
      excerpt: "Explore how cutting-edge computer vision applications are revolutionizing manufacturing processes, improving quality control, and enhancing operational safety.",
      image: "/placeholder.svg",
      date: "November 3, 2023",
      category: "Computer Vision",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Generative AI for Creative Industries: Unlocking New Possibilities",
      excerpt: "Discover innovative applications of generative AI models in marketing, content creation, and creative workflows that are reshaping entire industries.",
      image: "/placeholder.svg",
      date: "October 20, 2023",
      category: "Generative AI",
      readTime: "8 min read"
    }
  ];

  const categories = [
    "All Topics",
    "AI Strategy",
    "NLP",
    "Computer Vision",
    "AI Ethics",
    "Business Intelligence",
    "Generative AI"
  ];

  const insights = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      stat: "87%",
      label: "of businesses report improved efficiency with AI"
    },
    {
      icon: <Users className="h-5 w-5" />,
      stat: "2.5M+",
      label: "professionals upskilled in AI technologies"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      stat: "340%",
      label: "average ROI from successful AI implementations"
    }
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

  const featuredArticle = articles.find(article => article.featured) || articles[0];
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="bg-background min-h-screen">
      <PageBadge text="Insights & Innovation" icon="book" />

      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text text-balance">
            AI Insights & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore the latest developments in artificial intelligence, discover best practices, and learn how AI is transforming businesses worldwide.
          </p>
        </div>

        {/* Industry Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {insights.map((insight, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">
                  {insight.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{insight.stat}</div>
              <div className="text-muted-foreground">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                index === 0
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            visibleItems.includes(0) ? 'opacity-100 animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card overflow-hidden rounded-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative aspect-video lg:aspect-auto">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredArticle.category}
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {featuredArticle.date}
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground text-balance">{featuredArticle.title}</h2>
                <p className="text-muted-foreground mb-6 text-lg">{featuredArticle.excerpt}</p>
                <div className="mt-auto">
                  <Link 
                    to={`#`} 
                    className="btn-primary hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularArticles.map((article, index) => (
            <div
              key={article.id}
              ref={(el) => (articleRefs.current[index + 1] = el)}
              className={`transition-all duration-700 ${
                visibleItems.includes(index + 1) ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card overflow-hidden rounded-xl h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground text-balance">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                    <Link to="#" className="text-primary hover:text-accent transition-colors duration-300 flex items-center font-medium">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto">
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Stay Ahead of the AI Curve</h3>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto text-balance">
            Get the latest AI insights, industry trends, and expert analysis delivered directly to your inbox. Join thousands of professionals staying informed about the future of AI.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary outline-none transition-colors duration-300"
            />
            <button 
              type="submit"
              className="btn-primary px-6 py-3 whitespace-nowrap hover:scale-105 transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
