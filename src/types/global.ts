export interface NavLink {
  name: string;
  path: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Leader {
  name: string;
  role: string;
  img: string;
  bio?: string;
}

export interface GalleryItem {
  src: string;
  cat: string;
  alt: string;
}

export interface VideoItem {
  title: string;
  cat: string;
  duration: string;
  thumb: string;
  url?: string;
}
