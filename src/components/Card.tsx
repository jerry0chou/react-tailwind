import React, {FC, HTMLAttributes, ReactNode} from 'react';

interface Node extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    className?: string;
}
// Badge Component
const Badge: FC<Node> = ({ children, className = '', ...props }) => (
    <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${className}`}
        {...props}
    >
    {children}
  </span>
);

// Card Components
const Card: FC<Node> = ({ children, className = '', ...props }) => (
    <div
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
        {...props}
    >
        {children}
    </div>
);

const CardHeader: FC<Node> = ({ children, className = '', ...props }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
        {children}
    </div>
);

const CardTitle: FC<Node> = ({ children, className = '', ...props }) => (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
        {children}
    </h3>
);

const CardDescription: FC<Node> = ({ children, className = '', ...props }) => (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
        {children}
    </p>
);

const CardContent: FC<Node> = ({ children, className = '', ...props }) => (
    <div className={`p-6 pt-0 ${className}`} {...props}>
        {children}
    </div>
);

// SVG Icons
const ClockIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

// Main Component
const CardList = () => {
    // 状态样式映射
    const getStatusStyles = (status: string) => {
        switch (status.toLowerCase()) {
            case 'in progress':
                return {
                    badge: 'bg-blue-500 hover:bg-blue-600 text-white',
                    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'
                };
            case 'planned':
                return {
                    badge: 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    gradient: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
                };
            case 'in review':
                return {
                    badge: 'bg-purple-500 hover:bg-purple-600 text-white',
                    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'
                };
            case 'completed':
                return {
                    badge: 'bg-green-500 hover:bg-green-600 text-white',
                    gradient: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'
                };
            case 'blocked':
                return {
                    badge: 'bg-red-500 hover:bg-red-600 text-white',
                    gradient: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
                };
            default:
                return {
                    badge: 'bg-gray-500 hover:bg-gray-600 text-white',
                    gradient: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                };
        }
    };

    // 类别样式映射
    const getCategoryStyle = (category: string) => {
        switch (category.toLowerCase()) {
            case 'development':
                return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-indigo-200';
            case 'design':
                return 'bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-200';
            case 'analytics':
                return 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-cyan-200';
            case 'maintenance':
                return 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200';
            default:
                return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200';
        }
    };

    const items = [
        {
            title: "Design System",
            description: "Create a consistent design language for our products",
            category: "Design",
            timeEstimate: "4 weeks",
            status: "In Progress"
        },
        {
            title: "User Authentication",
            description: "Implement secure login and registration system",
            category: "Development",
            timeEstimate: "2 weeks",
            status: "Planned"
        },
        {
            title: "Analytics Dashboard",
            description: "Build real-time analytics dashboard for user insights",
            category: "Analytics",
            timeEstimate: "3 weeks",
            status: "In Review"
        },
        {
            title: "Bug Fixes",
            description: "Address critical security vulnerabilities",
            category: "Maintenance",
            timeEstimate: "1 week",
            status: "Blocked"
        },
        {
            title: "Mobile App",
            description: "Develop iOS and Android applications",
            category: "Development",
            timeEstimate: "8 weeks",
            status: "Completed"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <h2 className="text-3xl font-bold mb-8">Project Tasks</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => {
                    const styles = getStatusStyles(item.status);
                    return (
                        <Card key={index}
                              className={`group hover:shadow-lg transition-all duration-300 ${styles.gradient}`}>
                            <CardHeader className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <Badge className={`mb-2 font-medium ${getCategoryStyle(item.category)}`}>
                                        {item.category}
                                    </Badge>
                                    <Badge className={styles.badge}>
                                        {item.status}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <ClockIcon />
                                        <span className="ml-1">{item.timeEstimate}</span>
                                    </div>
                                    <button className="group-hover:translate-x-1 transition-transform duration-200">
                                        <ArrowRightIcon />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default CardList;