import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Code, Globe, Lightbulb, Rocket, Brain, Sparkles, Users, GraduationCap } from 'lucide-react';

const CodingPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome Super Stars 🌟",
      subtitle: "I am your host, Code Monkey 🐒",
      speaker: {
        name: "Abdullah Ismail",
        role: "Software Engineer at Moniepoint",
        mantra: "You can make anything happen, Just believe that you can!",
        image: "https://whalewalker.netlify.app/packages/images/255E1902-7615-40F5-97F6-3F4EB2117038_1_201_a.jpeg?w=400&h=400&fit=crop"
      },
      icon: Sparkles,
      bg: "from-blue-900 via-cyan-900 to-teal-900",
      layout: "centered"
    },
    {
      title: "Unlock Your Future",
      subtitle: "Introduction to Coding & Programming",
      icon: Rocket,
      question: "What if you could create the apps you use every day?",
      bg: "from-slate-900 via-gray-900 to-zinc-900",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
      layout: "split"
    },
    {
      title: "Let's Start With a Question...",
      icon: Brain,
      question: "How much time do you spend on your phone?",
      subquestion: "TikTok, Snapchat, Candy Crush, Instagram, WhatsApp... Every single app you use? Someone wrote CODE to make it work!",
      bg: "from-slate-950 via-gray-950 to-zinc-950",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      layout: "minimal"
    },
    {
      title: "So... What Exactly IS Coding?",
      icon: Code,
      question: "Have you ever given someone directions to your house?",
      bg: "from-emerald-950 via-teal-950 to-cyan-950",
      layout: "minimal"
    },
    {
      title: "Coding is Like Giving Directions",
      icon: Code,
      content: [
        "🗣️ 'Turn left at the junction'",
        "🗣️ 'Go straight for 5 minutes'",
        "🗣️ 'Stop at the blue gate'",
        "",
        "💡 Coding is just like that—but you're giving instructions to a computer!",
        "",
        "It's a superpower that lets you tell machines what to do."
      ],
      bg: "from-emerald-950 via-teal-950 to-cyan-950",
      gif: "https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif",
      layout: "card"
    },
    {
      title: "Quick Question for You:",
      icon: Lightbulb,
      question: "What's your favorite app or game?",
      subquestion: "Instagram? WhatsApp? Candy Crush? FIFA?",
      bg: "from-blue-950 via-indigo-950 to-violet-950",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      layout: "minimal"
    },
    {
      title: "They All Started Like You",
      icon: Lightbulb,
      content: [
        "💎 Every single one was built by someone who learned to code.",
        "",
        "✨ And guess what? They started exactly where you are now.",
        "",
        "🚀 The developers behind your favorite apps were once beginners too!"
      ],
      bg: "from-blue-950 via-indigo-950 to-violet-950",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      layout: "split"
    },
    {
      title: "Why Does Coding Matter?",
      icon: Globe,
      question: "What if I told you coding powers almost EVERYTHING around you?",
      bg: "from-orange-950 via-red-950 to-rose-950",
      layout: "minimal"
    },
    {
      title: "Coding Powers Everything",
      icon: Globe,
      content: [
        "📱 Your smartphone & every app on it",
        "🎮 Video games like FIFA, Call of Duty",
        "🌐 Websites & social media platforms",
        "🏦 Banking apps & mobile money",
        "🚗 Cars, traffic lights & GPS",
        "🤖 Robots, AI & smart devices",
        "",
        "⚡ Technology is everywhere—and it all runs on code!"
      ],
      bg: "from-orange-950 via-red-950 to-rose-950",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      layout: "card"
    },
    {
      title: "Here's Another Question:",
      icon: Brain,
      question: "What problems do you see in your community?",
      subquestion: "Bad roads? Difficulty paying bills? Finding good schools?",
      bg: "from-rose-950 via-pink-950 to-fuchsia-950",
      layout: "minimal"
    },
    {
      title: "You Can Build Solutions!",
      icon: Brain,
      content: [
        "💡 What if YOU could build an app to solve one of these problems?",
        "",
        "🌟 That's the power of coding—you can create solutions!",
        "",
        "🇳🇬 Nigerian developers are already doing this—building apps that change lives.",
        "",
        "✨ Your idea could be the next big thing!"
      ],
      bg: "from-rose-950 via-pink-950 to-fuchsia-950",
      layout: "minimal"
    },
    {
      title: "Let Me Ask You This:",
      icon: Rocket,
      question: "What do you want to be when you grow up?",
      bg: "from-purple-950 via-indigo-950 to-blue-950",
      layout: "minimal"
    },
    {
      title: "Amazing Tech Careers",
      icon: Rocket,
      content: [
        "💼 Software Developer – Build apps & websites",
        "🎮 Game Developer – Create the next FIFA or Fortnite",
        "🤖 AI Engineer – Work with robots & intelligent systems",
        "👨‍💼 Tech Entrepreneur – Start your own tech company",
        "📊 Data Scientist – Analyze data for big companies",
        "🎨 UI/UX Designer – Design beautiful digital experiences",
        "",
        "🚀 All these careers START with learning to code!"
      ],
      bg: "from-purple-950 via-indigo-950 to-blue-950",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      layout: "card"
    },
    {
      title: "Nigerian Tech Heroes",
      icon: Users,
      question: "Did you know Nigerians are building world-class tech companies?",
    },
    {
      title: "Nigerian Tech Heroes",
      subtitle: "Shola Akinlade",
      icon: Users,
      hero: {
        name: "Shola Akinlade",
        achievement: "Co-founder & CEO of Paystack",
        company: "Paystack",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png",
        description: "Built a payment platform that sold to Stripe for $200M. Started by learning to code and solving a real problem in online payments across Africa.",
        image: "https://nairametrics.com/wp-content/uploads/2021/04/Shola-Akinlade.jpg?w=300&h=300&fit=crop",
        story: "Started coding to solve payment challenges faced by Nigerian businesses. His dedication turned Paystack into one of Africa's biggest tech success stories."
      },
      bg: "from-blue-950 via-indigo-950 to-purple-950",
      layout: "hero"
    },
    {
      title: "Nigerian Tech Heroes",
      subtitle: "Tosin Eniolorunda",
      icon: Users,
      hero: {
        name: "Tosin Eniolorunda",
        achievement: "Founder & CEO of Moniepoint",
        company: "Moniepoint",
        companyLogo: "https://wp.logos-download.com/wp-content/uploads/2024/09/Moniepoint_Logo.svg?dl",
        description: "Built Nigeria's largest digital banking platform, processing over ₦600 billion monthly and serving millions of businesses across Nigeria.",
        image: "https://eu-west-2.graphassets.com/AxQ8YTi9LTCrOeR0pPuwfz/output=format:webp/MJeJv3KhS0Voc9mGagHR",
        story: "Started Moniepoint to empower small businesses with digital banking. Today, it's one of Africa's fastest-growing fintech companies, transforming how businesses operate across Nigeria."
      },
      bg: "from-emerald-950 via-teal-950 to-cyan-950",
      layout: "hero"
    },
    {
      title: "Nigerian Tech Heroes",
      subtitle: "Odunayo Eweniyi",
      icon: Users,
      hero: {
        name: "Odunayo Eweniyi",
        achievement: "Co-founder & COO of PiggyVest",
        company: "PiggyVest",
        companyLogo: "https://www.techinafrica.com/wp-content/uploads/2019/08/piggyvest-main-logo-v2.png",
        description: "Built Nigeria's leading savings & investment platform, helping millions of Nigerians save money and build wealth.",
        image: "https://88lately.com/wp-content/uploads/2025/05/88Lately-bio-cover-1.png?w=300&h=300&fit=crop",
        story: "Made saving accessible to millions of Nigerians through technology. PiggyVest now manages billions in savings for everyday Nigerians."
      },
      bg: "from-orange-950 via-amber-950 to-yellow-950",
      layout: "hero"
    },
    {
      title: "What They Have in Common",
      icon: Users,
      question: "Notice a pattern?",
      content: [
        "✅ They all STARTED as beginners",
        "✅ They learned to code",
        "✅ They identified real problems",
        "✅ They built solutions that changed lives",
        "",
        "💡 They're not superhumans",
        "🚀 They just decided to start and never gave up"
      ],
      bg: "from-slate-900 via-gray-900 to-stone-900",
      layout: "card"
    },
    {
      title: "Let's Try Something!",
      icon: Code,
      question: "Want to see how easy coding can be?",
      bg: "from-emerald-950 via-green-950 to-teal-950",
      layout: "minimal"
    },
    {
      title: "Your First Program!",
      icon: Code,
      subquestion: "Here's your first 'program':",
      content: [
        "print('Hello, World!')",
        "print('My name is Abdullah')",
        "print('I am learning to code!')",
        "",
        "✨ That's it! You just learned your first coding command.",
        "💻 This tells the computer to display messages on the screen.",
        "",
        "🎉 Congratulations—you're officially a coder!"
      ],
      bg: "from-emerald-950 via-green-950 to-teal-950",
      gif: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
      isCode: true,
      layout: "card"
    },
    {
      title: "The Truth About Coding",
      icon: Brain,
      question: "It's not about being a genius. It's about being CURIOUS.",
      content: [
        "💡 Every expert started as a beginner",
        "🎯 Focus on progress, not perfection",
        "🔄 Make mistakes and learn from them",
        "⏰ Just 15-30 minutes daily makes a difference",
        "🚀 Build things you're excited about",
        "",
        "💪 The only way to fail is to give up!"
      ],
      bg: "from-yellow-950 via-amber-950 to-orange-950",
      layout: "minimal"
    },
    {
      title: "Where Can You Start Learning?",
      subtitle: "FREE Resources to Begin Your Journey",
      icon: GraduationCap,
      question: "Ready to start? Here's where you can learn for FREE:",
      learningResources: [
        {
          name: "Scratch",
          description: "Create games & animations with visual blocks",
          url: "scratch.mit.edu",
          level: "Beginner",
          icon: "�"
        },
        {
          name: "Code.org",
          description: "Interactive lessons that teach coding basics",
          url: "code.org",
          level: "Beginner",
          icon: "🌐"
        },
        {
          name: "FreeCodeCamp",
          description: "Learn to build websites and get certified",
          url: "freecodecamp.org",
          level: "Beginner to Advanced",
          icon: "�"
        },
        {
          name: "Grasshopper",
          description: "Learn coding right on your phone!",
          url: "grasshopper.app",
          level: "Beginner",
          icon: "📱"
        },
        {
          name: "Khan Academy",
          description: "Computer programming courses and videos",
          url: "khanacademy.org/computing",
          level: "All Levels",
          icon: "🎓"
        },
        {
          name: "SoloLearn",
          description: "Learn coding through mobile app challenges",
          url: "sololearn.com",
          level: "Beginner to Intermediate",
          icon: "📲"
        }
      ],
      content: [
        "",
        "💡 Pro Tip: Start with Scratch or Code.org if you're completely new!",
        "🚀 Then move to FreeCodeCamp to build real projects.",
        "",
        "⏰ Spend just 30 minutes a day and watch yourself grow!"
      ],
      bg: "from-orange-950 via-amber-950 to-yellow-950",
      layout: "grid"
    },
    {
      title: "Your 30-Day Challenge",
      icon: Rocket,
      question: "Ready to transform your life?",
      bg: "from-red-950 via-orange-950 to-amber-950",
      layout: "minimal"
    },
    {
      title: "Here's Your Challenge",
      icon: Rocket,
      content: [
        "🎯 Choose ONE platform to start",
        "⏰ Code for 30 minutes daily",
        "🏗️ Build a simple project",
        "👥 Share your progress",
        "🔥 Join a coding community",
        "",
        "💪 Success Formula:",
        "Consistency > Perfection",
        "",
        "🚀 Your journey starts with a single line of code!"
      ],
      bg: "from-red-950 via-orange-950 to-amber-950",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
      layout: "split"
    },
    {
      title: "Your Future Starts Now",
      icon: Lightbulb,
      question: "What will YOU create?",
      bg: "from-rose-800 via-pink-800 to-fuchsia-800",
      layout: "minimal"
    },
    {
      title: "Unlimited Possibilities",
      icon: Lightbulb,
      content: [
        "The next viral game",
        "An app millions will use",
        "A platform for your community",
        "A tech startup that changes lives",
        "An AI solution to real problems",
        "",
        "Your ideas + Code = Unlimited Possibilities",
        "",
        "The best time to start was yesterday.",
        "The second best time is NOW!"
      ],
      bg: "from-rose-800 via-pink-800 to-fuchsia-800",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
      layout: "split"
    },
    {
      title: "Thank You!",
      subtitle: "Let's Keep the Conversation Going",
      icon: Brain,
      question: "What questions do YOU have about coding?",
      content: [
        "💬 Feel free to ask anything!",
        "",
        "🌟 Remember:",
        "• Every coder started as a beginner",
        "• Mistakes are part of learning",
        "• Your curiosity is your greatest strength",
        "• The tech world needs YOUR unique perspective",
        "",
        "📧 Let's stay connected and support each other!",
        "",
        "🚀 'I can make anything happen, Just believe'"
      ],
      bg: "from-fuchsia-900 via-purple-900 to-indigo-900",
      gif: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      layout: "centered"
    }
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };
    
    globalThis.addEventListener('keydown', handleKeyPress);
    return () => globalThis.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  // Layout rendering functions
  const renderCenteredLayout = () => (
    <div className="max-w-5xl mx-auto text-center space-y-6">
      {slide.speaker ? (
        <>
          <Sparkles size={64} className="animate-pulse mx-auto" />
          <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
          <p className="text-3xl md:text-4xl text-white/90 mb-6">{slide.subtitle}</p>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
                <img 
                  src={slide.speaker.image} 
                  alt={slide.speaker.name}
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl" 
                />
              </div>
              <div className="text-left flex-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.speaker.name}</h2>
                <p className="text-xl md:text-2xl text-cyan-300 font-semibold mb-3">{slide.speaker.role}</p>
                <p className="text-lg md:text-xl text-white/90 mb-4">{slide.speaker.description}</p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-5 border border-cyan-400/30">
                  <p className="text-xl md:text-2xl font-bold italic text-cyan-200">
                    "{slide.speaker.mantra}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Icon size={64} className="animate-pulse mx-auto" />
          <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
          {slide.subtitle && <p className="text-2xl md:text-3xl text-white/90">{slide.subtitle}</p>}
          {slide.question && (
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-2xl md:text-3xl font-semibold">{slide.question}</p>
            </div>
          )}
          {slide.gif && (
            <img src={slide.gif} alt="Animation" className="rounded-2xl shadow-2xl max-w-md mx-auto border-4 border-white/20" />
          )}
          {slide.content && (
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 text-left max-w-2xl mx-auto">
              {slide.content.map((line, idx) => (
                <p key={`line-${currentSlide}-${idx}`} className={`text-lg md:text-xl ${line === '' ? 'mb-3' : 'mb-2'}`}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );

  const renderSplitLayout = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Icon size={56} className="animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
          {slide.subtitle && <p className="text-xl md:text-2xl text-white/90">{slide.subtitle}</p>}
          {slide.question && (
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-xl md:text-2xl font-semibold">{slide.question}</p>
            </div>
          )}
          {slide.content && (
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              {slide.content.map((line, idx) => (
                <p key={`line-${currentSlide}-${idx}`} className={`text-base md:text-lg ${line === '' ? 'mb-3' : 'mb-2'}`}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
        {slide.image && (
          <div className="hidden md:block">
            <img src={slide.image} alt="Visual" className="rounded-3xl shadow-2xl border-4 border-white/20 w-full" />
          </div>
        )}
      </div>
    </div>
  );

  const renderCardLayout = () => (
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <Icon size={56} className="animate-pulse mx-auto" />
      <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
      {slide.subtitle && <p className="text-xl md:text-2xl text-white/90">{slide.subtitle}</p>}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
        {slide.question && (
          <p className="text-2xl md:text-3xl font-semibold mb-6">{slide.question}</p>
        )}
        {slide.gif && (
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
            <img 
              src={slide.gif} 
              alt="Coding Animation" 
              className="relative rounded-3xl shadow-xl max-w-xs w-full mx-auto border-4 border-white/30 hover:scale-105 transition-transform duration-300" 
            />
          </div>
        )}
        {slide.content && (
          <div className={`text-left space-y-2 ${slide.isCode ? 'font-mono bg-slate-950/50 p-6 rounded-xl' : ''}`}>
            {slide.content.map((line, idx) => (
              <p key={`line-${currentSlide}-${idx}`} className={`text-base md:text-lg ${line === '' ? 'mb-3' : ''} ${slide.isCode ? 'text-green-300' : ''}`}>
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderMinimalLayout = () => (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <Icon size={72} className="animate-pulse mx-auto" />
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">{slide.title}</h1>
      {slide.question && (
        <p className="text-2xl md:text-4xl font-semibold text-white/95 leading-relaxed">
          {slide.question}
        </p>
      )}
      {slide.subquestion && (
        <p className="text-xl md:text-2xl text-white/90 italic">{slide.subquestion}</p>
      )}
      {slide.content && (
        <div className="space-y-3 text-xl md:text-2xl">
          {slide.content.map((line, idx) => (
            <p key={`line-${currentSlide}-${idx}`} className={`${line === '' ? 'mb-4' : ''} ${line.startsWith('✅') || line.startsWith('💪') ? 'font-bold' : ''}`}>
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  const renderGridLayout = () => (
    <div className="max-w-7xl mx-auto space-y-6 overflow-y-auto max-h-[85vh]">
      <div className="text-center">
        <Icon size={56} className="animate-pulse mx-auto mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h1>
        {slide.subtitle && <p className="text-xl md:text-2xl text-white/90 mb-4">{slide.subtitle}</p>}
        {slide.question && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/20 inline-block">
            <p className="text-xl md:text-2xl font-semibold">{slide.question}</p>
          </div>
        )}
      </div>

      {slide.successStories && (
        <>
          <div className="grid md:grid-cols-3 gap-5">
            {slide.successStories.map((story, idx) => (
              <div key={`story-${currentSlide}-${idx}`} className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/20 hover:scale-105 transition-transform">
                <img src={story.image} alt={story.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-4 border-cyan-400/50" />
                <h3 className="text-xl font-bold text-center mb-1 text-cyan-300">{story.name}</h3>
                <p className="text-base font-semibold text-center mb-2 text-white/90">{story.achievement}</p>
                <p className="text-sm text-center text-white/80">{story.description}</p>
              </div>
            ))}
          </div>
          {slide.content && (
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="grid md:grid-cols-2 gap-2">
                {slide.content.map((line, idx) => (
                  <p key={`line-${currentSlide}-${idx}`} className="text-base md:text-lg font-semibold">{line}</p>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {slide.learningResources && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {slide.learningResources.map((resource, idx) => (
              <a
                key={`resource-${currentSlide}-${idx}`}
                href={`https://${resource.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl rounded-xl p-5 shadow-xl border border-white/20 hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{resource.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-cyan-300 group-hover:text-cyan-200">{resource.name}</h3>
                    <p className="text-sm text-orange-300 mb-2 font-semibold">{resource.level}</p>
                    <p className="text-sm text-white/90 mb-2">{resource.description}</p>
                    <p className="text-xs text-blue-300 font-mono group-hover:text-blue-200 flex items-center gap-1">
                      🔗 {resource.url}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {slide.content && (
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/20 text-center">
              {slide.content.map((line, idx) => (
                <p key={`line-${currentSlide}-${idx}`} className="text-base md:text-lg mb-1">{line}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );

  const renderHeroLayout = () => (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-8">
        <Icon size={56} className="animate-pulse mx-auto mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h1>
        <p className="text-xl md:text-2xl text-cyan-300">{slide.subtitle}</p>
      </div>
      
      {slide.hero && (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={slide.hero.image} 
                alt={slide.hero.name}
                className="relative w-80 h-80 rounded-3xl object-cover border-4 border-white/30 shadow-2xl"
              />
            </div>
          </div>
          
          {/* Hero Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-3">{slide.hero.name}</h2>
              <p className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-2">{slide.hero.achievement}</p>
              <div className="flex items-center gap-3 mb-4">
                {slide.hero.companyLogo && (
                  <img 
                    src={slide.hero.companyLogo} 
                    alt={slide.hero.company}
                    className="h-8 md:h-10 object-contain bg-white/90 px-3 py-1 rounded-lg"
                  />
                )}
                <p className="text-xl text-orange-300">{slide.hero.company}</p>
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                {slide.hero.description}
              </p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                <p className="text-lg md:text-xl italic text-white/95">
                  {slide.hero.story}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderLayout = () => {
    switch (slide.layout) {
      case 'split':
        return renderSplitLayout();
      case 'card':
        return renderCardLayout();
      case 'minimal':
        return renderMinimalLayout();
      case 'grid':
        return renderGridLayout();
      case 'hero':
        return renderHeroLayout();
      default:
        return renderCenteredLayout();
    }
  };

  return (
    <div className="min-h-screen h-screen bg-gray-900 flex flex-col relative overflow-hidden">
      {/* Main Slide - Full Screen */}
      <div className={`flex-1 bg-gradient-to-br ${slide.bg} flex items-center justify-center relative overflow-hidden`}>
        {/* Background Image */}
        {slide.image && (
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}

        <div className="w-full h-full flex items-center justify-center text-white relative z-10 py-8 px-6">
          {renderLayout()}
        </div>
      </div>

      {/* Slide Counter - Top Right */}
      <div className="absolute top-6 right-6 z-30 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg px-5 py-3 rounded-full shadow-xl border-2 border-white/20">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Navigation Buttons - Centered on Sides */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full font-semibold transition-all transform shadow-2xl opacity-30 hover:opacity-100 ${
          currentSlide === 0
            ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-110 hover:shadow-cyan-500/50'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full font-semibold transition-all transform shadow-2xl opacity-30 hover:opacity-100 ${
          currentSlide === slides.length - 1
            ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 hover:scale-110 hover:shadow-orange-500/50'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default CodingPresentation;
