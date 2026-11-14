import googleOverview from "./assets/growth-google-overview.jpg";
import googlePerformance from "./assets/growth-google-performance.jpg";
import googleReviews from "./assets/growth-feedback-reviews.jpg";
import googleScanner from "./assets/growth-google-scanner.jpg";
import googleReplies from "./assets/growth-feedback-autopilot.jpg";
import marketingDashboard from "./assets/growth-digital-marketing.jpg";
import reputationDashboard from "./assets/growth-reputation-feedback.jpg";

export const GROWTH_MODULES = [
    {
        id: "google-business-profile",
        number: "01",
        icon: "bi-geo-alt",
        title: "Google Business Profile Automation",
        tabLabel: "Google Business Profile",
        description: "Manage locations, reviews, posts, and profile performance from one organized workspace.",
        features: ["Profile performance and insights", "Reviews and reply automation", "Location and post workflows"],
        screenshots: [
            { src: googleOverview, label: "Overview", alt: "Google Business Profile overview in Nipun Growth" },
            { src: googlePerformance, label: "Performance", alt: "Google Business Profile performance in Nipun Growth" },
            { src: googleReviews, label: "Reviews", alt: "Google Business Profile customer reviews in Nipun Growth" },
            { src: googleScanner, label: "Review scanner", alt: "Google review scanner in Nipun Growth" },
            { src: googleReplies, label: "Review replies", alt: "Google Business Profile review replies in Nipun Growth" },
        ],
    },
    {
        id: "digital-marketing",
        number: "02",
        icon: "bi-megaphone",
        title: "Digital Marketing",
        tabLabel: "Digital Marketing",
        description: "Coordinate your digital marketing work with a simple flow to plan, publish, and measure.",
        features: ["Plan", "Publish", "Measure"],
        screenshots: [
            { src: marketingDashboard, label: "Content automation", alt: "Digital Marketing content automation workspace in Nipun Growth" },
        ],
    },
    {
        id: "reputation-feedback",
        number: "03",
        icon: "bi-chat-heart",
        title: "Reputation & Feedback",
        tabLabel: "Reputation & Feedback",
        description: "Collect customer feedback, understand reviews, and keep thoughtful replies moving.",
        features: ["Customer reviews", "Feedback insights", "Assisted replies"],
        screenshots: [
            { src: reputationDashboard, label: "Feedback overview", alt: "Reputation dashboard with feedback and review analytics in Nipun Growth" },
        ],
    },
];

export const GROWTH_SCREENSHOTS = GROWTH_MODULES.flatMap((module) =>
    module.screenshots.map((screenshot) => ({
        ...screenshot,
        moduleTitle: module.title,
    }))
);
