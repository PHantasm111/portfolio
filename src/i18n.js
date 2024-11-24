import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    resources:{
        en:{
            translation:{
                English: "English",
                French: "French",
                Chinese: "Chinese",
                Download_My_Resume: "Download My Resume",
                myName : "Han P.",
                Home: 'Home',
                About: 'About',
                Work: 'Work',
                Contact: 'Contact',
                hiWords: "Hi, I am Han PANG",
                fullStackDev: "Fullstack developer",
                letUsWorkTogether: "Let's work together",
                grid1_intro: "I am a recent master's graduate with a strong foundation in both frontend and backend development,\n" +
                        "gained through my academic journey.\n" +
                        " My experiences and skills have fueled my ambition to excel as a full-stack developer.",
                grid2Title : "Tech Stack",
                grid2_TechStack : "I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems,\n" +
                    "combined with solid experience in databases like MySQL, PostgreSQL, and MongoDB.",
                grid3Title: "I truly enjoy connecting and collaborating with people from diverse cultural backgrounds.",
                grid3_based: "I'm based in Toulouse, France and open to remote work worldwide.",
                grid3_language: "I can speak French, English, and Chinese.",
                contactMe: "Contact me",
                grid4Title: "My Passion for Coding",
                grid4_content1: "I love solving problems and building things through code.\n" +
                    "Coding isn't just my profession - it is my passion!\n" +
                    "And I find joy in the process of creating and making things work efficiently and effectively.",
                grid4_content2: " I also enjoy learning and exploring new technologies.\n" +
                    "So if you are looking for somebody to collaborate with, feel free to connect with me!\n" +
                    "👉👉👉",
                myWork : "My Work",
                project1_Title: "Insight Harbor - Data Lake Platform",
                project1_Content1 : "Insight Harbor is a website built around data lakes. " +
                    "It includes fundamental knowledge about data lakes, tools for local and cloud-based deployment, " +
                    "and an intelligent Q&A system designed to provide technical architectures for building data lakes based on user preferences.",
                project1_Content2 : "Built as a unique Software-as-a-Service app with Vite.js 5.3.3, Tailwind CSS, JavaScript, " +
                    "Material UI and Mysql, Insight Harbor is designed for optimal performance and scalability.",
                project2_Title: "AI-Image-Video-Editor",
                project2_Content1 : "AI-Image-Video-Editor is a website for processing images and videos. It leverages AI's computational power to enhance image and video processing capabilities, such as background removal, object segmentation, image expansion, and more.",
                project2_Content2 : "By using the Cloudinary API, along with Next.js 15, TypeScript, and Zustand for state management, this website can handle various images and videos with optimal performance.",
                project3_Title: "VideoG - AI Video Generator",
                project3_Content1: "VideoG is a powerful SaaS platform offering a one-stop solution for short video production. " +
                    "Using AI, it automatically generates scripts, " +
                    "voiceovers, and visuals based on user-selected themes, " +
                    "seamlessly integrating these elements to create customized short videos quickly and efficiently.",
                project3_Content2: "Built on Next.js, VideoG integrates GeminiAI, ReplicateAI, and Remotion for video generation. It uses Drizzle ORM, Neon, Firebase, and Clerk to ensure scalability and a smooth experience.",
                project4_Title:"BlogM - Blog Management System",
                project4_Content1:"BlogM is a blog management system that allows easy publishing, editing, and deleting of blog posts. It also enables the management of user subscriptions.",
                project4_Content2: " It integrates TailwindCSS to provide users with a clean and efficient interface design and interactive experience. It uses MongoDB as its database to ensure reliable and flexible data storage.",
                project5_Title:"Imaginify - AI Photo Manipulation App",
                project5_Content1: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
                project5_Content2: "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach.",
                myExperience: "My Work Experience",
                name_IRIT : "IRIT(Institut de Recherche en Informatique de Toulouse)",
                pos_IRIT: "Research intern & Fullstack developer",
                title_IRIT: "During my internship, I focused on analyzing and understanding the technologies and software components of Datalake architectures. I designed an automated recommendation system for technical Datalake architectures. " +
                    "Additionally, I developed a full-stack web application called Insight Harbor and it enhanced my expertise in Datalake architectures and solidified my skills as a full-stack developer.",
                name_gridsum : "Gridsum Holding Inc.",
                pos_gridsum: "Assistant project manager",
                title_gridsum : "During my tenure, I collaborated on project acceptance tasks for 'Sinotrans Limited', " +
                    "ensuring seamless communication and coordination within the project team. " +
                    "I also took responsibility for overseeing the progress of the 'RONGHOTELS & RESORT' project, " +
                    "ensuring timely delivery and adherence to client expectations.",
                name_piink : "PIINK TEKNOLOGY",
                pos_piink: "Data analyst",
                title_piink : "I worked on processing raw data within a database and produced insightful Power BI reports on client activities. " +
                    "This role required me to clean and transform raw data into meaningful datasets, ensuring accuracy and consistency.",
                letsTalk : "Let's Talk",
                letsTalkContent : "Whether you’re looking to build a new website, find the right candidate for the job, improve your existing platform, or bring a unique\n" +
                    "project to life, I’m here to help.",
                fullName : "Full Name",
                fullNamePlaceholder : "John Doe",
                email : "Email",
                emailPlaceholder : "johndoe@example.com",
                message : "Your message",
                messagePlaceholder : "Hi, I have a position/project that might interest you...",
                sendMessage: "Send Message",
                sending : "Sending...",
            }
        },
        fr:{
            translation:{
                English: "Anglais",
                French: "Francais",
                Chinese: "Chinois",
                Download_My_Resume: "Telecharger mon CV",
                myName : "Han P.",
                Home: 'Accueil',
                About: 'À propos',
                Work: 'Travail',
                Contact: 'Contact',
                hiWords: "Bonjour, Je suis Han PANG",
                fullStackDev: "Developpeur Fullstack",
                letUsWorkTogether: "Laissez-nous travailler ensemble",
                grid1_intro: "Je suis récemment diplômé d'un master, " +
                    "avec une solide base en développement frontend et backend, " +
                    "acquise tout au long de mon parcours académique. " +
                    "Ces expériences et compétences ont nourri mon ambition d'exceller en tant que développeur full-stack.",
                grid2Title : "Tech Stack",
                grid2_TechStack : "Je me spécialise en JavaScript/TypeScript, avec un accent sur les écosystèmes React et Next.js, " +
                    "combiné à une solide expérience dans les bases de données telles que MySQL, PostgreSQL et MongoDB.",
                grid3Title: "J'apprécie sincèrement établir des liens et collaborer avec des personnes issues de divers horizons culturels.",
                grid3_based: "Je suis basé a Toulouse, France et ouvert aux travaux distants au monde entier.",
                grid3_language: "Je peux parler Francais, Anglais et Chinois.",
                contactMe: "Contactez-moi",
                grid4Title : "Mon amour pour le codage",
                grid4_content1 : "Je aime trouver des solutions et construire des choses par code.\n" +
                    "Le codage n'est pas seulement mon profession - c'est mon amour!\n" +
                    "Et je trouve plaisir dans le processus de création et de faire fonctionner les choses efficacement et efficacement.",
                grid4_content2 : "Je suis aussi heureux d'apprendre et d'explorer de nouvelles technologies.\n" +
                    "Alors si vous cherchez quelqu'un à collaborer avec, n'heitez pas à m'envoyer un message.\n" +
                    "👉👉👉",
                myWork : "Mon Projet",
                project1_Title: "Insight Harbor - Data Lake Platform",
                project1_Content1 : "Insight Harbor est un site web conçu autour des lacs de données. " +
                    "Il comprend des connaissances fondamentales sur les lacs de données, " +
                    "des outils local et cloud des lacs de données, " +
                    "ainsi qu'un système de Q&A intelligent conçu pour proposer des architectures techniques " +
                    "de création de lacs de données en fonction des préférences des utilisateurs.",
                project1_Content2:"Insight Harbor est une application unique de type Software-as-a-Service (SaaS), " +
                    "construite avec Vite.js 5.3.3, Tailwind CSS, " +
                    "JavaScript, Material UI et MySQL, conçue pour offrir des performances optimales et une grande évolutivité.",
                project2_Title: "AI-Image-Video-Editor",
                project2_Content1 : "AI-Image-Video-Editor est un site web dédié au traitement des images et des vidéos. " +
                    "Il exploite la puissance de calcul de l'intelligence artificielle pour améliorer les capacités de " +
                    "traitement des images et des vidéos, telles que la suppression d'arrière-plan, la segmentation des objets, " +
                    "l'expansion des images, et bien plus encore.",
                project2_Content2 : "En utilisant l'API Cloudinary, accompagnée de Next.js 15, TypeScript et Zustand pour la gestion d'état, ce site web peut traiter divers types d'images et de vidéos avec des performances optimales.",
                project3_Title: "VideoG - AI Video Generator",
                project3_Content1: "VideoG est une plateforme SaaS pour la production de vidéos courtes. " +
                    "Elle utilise l'IA pour générer des scripts, des voix off et " +
                    "des visuels en fonction des thèmes choisis par les utilisateurs, créant rapidement des vidéos personnalisées.",
                project3_Content2: "VideoG est construit sur Next.js, " +
                    "intégrant GeminiAI, ReplicateAI et Remotion pour la génération de vidéos, " +
                    "et utilisant Drizzle ORM, Neon, Firebase et Clerk pour garantir évolutivité et expérience utilisateur fluide.",
                project4_Title:"BlogM - Blog Management System",
                project4_Content1:"BlogM est un système de gestion backend pour blogs qui permet de publier, " +
                    "modifier et supprimer facilement des articles de blog. " +
                    "Il offre également la possibilité de gérer les abonnements des utilisateurs.",
                project4_Content2: "Il intègre TailwindCSS pour offrir aux utilisateurs une interface claire et efficace ainsi qu'une expérience interactive fluide. Il utilise MongoDB comme base de données, garantissant un stockage des données fiable et flexible.",
                project5_Title:"Imaginify - Application de photo par IA",
                project5_Content1: "Imaginify est une application SaaS révolutionnaire qui permet aux utilisateurs de créer des manipulations photo époustouflantes grâce à la technologie IA. Elle propose des fonctionnalités comme l'édition d'images pilotée par IA, un système de paiement et un modèle basé sur des crédits.",
                project5_Content2: "Construit avec Next.js 14, Cloudinary AI, Clerk et Stripe, Imaginify allie technologie de pointe et approche centrée sur l'utilisateur. ",
                myExperience: "Mon Expérience",
                name_IRIT : "IRIT(Institut de Recherche en Informatique de Toulouse)",
                pos_IRIT: "Stage de recherche & Developpeur Fullstack",
                title_IRIT : "Au cours de mon stage, je me suis concentré sur l'analyse et la compréhension des technologies " +
                    "et des composants logiciels des architectures de lacs de données." +
                    " J'ai conçu un système de recommandation automatisé pour les architectures techniques de lacs de données. " +
                    "De plus, j'ai développé une application web full-stack appelée Insight Harbor, " +
                    "ce qui a renforcé mon expertise dans les architectures de lacs de données et consolidé mes compétences " +
                    "en tant que développeur full-stack.",
                name_gridsum : "Gridsum Holding Inc.",
                pos_gridsum: "Assistant chef de projet",
                title_gridsum : "Durant mon emploi, j'ai collaboré sur les tâches d'acceptation de projet pour 'Sinotrans Limited', " +
                    "assurant une communication fluide et une coordination harmonieuse dans l'equipe de projet. " +
                    "J'ai aussi assumé la responsabilité de superviser la progression du projet 'RONGHOTELS & RESORT', " +
                    "assurant une livraison en temps opportun et respectant les attentes du client.",
                name_piink : "PIINK TEKNOLOGY",
                pos_piink: "Analyste de données",
                title_piink : "J'ai travaillé sur le traitement de données brutes dans une base de données et " +
                    "j'ai produit des rapports Power BI perspicaces sur les activités des clients. " +
                    "Ce rôle m'a obligé à nettoyer et à transformer des données brutes en ensembles de données significatifs, " +
                    "garantissant ainsi l'exactitude et la cohérence.",
                letsTalk : "Parlez-nous",
                letsTalkContent : "Que vous cherchiez un site web nouveau, " +
                    "trouvez le meilleur candidat pour le poste, " +
                    "améliorer votre plateforme existante ou " +
                    "bringer un projet unique en vie, je suis ici pour vous aider.",
                fullName : "Nom complet",
                fullNamePlaceholder : "John Doe",
                email : "Email",
                emailPlaceholder : "johndoe@example.com",
                message : "Votre message",
                messagePlaceholder : "Bonjour, je cherche un emploi ou un projet qui pourrait vous interesse...",
                sendMessage: "Envoyer le message",
                sending : "Envoi en cours...",

            }
        },
        cn:{
            translation:{
                English: "英文",
                French: "法文",
                Chinese: "中文",
                Download_My_Resume: "下载我的简历",
                myName : "庞翰",
                Home: '主页',
                About: '简介',
                Work: '经历',
                Contact: '沟通',
                hiWords: "嗨，我是庞翰",
                fullStackDev: "全栈工程师",
                letUsWorkTogether: "让我们一起工作吧",
                grid1_intro: "我是应届硕士毕业生，拥有扎实的前端和后端开发基础，" +
                    "这些技能是在我的学术经历中积累的。这些经验和能力激发了我在全栈开发领域不断追求卓越的雄心。",
                grid2Title : "技术栈",
                grid2_TechStack : "我专注于 JavaScript/TypeScript 语言的开发，尤其是在 React 和 Next.js 生态系统中，" +
                    "同时在 MySQL、PostgreSQL 和 MongoDB 等数据库方面也具有丰富的经验。",
                grid3Title: "我非常享受与来自不同文化背景的人建立联系和合作。",
                grid3_based: "我目前在图卢兹，法国，但是已经做好了更换居住地的准备。",
                grid3_language: "我会法语，英语。",
                contactMe: "请联系我！",
                grid4Title : "我对编程的热爱",
                grid4_content1 : "我喜欢通过代码来解决遇到的问题。编程不仅仅是我职业的一部分 - 它同样是我的热爱 ! 我可以从构建高效的代码中获得乐趣。",
                grid4_content2 : "我也很高兴学习和探索新技术。\n" +
                    "因此，如果你正在寻找合作的人，给我发消息吧！\n" +
                    "👉👉👉",
                myWork : "项目作品",
                project1_Title: "Insight Harbor - 数据湖知识库平台",
                project1_Content1 : "Insight Harbor是一个围绕数据湖构建的网站，它包含了数据湖的基本知识，" +
                    "用于构建数据湖的本地部署以及云端部署的工具。" +
                    "同时，还提供了一个智能的问答系统，用来根据用户的选择提供构建数据湖的技术架构。",
                project1_Content2: "Insight Harbor 是一个独特的软件即服务 (SaaS) 应用，" +
                    "使用 Vite.js 5.3.3、Tailwind CSS、JavaScript、Material UI 和 MySQL 构建，旨在实现最佳性能和可扩展性。",
                project2_Title: "AI-Image-Video-Editor - 图像/视频处理网站",
                project2_Content1 : "AI-Image-Video-Editor 是一个图像和视频的处理网站，它借助AI的计算能力，提升了对图像和视频的处理能力，例如抠图，背景消除，图像扩充等能力。",
                project2_Content2 : "通过使用Cloudinary API， 伴随着Nextjs 15， TypeScript，以及Zustand的状态管理能力，这个网站可以以最佳的性能来处理各种图像和视频。",
                project3_Title: "VideoG - AI视频生成",
                project3_Content1: "VideoG 是一个强大的 SaaS 平台，旨在为用户提供一站式短视频制作解决方案。" +
                    "它利用人工智能的强大计算能力，根据用户选择的主题自动生成剧本、配音和视觉元素。" +
                    "平台将这些元素整合起来，快速生成符合用户需求的短视频。",
                project3_Content2: "VideoG基于Next.js打造，配合GeminiAI，ReplicateAI以及remotion库来完成自动生成短视频的功能，" +
                    "同时基于Drizzle ORM以及Neon，Firebase存储用户数据，" +
                    "使用Clerk用户管理系统，使得网站整体基于现代架构打造，拥有更好的扩展性。",
                project4_Title:"BlogM - 博客后台管理系统",
                project4_Content1:"BlogM 是一个blog后台管理系统，它可以轻松的实现blog的发布， 修改，以及删除等功能。同时还还可以管理用户的订阅。",
                project4_Content2: "它集成了 TailwindCSS，为用户提供了简洁高效的界面设计与交互体验。它使用 MongoDB 作为数据库，确保数据存储的可靠性和灵活性。",
                project5_Title:"Imaginify - AI 照片处理应用",
                project5_Content1: "Imaginify 是一个开创性的 SaaS 应用程序，利用 AI 技术帮助用户创造令人惊叹的照片处理效果。它提供 AI 驱动的图像编辑、支付系统以及基于积分的模式等功能。",
                project5_Content2: "基于 Next.js 14、Cloudinary AI、Clerk 和 Stripe 构建，Imaginify 将尖端技术与用户导向的设计相结合。",
                myExperience: "工作经历",
                name_IRIT : "IRIT(图卢兹计算机科学研究所)",
                pos_IRIT: "全栈工程师",
                title_IRIT : "在我的实习中，我专注于分析和理解数据湖的功能架构和技术架构。" +
                    "我设计了一个自动化的推荐系统来支持数据湖的技术架构。" +
                    "此外，我开发了一个全栈 Web 应用程序叫 Insight Harbor，它增强了我的对数据湖技术架构的理解和实现了我作为全栈开发者的技术能力。",
                name_gridsum : "北京国双科技有限公司",
                pos_gridsum: "助理项目经理",
                title_gridsum: "在我的实习期间，我参与了“中国外运集团”的项目验收工作，其次我通过保持团队之间的流畅沟通和协调来确保项目的顺利进行。" +
                    "此外，我负责跟进“融通酒店”项目的权限分配工作，确保客户权限的及时分配。",
                name_piink : "PIINK TEKNOLOGY",
                pos_piink: "数据分析师",
                title_piink : "我在数据库中处理原始数据，并制作了有价值的 Power BI 报告。" +
                    "这项工作需要我清理和转换原始数据以获得有价值的数据集，确保准确性和一致性。",
                letsTalk : "欢迎联系我",
                letsTalkContent : "你正在寻找新的网站，找到适合的候选人，更新现有的平台，或者想要实现个人项目，我在这里等你！",
                fullName : "姓名",
                fullNamePlaceholder : "庞翰",
                email : "邮箱",
                emailPlaceholder : "panghancn@126.com",
                message : "请留下您的消息",
                messagePlaceholder : "你好，我是...",
                sendMessage: "发送消息",
                sending : "发送中...",
            }
        }
    }
})