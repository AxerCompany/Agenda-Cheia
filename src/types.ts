export interface ScriptExample {
  id: string;
  objection: string;
  customerQuery: string;
  recommendedResponse: string;
  salesTip: string;
  tag: string;
}

export interface DeliverableItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  highlights: string[];
}

export interface CalendarDayPreview {
  day: string;
  theme: string;
  action: string;
  format: string;
}
