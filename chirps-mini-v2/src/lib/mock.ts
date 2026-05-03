export interface Website {
  id: string;
  url: string;
  status: 'indexed' | 'scraping' | 'error';
  pagesCount: number;
  lastUpdated: string;
}

export interface KnowledgePage {
  id: string;
  path: string;
  title: string;
  content: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const MOCK_WEBSITES: Website[] = [
  {
    id: '1',
    url: 'demo-store.com',
    status: 'indexed',
    pagesCount: 24,
    lastUpdated: '2 minutes ago',
  }
];

export const MOCK_KNOWLEDGE_BASE: KnowledgePage[] = [
  {
    id: 'p1',
    path: '/home',
    title: 'Home Page',
    content: 'Welcome to Demo Store. We provide high-quality organic coffee beans sourced directly from sustainable farms in Ethiopia and Colombia. Our mission is to deliver the freshest roast to your doorstep within 48 hours of ordering.',
  },
  {
    id: 'p2',
    path: '/faq',
    title: 'Frequently Asked Questions',
    content: 'Our return policy allows returns within 30 days of purchase if items are unused. We ship internationally to over 50 countries. Standard shipping takes 3-5 days domestically and 5-10 days internationally.',
  },
  {
    id: 'p3',
    path: '/shipping',
    title: 'Shipping Information',
    content: 'Domestic shipping is free for orders over $50. International shipping starts at $15 flat rate. All orders are processed within 24 hours. Tracking numbers are provided via email once the carrier picks up the package.',
  },
];

export const PRELOADED_CHATS: Message[] = [
  {
    id: 'm1',
    role: 'user',
    content: 'What is your return policy?',
    timestamp: '10:00 AM',
  },
  {
    id: 'm2',
    role: 'assistant',
    content: 'Based on the website content, returns are accepted within 30 days of purchase, provided the item is unused and in its original packaging.',
    timestamp: '10:01 AM',
  }
];

export const AI_RESPONSES: Record<string, string> = {
  'do you ship internationally?': 'Yes, international shipping is available to over 50 countries. Delivery times vary between 5–10 business days depending on the destination.',
  'how long does delivery take?': 'Standard domestic delivery takes 3-5 business days. International shipping typically takes 5-10 business days.',
  'can i track my order?': 'Absolutely! Tracking numbers are generated and sent via email as soon as your order is processed (usually within 24 hours).',
  'do you offer refunds?': 'Yes, we offer full refunds for returns processed within 30 days of purchase, as long as the items are in their original, unused condition.',
  'default': "I'm sorry, I couldn't find specific information about that on the indexed website. Would you like me to connect you with a human representative?"
};
