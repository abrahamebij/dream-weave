// Example Unsplash Response Type
export interface UnsplashSearchResponse {
  total: number; // total results
  total_pages: number; // pages
  results: UnsplashPhoto[]; // array of photos
}

export interface UnsplashPhoto {
  id: string;
  slug: string;
  alt_description: string | null;
  color: string;

  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };

  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };

  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };

  likes: number;
  width: number;
  height: number;
  created_at: string; // ISO date
}
