export const translations = {
  en: {
    language: {
      names: { en: 'English', he: 'עברית' },
      switchTo: 'Switch language to {language}',
    },
    resume: {
      otherLanguageCta: 'Resume ({language})',
      url: {
        en: '/resume-en.pdf',
        he: '/resume-he.pdf',
      },
    },
    profile: {
      title: 'Software Engineer',
      summary: 'Software Engineer building scalable systems, APIs, and automation solutions',
      about:
        "I'm a passionate developer with a love for creating elegant solutions to complex problems. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design. I enjoy working on projects that make a difference and continuously learning new technologies to stay at the forefront of web development.",
    },
    nav: {
      brand: 'Portfolio',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
      mobileMenuAria: 'Toggle menu',
    },
    hero: {
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
    },
    sections: {
      aboutMe: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Get In Touch',
    },
    contact: {
      intro:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      visitLinkedIn: 'LinkedIn',
      viewGithub: 'GitHub',
      stackOverflow: 'Stack Overflow',
      x: 'X',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    contactForm: {
      openAria: 'Open contact form',
      openButton: 'Contact Me',
      title: 'Send a message',
      successTitle: 'Message sent!',
      successBody: "Thanks for reaching out. I'll get back to you soon.",
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        email: 'you@example.com',
        message: 'Your message...',
      },
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        messageRequired: 'Message is required',
        sendFailed: 'Something went wrong. Please try again or reach out via the links below.',
      },
      actions: {
        cancel: 'Cancel',
        send: 'Send',
        sending: 'Sending...',
      },
    },
    projectCard: {
      loadingVideo: 'Loading video...',
      watchOnYouTube: 'Watch on YouTube',
      liveDemo: 'Visit Website',
      download: 'Download',
      code: 'Code',
    },
    projects: {
      items: {
        p0: {
          title: 'Sleepy - Smart Voice Assistant',
          description:
            'Built a Windows desktop productivity application that helps users stay focused while watching videos by monitoring inactivity and interacting with the user through voice and audio notifications.\n\nKey Features:\n\n• Automatic inactivity detection and configurable sleep timer\n• Voice-based “Are you awake?” interaction with speech recognition\n• Automatically pauses videos when the user becomes inactive\n• Resumes playback only after confirming the user is awake\n• Audio notifications with configurable volume control\n• Configurable timers, detection behavior, and application settings\n• Modular Python architecture designed for reliable background operation',
        },
        p1: {
          title: 'AlHaset Job Talent Platform',
          description:
            'Built a full-stack platform connecting creative professionals with jobs, projects, and hiring opportunities. The platform includes job discovery and applications, a public talent marketplace, photography requests, and automated email alerts for relevant opportunities.\n\nKey Features:\n\n• Role-based authentication and authorization (talents, employers, admins)\n• Job search with filtering, pagination, categories, and Last Minute opportunities\n• Public talent marketplace for discovering creative professionals\n• Job application and management workflows\n• Photography request and offer system for clients and photographers\n• Automated email alerts for relevant jobs and opportunities\n• Admin dashboard for managing users, jobs, requests, and platform activity\n• RESTful Spring Boot API with MongoDB and Redis caching\n• GitHub Actions CI pipeline with automated API tests',
        },
        p2: {
          description:
            'Developed a full-stack employee management system in ASP.NET Core 8 with a clean layered architecture for scalable, maintainable CRUD workflows across employees and departments.\n\nKey Features:\n\n• CRUD for employees and departments with validation and relationship handling\n• Search, filtering, sorting, and pagination for large datasets\n• Dashboard-style insights and statistics\n• Responsive UI with Bootstrap and FontAwesome\n• Production-ready plumbing: EF Core, Serilog logging, Dockerized deployment',
        },
        p3: {
          description:
            'Developed a lightweight accessibility tool designed to improve website usability for users with disabilities. The solution provides dynamic UI adjustments that enhance readability and navigation without requiring changes to the original website code.\n\nKey Features:\n\n• Real-time accessibility adjustments (e.g., text size, contrast, visual clarity)\n• User-friendly interface for quick customization of viewing preferences\n• Works as an overlay layer, allowing integration with existing websites\n• Focus on improving usability for visually impaired users\n\nTechnical Highlights:\n\n• Designed as a flexible client-side solution for easy integration\n• Emphasized performance and minimal impact on page load\n• Built with a focus on simplicity and practical usability',
        },
        p4: {
          description:
            'Developed a modern, responsive portfolio website using React, Vite, and Tailwind CSS, designed to showcase projects and technical skills with a focus on performance, accessibility, and user experience.\n\nKey Features:\n\n• Dark/light mode with persistent user preferences\n• Fully responsive, mobile-first design across all screen sizes\n• Smooth scrolling navigation with subtle animations and transitions\n• Lazy loading for images and sections to improve performance\n• SEO optimization including meta tags, Open Graph, and social sharing support\n• Accessible design using semantic HTML and ARIA attributes\n\nTechnical Highlights:\n\n• Built with React 18 and optimized using Vite for fast load times\n• Styled with Tailwind CSS for scalable and maintainable UI development\n• Deployed via GitHub Pages with automated build configuration\n• Focused on performance optimization and clean component structure',
        },
        p5: {
          description:
            'This project demonstrates automated testing of a login functionality using Appium and Selenium. The tests are designed to run on an Android device using the Chrome browser',
        },
      },
    },
    experience: {
      present: 'Present',
      items: {
        exp0: {
          role: 'Software Architect / Full Stack',
          description:
            'Design and develop end-to-end software platforms and AI-powered solutions for multiple clients and personal projects. Architect scalable systems, build responsive web applications and backend services, implement CI/CD pipelines, integrate cloud and third-party services (OpenAI, Claude, Cloudflare R2, APIs), and manage databases and production deployments using Java, Spring Boot, React, Node.js, TypeScript, JavaScript, MongoDB, PostgreSQL, Redis, Docker, and REST APIs. Accelerate development, debugging, testing, and developing AI agents using AI-assisted engineering tools including Cursor and Claude Code.',
        },
        exp1: {
          role: 'Software Engineer',
          description:
            'Developed test automation infrastructure in C# and SQL to validate software managing medical data and imaging. Integrated automated tests into CI pipelines using Jenkins to support continuous validation and fast release cycles. Collaborated in a focused automation team to meet strict healthcare standards for performance, accuracy, and safety. Used AI tools to improve our code.',
        },
        exp2: {
          role: 'Backend Developer',
          description:
            'Built and maintained scalable microservices with Docker, MongoDB, and RESTful APIs. Created internal tools and services to support developer workflows, including a DB verification utility to detect data drift between branches and production. Developed multi-threaded backend features in Java using Spring Boot for a cloud-based DDoS prevention platform. Created Python scripts to streamline developer workflows and support CI/CD processes. Designed and implemented new RESTful APIs to enhance performance and maintainability. Collaborated with cross-functional teams to deliver new product features in fast-paced agile sprints.',
        },
        exp3: {
          role: 'Senior Automation Engineer / Project Owner',
          description:
            'Designed and built an API test automation infrastructure from scratch in Java, with Jenkins pipelines and automated reporting in cloud environments. Mentored a new team member to contribute effectively. Ensured production stability by proactively fixing critical bugs in high-availability systems. Reduced manual QA effort by 85% on core tests, increased test coverage, and enabled faster biweekly release cycles.',
        },
        exp4: {
          role: 'Automation Engineer',
          description:
            'Worked on AWS-based microservices with Java & Maven. Enhanced microservice test performance using Jenkins pipelines. Verified REST APIs using Postman and Swagger documentation. Analyzed logs and metrics via Datadog to improve system testing, and used Python scripts.',
        },
        exp5: {
          role: 'Full-Stack Developer',
          description:
            'Worked as a full-stack developer on .NET. Frontend: HTML5, JavaScript. Backend: C#. Created and improved queries and stored procedures in databases such as MySQL.',
        },
        exp6: {
          role: 'Manual QA Engineer',
          description:
            'Performed functional and regression testing of electronic and digital signature products. Utilized VMware environments and SQLite databases to replicate user scenarios and validate data integrity. Executed detailed test cases, reported bugs, and collaborated with development teams to ensure high-quality product releases.',
        },
      },
    },
  },
  he: {
    language: {
      names: { en: 'English', he: 'עברית' },
      switchTo: 'החלפת שפה ל־{language}',
    },
    resume: {
      otherLanguageCta: 'Resume ({language})',
      url: {
        en: '/resume-en.pdf',
        he: '/resume-he.pdf',
      },
    },
    profile: {
      title: 'מהנדס תוכנה',
      summary: 'מהנדס תוכנה שמפתח מערכות סקיילביליות, APIs ופתרונות אוטומציה',
      about:
        'אני מפתח עם תשוקה לבניית פתרונות אלגנטיים לבעיות מורכבות. עם ניסיון בטכנולוגיות ווב מודרניות, אני הופך רעיונות למציאות באמצעות קוד נקי ועיצוב מחושב. אני אוהב לעבוד על פרויקטים שמייצרים ערך, ולהמשיך ללמוד טכנולוגיות חדשות כדי להישאר בחזית הפיתוח.',
    },
    nav: {
      brand: 'תיק עבודות',
      home: 'דף הבית',
      about: 'אודות',
      skills: 'כישורים',
      experience: 'ניסיון',
      projects: 'פרויקטים',
      contact: 'צור קשר',
      resume: 'Resume',
      mobileMenuAria: 'פתיחת תפריט',
    },
    hero: {
      viewWork: 'צפה בעבודות',
      getInTouch: 'דבר איתי',
    },
    sections: {
      aboutMe: 'אודותיי',
      projects: 'פרויקטים',
      skills: 'כישורים',
      experience: 'ניסיון',
      contact: 'צור קשר',
    },
    contact: {
      intro:
        'אני תמיד פתוח לשוחח על פרויקטים חדשים, רעיונות יצירתיים או הזדמנויות לקחת חלק בחזון שלכם.',
      visitLinkedIn: 'לינקדאין',
      viewGithub: 'גיטהאב',
      stackOverflow: 'סטאק אוברפלואו',
      x: 'X',
    },
    footer: {
      rights: 'כל הזכויות שמורות.',
    },
    contactForm: {
      openAria: 'פתיחת טופס יצירת קשר',
      openButton: 'צור קשר',
      title: 'שלח הודעה',
      successTitle: 'ההודעה נשלחה!',
      successBody: 'תודה שפנית. אחזור אליך בהקדם.',
      labels: {
        name: 'שם',
        email: 'אימייל',
        message: 'הודעה',
      },
      placeholders: {
        name: 'השם שלך',
        email: 'you@example.com',
        message: 'ההודעה שלך...',
      },
      errors: {
        nameRequired: 'יש להזין שם',
        emailRequired: 'יש להזין אימייל',
        emailInvalid: 'נא להזין כתובת אימייל תקינה',
        messageRequired: 'יש להזין הודעה',
        sendFailed: 'משהו השתבש. נסו שוב או פנו דרך הקישורים למטה.',
      },
      actions: {
        cancel: 'ביטול',
        send: 'שליחה',
        sending: 'שולח...',
      },
    },
    projectCard: {
      loadingVideo: 'טוען וידאו...',
      watchOnYouTube: 'צפה ביוטיוב',
      liveDemo: 'בקרו באתר',
      download: 'הורדה',
      code: 'קוד',
    },
    projects: {
      items: {
        p0: {
          title: 'Sleepy - עוזר קולי חכם',
          description:
            'בניתי אפליקציית דסקטופ ל־Windows לפרודוקטיביות, שעוזרת למשתמשים להישאר ממוקדים בזמן צפייה בסרטונים על ידי זיהוי חוסר פעילות ואינטראקציה קולית והתראות שמע.\n\nתכונות עיקריות:\n\n• זיהוי אוטומטי של חוסר פעילות וטיימר שינה הניתן להגדרה\n• אינטראקציה קולית של "אתה ער?" עם זיהוי דיבור\n• השהייה אוטומטית של סרטונים כשהמשתמש אינו פעיל\n• חידוש הניגון רק לאחר אישור שהמשתמש ער\n• התראות שמע עם שליטה בעוצמת הקול\n• טיימרים, התנהגות זיהוי והגדרות אפליקציה הניתנים להתאמה\n• ארכיטקטורת Python מודולרית שתוכננה לפעולה אמינה ברקע',
        },
        p1: {
          title: 'על הסט פלטפורמה לאנשי יצירה',
          description:
            'בניתי פלטפורמה מקצה לקצה שמחברת אנשי מקצוע יצירתיים עם משרות, פרויקטים והזדמנויות גיוס. הפלטפורמה כוללת גילוי משרות והגשת מועמדות, מרקטפלייס ציבורי של טאלנטים, בקשות צילום והתראות אימייל אוטומטיות על הזדמנויות רלוונטיות.\n\nתכונות עיקריות:\n\n• אימות והרשאות מבוססי תפקיד (טאלנטים, מעסיקים, מנהלים)\n• חיפוש משרות עם סינון, עימוד, קטגוריות והזדמנויות Last Minute\n• מרקטפלייס ציבורי לגילוי אנשי מקצוע יצירתיים\n• תהליכי הגשת מועמדות וניהול משרות\n• מערכת בקשות והצעות צילום ללקוחות ולצלמים\n• התראות אימייל אוטומטיות על משרות והזדמנויות רלוונטיות\n• דשבורד ניהול למשתמשים, משרות, בקשות ופעילות הפלטפורמה\n• RESTful Spring Boot API עם MongoDB ומטמון Redis\n• צינור CI ב־GitHub Actions עם בדיקות API אוטומטיות',
        },
        p2: {
          description:
            'פיתחתי מערכת מקצה־לקצה לניהול עובדים ב־ASP.NET Core 8 עם ארכיטקטורה שכבתית נקייה, המאפשרת תהליכי CRUD סקיילביליים ותחזוקתיים עבור עובדים ומחלקות.\n\nתכונות עיקריות:\n\n• CRUD לעובדים ולמחלקות, כולל ולידציות וטיפול בקשרים בין ישויות\n• חיפוש, סינון, מיון ועימוד (Pagination) למאגרי נתונים גדולים\n• דשבורד לתובנות וסטטיסטיקות מערכת\n• UI רספונסיבי עם Bootstrap ו־FontAwesome\n• תשתיות מוכנות לפרודקשן: EF Core, לוגים עם Serilog, דיפלוי באמצעות Docker',
        },
        p3: {
          description:
            'פיתחתי כלי נגישות קל משקל שנועד לשפר את השימושיות של אתרים עבור משתמשים עם מוגבלויות. הפתרון מספק התאמות UI דינמיות שמשפרות קריאות וניווט, ללא צורך בשינויים בקוד של האתר המקורי.\n\nתכונות עיקריות:\n\n• התאמות נגישות בזמן אמת (לדוגמה: גודל טקסט, ניגודיות, חדות/בהירות)\n• ממשק ידידותי להתאמה מהירה של העדפות תצוגה\n• עובד כשכבת Overlay, כך שניתן לשלב אותו באתרים קיימים\n• דגש על שיפור השימושיות עבור משתמשים עם לקויות ראייה\n\nדגשים טכניים:\n\n• תוכנן כפתרון צד־לקוח גמיש לשילוב קל\n• דגש על ביצועים והשפעה מינימלית על זמן טעינת העמוד\n• נבנה תוך התמקדות בפשטות ובשימושיות פרקטית',
        },
        p4: {
          description:
            'פיתחתי אתר תיק עבודות מודרני ורספונסיבי באמצעות React, Vite ו־Tailwind CSS, שנועד להציג פרויקטים וכישורים טכניים תוך דגש על ביצועים, נגישות וחוויית משתמש.\n\nתכונות עיקריות:\n\n• מצב כהה/בהיר עם שמירת העדפות משתמש באופן מתמשך\n• עיצוב רספונסיבי בגישת Mobile-first לכל גדלי המסכים\n• ניווט בגלילה חלקה עם אנימציות עדינות ומעברים\n• טעינה עצלה (Lazy loading) לתמונות ולסקשנים לשיפור ביצועים\n• אופטימיזציית SEO כולל תגיות מטא, Open Graph ותמיכה בשיתוף ברשתות חברתיות\n• עיצוב נגיש באמצעות HTML סמנטי ותכונות ARIA\n\nדגשים טכניים:\n\n• נבנה עם React 18 ואופטימיזציה באמצעות Vite לזמני טעינה מהירים\n• עוצב עם Tailwind CSS לפיתוח UI סקיילבילי וקל לתחזוקה\n• דיפלוי באמצעות GitHub Pages עם תצורת בילד אוטומטית\n• דגש על אופטימיזציית ביצועים ומבנה קומפוננטות נקי',
        },
        p5: {
          description:
            'פרויקט שמדגים בדיקות אוטומטיות לפונקציונליות התחברות באמצעות Appium ו־Selenium. הבדיקות מיועדות לריצה על מכשיר Android באמצעות דפדפן Chrome.',
        },
      },
    },
    experience: {
      present: 'היום',
      items: {
        exp0: {
          role: 'ארכיטקט תוכנה / Full Stack',
          description:
            'מתכנן ומפתח פלטפורמות תוכנה מקצה לקצה ופתרונות מבוססי AI עבור לקוחות ופרויקטים אישיים. מתכנן מערכות סקיילביליות, בונה אפליקציות ווב רספונסיביות ושירותי Backend, מיישם CI/CD, משלב שירותי ענן וצד שלישי (OpenAI, Claude, Cloudflare R2, APIs), ומנהל מסדי נתונים ופריסות Production עם Java, Spring Boot, React, Node.js, TypeScript, JavaScript, MongoDB, PostgreSQL, Redis, Docker ו־REST APIs. מאיץ פיתוח, דיבוג, בדיקות ופיתוח סוכני AI בעזרת כלי הנדסה מבוססי AI כולל Cursor ו־Claude Code.',
        },
        exp1: {
          role: 'מהנדס תוכנה',
          description:
            'פיתחתי תשתיות אוטומציה לבדיקות ב־C# וב־SQL כדי לאמת תוכנה שמנהלת נתונים והדמיה רפואיים. שילבתי בדיקות אוטומטיות ב־CI pipelines ב־Jenkins כדי לתמוך בוולידציה רציפה ובמחזורי שחרור מהירים. עבדתי בצוות אוטומציה ממוקד כדי לעמוד בסטנדרטים מחמירים של ביצועים, דיוק ובטיחות. השתמשתי בכלי AI לשיפור הקוד.',
        },
        exp2: {
          role: 'מפתח Backend',
          description:
            'בניתי ותחזקתי מיקרו־שירותים סקיילביליים עם Docker, MongoDB ו־REST APIs. פיתחתי כלים ושירותים פנימיים לשיפור תהליכי עבודה של מפתחים, כולל כלי אימות DB לזיהוי סטיות נתונים בין ענפים וסביבת Production. פיתחתי יכולות Backend רב־תהליכיות ב־Java עם Spring Boot עבור פלטפורמת מניעת DDoS בענן. כתבתי סקריפטים ב־Python לאוטומציה של תהליכים ותמיכה ב־CI/CD. תכננתי ומימשתי REST APIs חדשים לשיפור ביצועים ותחזוקתיות, ושיתפתי פעולה עם צוותים שונים בספרינטים אג׳יליים מהירים.',
        },
        exp3: {
          role: 'מהנדס אוטומציה בכיר / בעל מוצר',
          description:
            'תכננתי ובניתי מאפס תשתית אוטומציה לבדיקות API ב־Java, כולל Pipelines ב־Jenkins ודוחות אוטומטיים בסביבות ענן. ליוויתי חבר צוות חדש עד שהצליח לתרום באופן עצמאי. שמרתי על יציבות Production באמצעות טיפול פרואקטיבי בתקלות קריטיות במערכות HA. צמצמתי עבודה ידנית של QA ב־85% בבדיקות ליבה, הגדלתי כיסוי בדיקות ואפשרתי מחזורי שחרור דו־שבועיים מהירים יותר.',
        },
        exp4: {
          role: 'מהנדס אוטומציה',
          description:
            'עבדתי על מיקרו־שירותים מבוססי AWS עם Java ו־Maven. שיפרתי ביצועי בדיקות בעזרת Pipelines ב־Jenkins. אימתתי REST APIs באמצעות Postman ותיעוד Swagger. ניתחתי לוגים ומדדים ב־Datadog לשיפור בדיקות המערכת, והשתמשתי בסקריפטים ב־Python לאוטומציה.',
        },
        exp5: {
          role: 'מפתח Full-Stack',
          description:
            'עבדתי כמפתח Full-Stack על .NET כחלק מצוות R&D. Frontend: HTML5 ו־JavaScript. Backend: C#. יצרתי ושיפרתי שאילתות ו־Stored Procedures במסדי נתונים כגון MySQL.',
        },
        exp6: {
          role: 'בודק QA ידני',
          description:
            'ביצעתי בדיקות פונקציונליות ורגרסיה למוצרי חתימה דיגיטלית ואלקטרונית. השתמשתי בסביבות VMware וב־SQLite כדי לשחזר תרחישי משתמשים ולאמת תקינות נתונים. הרצתי תרחישי בדיקה מפורטים, דיווחתי על תקלות, ושיתפתי פעולה עם צוותי הפיתוח כדי להבטיח איכות גבוהה לפני שחרורים.',
        },
      },
    },
  },
}

