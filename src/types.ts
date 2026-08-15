export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface PreviewMode {
  id: 'desktop' | 'tablet' | 'mobile';
  label: string;
  width: string;
}

export interface DemoPage {
  id: string;
  name: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
}
