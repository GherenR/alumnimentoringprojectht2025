import { ReactNode } from 'react';

export interface Mentor {
  name: string;
  university: string;
  major: string;
  path: string;
}

export interface SlideData {
  id: string;
  title?: string;
  subtitle?: string;
  content: ReactNode;
}
