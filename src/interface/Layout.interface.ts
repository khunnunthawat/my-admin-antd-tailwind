export interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

export interface ContentProps {
  children: React.ReactNode;
}

export interface TitleMessageProps {
  titleMessage: string;
}

export interface TitleProps {
  title: string;
}
