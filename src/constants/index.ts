import { Icons } from "@/components";
import { Activity, BarChart2, BarChart3, BarChartBig, CalendarClock, Captions, Fullscreen, HandHeart, HeartHandshake, Image, Languages, LineChart, NotebookPen, Recycle, Smile, TrendingUp, Users, Zap } from "lucide-react";

export const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export const badges = [
    {
        id: 1,
        title: "Meeting Transcription",
        icon: NotebookPen,
    },
    {
        id: 2,
        title: "AI Analysis",
        icon: Activity,
    },
    {
        id: 3,
        title: "CRM Integration",
        icon: Users,
    },
    {
        id: 4,
        title: "Task Automation",
        icon: Zap,
    },
    {
        id: 5,
        title: "Follow-up Generation",
        icon: CalendarClock,
    },
    {
        id: 6,
        title: "Research Assist",
        icon: LineChart,
    },
    {
        id: 7,
        title: "Action Items",
        icon: BarChart3,
    },
    {
        id: 8,
        title: "Real-time Processing",
        icon: TrendingUp,
    },
    {
        id: 9,
        title: "Zoom Integration",
        icon: HeartHandshake,
    },
    {
        id: 10,
        title: "Teams Integration",
        icon: HandHeart,
    }
];

export const features = [
    {
        id: 1,
        title: "Captures & Analyzes Transcripts",
        description: "Auto-processes every sales call, onboarding training, team meeting, or implementation call with real-time transcript capture and AI-driven content analysis.",
        icon: NotebookPen,
    },
    {
        id: 2,
        title: "Finds the Right CRM Record",
        description: "AI matches meeting content to correct account in CRM/micro-CRM with seamless data synchronization and Airtable integration.",
        icon: Users,
    },
    {
        id: 3,
        title: "Executes Next Steps Instantly",
        description: "Project updates, onboarding actions, sales follow-ups automatically assigned with task creation in project management tools.",
        icon: CalendarClock,
    },
    {
        id: 4,
        title: "Custom Follow-Ups & Personalization",
        description: "AI tailors follow-ups based on conversation's key pain points with contextual messaging that adapts to discussion context.",
        icon: Zap,
    },
];

export const offerings = [
    {
        id: 1,
        title: "AI-Powered Research Assist",
        description: "Multi-agent research tool pulls relevant data when insights are needed with supplementary research to enhance follow-up process.",
        icon: BarChart2
    },
    {
        id: 2,
        title: "Meeting Intelligence Dashboard",
        description: "Comprehensive dashboard showing meeting summaries, action items, and research findings in one centralized view.",
        icon: Smile
    },
    {
        id: 3,
        title: "Automated Task Management",
        description: "Seamlessly creates and assigns tasks to team members based on meeting discussions and action items.",
        icon: Recycle
    },
    {
        id: 4,
        title: "Smart CRM Updates",
        description: "Automatically updates CRM records with meeting insights, contact information, and follow-up requirements.",
        icon: BarChartBig
    },
    {
        id: 5,
        title: "Personalized Follow-ups",
        description: "Generates contextually relevant follow-up messages based on meeting discussions and participant needs.",
        icon: Fullscreen
    },
    {
        id: 6,
        title: "Real-time Meeting Processing",
        description: "Processes meetings in real-time with instant transcription, analysis, and action item extraction.",
        icon: Languages
    },
];

export const plans = [
    {
        id: 1,
        title: "Starter",
        priceMonthly: "$29",
        priceYearly: "$290",
        buttonText: "Start Free Trial",
        features: [
            "Meeting Transcription & Analysis",
            "Basic CRM Integration",
            "Action Item Extraction",
            "Email Follow-up Generation",
            "5 Meetings per Month"
        ]
    },
    {
        id: 2,
        title: "Professional",
        priceMonthly: "$79",
        priceYearly: "$790",
        buttonText: "Start Free Trial",
        features: [
            "Unlimited Meeting Processing",
            "Advanced CRM Integration",
            "AI-Powered Research Assist",
            "Custom Follow-up Templates",
            "Team Collaboration Tools"
        ]
    },
    {
        id: 3,
        title: "Enterprise",
        priceMonthly: "Custom",
        priceYearly: "Custom",
        buttonText: "Contact Sales",
        features: [
            "Everything in Professional",
            "Custom Integrations",
            "Dedicated Support",
            "Advanced Analytics",
            "SLA Guarantees"
        ]
    }
];

export const testimonials = [
    {
        name: "Sarah Chen",
        username: "@sarah_chen",
        review: "CoNNIE AI has transformed our sales process. No more missed follow-ups or lost insights!"
    },
    {
        name: "Marcus Rodriguez",
        username: "@marcus_rodriguez",
        review: "The automated CRM updates and task creation have saved our team hours every week."
    },
    {
        name: "Lisa Thompson",
        username: "@lisa_thompson",
        review: "Finally, a tool that actually executes on meeting insights instead of just transcribing them."
    },
    {
        name: "David Kim",
        username: "@david_kim",
        review: "CoNNIE AI is like having a personal assistant for every meeting. Game-changing for our onboarding process."
    },
    {
        name: "Amanda Foster",
        username: "@amanda_foster",
        review: "The AI-powered research assist feature has made our follow-ups incredibly relevant and timely."
    },
    {
        name: "James Wilson",
        username: "@james_wilson",
        review: "Our meeting productivity has increased by 300% since implementing CoNNIE AI."
    },
    {
        name: "Rachel Green",
        username: "@rachel_green",
        review: "The personalized follow-up generation is spot-on. Our clients love the attention to detail."
    },
    {
        name: "Carlos Mendez",
        username: "@carlos_mendez",
        review: "CoNNIE AI has eliminated the post-meeting chaos. Everything is now organized and actionable."
    },
    {
        name: "Jennifer Park",
        username: "@jennifer_park",
        review: "The real-time processing and instant action item extraction have revolutionized our workflow."
    },
    {
        name: "Robert Taylor",
        username: "@robert_taylor",
        review: "CoNNIE AI is the Oprah for sales meetings - it extracts what matters most and acts on it."
    },
    {
        name: "Michelle Davis",
        username: "@michelle_davis",
        review: "Our team never misses a key moment anymore. CoNNIE AI ensures nothing slips through the cracks."
    },
    {
        name: "Thomas Anderson",
        username: "@thomas_anderson",
        review: "The end-to-end automation has made our meetings more productive than ever before."
    }
];

export const tools = [
    {
        id: 1,
        name: "Zoom",
        info: "Seamlessly integrate with Zoom meetings.",
        icon: Icons.tool1
    },
    {
        id: 2,
        name: "Microsoft Teams",
        info: "Connect with Teams for enhanced collaboration.",
        icon: Icons.tool2
    },
    {
        id: 3,
        name: "Airtable",
        info: "Sync meeting data with Airtable CRM.",
        icon: Icons.tool3
    },
    {
        id: 4,
        name: "Salesforce",
        info: "Integrate with Salesforce for sales teams.",
        icon: Icons.tool4
    },
    {
        id: 5,
        name: "Slack",
        info: "Send notifications and updates via Slack.",
        icon: Icons.tool5
    },
    {
        id: 6,
        name: "Asana",
        info: "Create tasks automatically in Asana.",
        icon: Icons.tool6
    },
];

export const links = [
    {
        name: "Home",
        hash: "/",
    },
    {
        name: "About",
        hash: "/about",
    },
    {
        name: "Projects",
        hash: "/projects",
    },
    {
        name: "Blog",
        hash: "/blog",
    },
    {
        name: "Contact",
        hash: "/contact",
    },
] as const;
