
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Separator } from '@/components/ui/separator';
import { Check, Brain, Cpu, Bot, LineChart, Code, Workflow, Database, Cog, Calculator, Shield, Users, LayoutGrid, BookOpen, BarChart3, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI Strategy Consulting",
      description: "We help businesses develop comprehensive AI strategies aligned with their goals and objectives.",
      icon: <Brain className="h-6 w-6" />,
      color: "orange",
      examples: [
        {
          sector: "Healthcare",
          description: "Strategic roadmap for implementing AI diagnostics systems to improve patient outcomes."
        },
        {
          sector: "Finance",
          description: "AI integration strategy to enhance fraud detection and automated customer service solutions."
        },
        {
          sector: "Retail",
          description: "Customer experience transformation using AI-driven personalization and demand forecasting."
        }
      ]
    },
    {
      id: 2,
      title: "Custom AI Application Development",
      description: "We build tailored AI applications to address your specific business challenges and opportunities.",
      icon: <Code className="h-6 w-6" />,
      color: "blue",
      examples: [
        {
          sector: "Manufacturing",
          description: "Predictive maintenance systems that reduce downtime and optimize production schedules."
        },
        {
          sector: "Real Estate",
          description: "AI-powered property valuation and market analysis tools for better investment decisions."
        },
        {
          sector: "Agriculture",
          description: "Crop disease detection and yield optimization applications using computer vision."
        }
      ]
    },
    {
      id: 3,
      title: "Natural Language Processing Solutions",
      description: "We implement NLP solutions that enable your systems to understand, interpret, and generate human language.",
      icon: <Bot className="h-6 w-6" />,
      color: "green",
      examples: [
        {
          sector: "Legal",
          description: "Automated contract analysis and clause extraction to streamline document review."
        },
        {
          sector: "Media",
          description: "Content recommendation and sentiment analysis to improve audience engagement."
        },
        {
          sector: "Education",
          description: "Intelligent tutoring systems that adapt to individual student learning patterns."
        }
      ]
    },
    {
      id: 4,
      title: "Computer Vision Implementation",
      description: "We develop systems that can interpret and understand visual information from the world, enabling new applications and automations.",
      icon: <Cpu className="h-6 w-6" />,
      color: "orange",
      examples: [
        {
          sector: "Retail",
          description: "Cashierless checkout systems and shelf monitoring for inventory management."
        },
        {
          sector: "Security",
          description: "Advanced surveillance systems with anomaly detection and person identification."
        },
        {
          sector: "Healthcare",
          description: "Medical imaging analysis for early disease detection and diagnosis assistance."
        }
      ]
    },
    {
      id: 5,
      title: "Predictive Analytics Implementation",
      description: "We build predictive models that help you anticipate trends, behaviors, and outcomes to make proactive decisions.",
      icon: <LineChart className="h-6 w-6" />,
      color: "blue",
      examples: [
        {
          sector: "Insurance",
          description: "Risk assessment models that improve underwriting accuracy and efficiency."
        },
        {
          sector: "Telecommunications",
          description: "Customer churn prediction to enhance retention strategies and service offerings."
        },
        {
          sector: "Energy",
          description: "Demand forecasting and grid optimization to reduce costs and improve reliability."
        }
      ]
    },
    {
      id: 6,
      title: "Machine Learning Operations (MLOps)",
      description: "We establish robust MLOps practices to streamline the deployment, monitoring, and management of ML models.",
      icon: <Cog className="h-6 w-6" />,
      color: "green",
      examples: [
        {
          sector: "E-commerce",
          description: "Automated recommendation engine deployment and performance monitoring."
        },
        {
          sector: "Financial Services",
          description: "Credit scoring model operations with compliance monitoring and version control."
        },
        {
          sector: "Transportation",
          description: "Route optimization systems with continuous learning and adaptation capabilities."
        }
      ]
    },
    {
      id: 7,
      title: "AI-Powered Process Automation",
      description: "We automate complex business processes using AI to increase efficiency and reduce operational costs.",
      icon: <Workflow className="h-6 w-6" />,
      color: "orange",
      examples: [
        {
          sector: "Logistics",
          description: "Intelligent warehouse management and delivery route optimization."
        },
        {
          sector: "HR",
          description: "Resume screening and candidate matching for improved recruitment efficiency."
        },
        {
          sector: "Customer Service",
          description: "Advanced chatbots and ticket routing systems to enhance support quality."
        }
      ]
    },
    {
      id: 8,
      title: "Data Engineering & Infrastructure",
      description: "We design and implement scalable data pipelines and infrastructure to support your AI initiatives.",
      icon: <Database className="h-6 w-6" />,
      color: "blue",
      examples: [
        {
          sector: "Digital Marketing",
          description: "Real-time analytics platforms for campaign performance optimization."
        },
        {
          sector: "Gaming",
          description: "Player behavior tracking and analysis systems to enhance game design."
        },
        {
          sector: "Healthcare",
          description: "Secure patient data platforms that enable AI-driven medical research."
        }
      ]
    },
    {
      id: 9,
      title: "AI Model Training & Fine-tuning",
      description: "We train and fine-tune AI models on your specific data to achieve optimal performance for your use cases.",
      icon: <Bot className="h-6 w-6" />,
      color: "green",
      examples: [
        {
          sector: "Content Creation",
          description: "Custom language models trained on brand voice for consistent content generation."
        },
        {
          sector: "Manufacturing",
          description: "Computer vision models fine-tuned to detect product defects specific to your production line."
        },
        {
          sector: "Research",
          description: "Specialized machine learning models for scientific data analysis and discovery."
        }
      ]
    },
    {
      id: 10,
      title: "Data Science Consulting",
      description: "We provide expert data science consulting to help you extract actionable insights from your data.",
      icon: <Calculator className="h-6 w-6" />,
      color: "orange",
      examples: [
        {
          sector: "Pharmaceuticals",
          description: "Clinical trial data analysis to accelerate drug development and improve outcomes."
        },
        {
          sector: "Retail",
          description: "Customer behavior analysis to optimize store layouts and product placement."
        },
        {
          sector: "Finance",
          description: "Market trend analysis and trading strategy optimization using advanced statistics."
        }
      ]
    },
    {
      id: 11,
      title: "AI Ethics & Governance",
      description: "We help establish ethical AI frameworks and governance structures to ensure responsible AI adoption.",
      icon: <Shield className="h-6 w-6" />,
      color: "blue",
      examples: [
        {
          sector: "Banking",
          description: "Fairness auditing for loan approval algorithms to prevent discriminatory outcomes."
        },
        {
          sector: "Healthcare",
          description: "Privacy-preserving AI systems that maintain patient confidentiality while improving care."
        },
        {
          sector: "Public Sector",
          description: "Transparent decision-making systems with built-in accountability mechanisms."
        }
      ]
    },
    {
      id: 12,
      title: "AI-Enhanced Customer Experience",
      description: "We implement AI solutions that transform customer interactions and experiences across all touchpoints.",
      icon: <Users className="h-6 w-6" />,
      color: "green",
      examples: [
        {
          sector: "Hospitality",
          description: "Personalized guest experience systems that anticipate needs and preferences."
        },
        {
          sector: "Banking",
          description: "Intelligent financial assistants that provide personalized advice and recommendations."
        },
        {
          sector: "Retail",
          description: "Omnichannel personalization engines that create consistent shopping experiences."
        }
      ]
    },
    {
      id: 13,
      title: "AI Integration Services",
      description: "We seamlessly integrate AI capabilities into your existing systems and applications to enhance their functionality.",
      icon: <LayoutGrid className="h-6 w-6" />,
      color: "orange",
      examples: [
        {
          sector: "Enterprise Software",
          description: "AI-enhanced ERP systems that optimize resource allocation and planning."
        },
        {
          sector: "CRM",
          description: "Intelligent lead scoring and opportunity prioritization to improve sales efficiency."
        },
        {
          sector: "Supply Chain",
          description: "AI-powered inventory management and demand forecasting integration."
        }
      ]
    },
    {
      id: 14,
      title: "AI Education & Training",
      description: "We provide customized AI education and training programs to build AI capabilities within your organization.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "blue",
      examples: [
        {
          sector: "Corporate",
          description: "Executive AI literacy programs to enable strategic decision-making about AI investments."
        },
        {
          sector: "Software Development",
          description: "Hands-on workshops for developers to implement machine learning in applications."
        },
        {
          sector: "Data Teams",
          description: "Advanced AI technique training for data scientists to enhance analytical capabilities."
        }
      ]
    },
    {
      id: 15,
      title: "AI-Driven Business Intelligence",
      description: "We develop intelligent business intelligence solutions that provide deeper insights and automate analysis.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "green",
      examples: [
        {
          sector: "Marketing",
          description: "Campaign attribution and ROI analysis with predictive customer journey mapping."
        },
        {
          sector: "Operations",
          description: "Process efficiency analysis with automated bottleneck identification and resolution."
        },
        {
          sector: "Executive Decision-Making",
          description: "AI-powered dashboards that highlight critical business insights and opportunities."
        }
      ]
    },
    {
      id: 16,
      title: "Generative AI Solutions",
      description: "We implement cutting-edge generative AI technologies to create new content, designs, and solutions.",
      icon: <Sparkles className="h-6 w-6" />,
      color: "orange",
      examples: [
        {
          sector: "Creative Industries",
          description: "AI-assisted design tools that accelerate creative workflows and explore new possibilities."
        },
        {
          sector: "Product Development",
          description: "Generative design systems for faster prototyping and innovation."
        },
        {
          sector: "Content Marketing",
          description: "Automated content generation platforms that maintain brand voice and quality."
        }
      ]
    },
    {
      id: 17,
      title: "Comprehensive Tech Solutions with AI",
      description: "We can do everything in the tech space with the use of AI, transforming your business operations and capabilities.",
      icon: <Brain className="h-6 w-6" />,
      color: "blue" as "orange" | "blue" | "green", // Explicitly type as one of the allowed values
      examples: [
        {
          sector: "Startups",
          description: "End-to-end tech stack development with integrated AI capabilities from day one."
        },
        {
          sector: "Enterprise Transformation",
          description: "Complete digital transformation powered by AI across all business functions."
        },
        {
          sector: "Industry Disruption",
          description: "Revolutionary business model implementation using cutting-edge AI technologies."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our AI Services</h1>
        <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
          We offer a comprehensive range of AI services designed to help businesses like yours leverage the power of artificial intelligence. Here's what we can do for you:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className="flex flex-col h-full">
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              index={index}
              isVisible={true}
            />
            <div className="mt-4 space-y-4 flex-grow bg-card rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-lg">Example Applications:</h3>
              <div className="space-y-4">
                {service.examples.map((example, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-medium text-primary">{example.sector}</div>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                    {index < service.examples.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
