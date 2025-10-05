import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Malabar Matrix",
  DESCRIPTION: "Malabar Matrix provides innovative software solutions like our SaaS products Trackwise and LeadFlow, empowering small businesses. Contact: contact@malabarmatrix.site.",
  AUTHOR: "Malabar Matrix Team",
  }

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Insights, tutorials, and updates from the Malabar Matrix development team.",
  }

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Explore recent development projects crafted by the Malabar Matrix team.",
  }

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contact@malabarmatrix.site",
    HREF: "mailto:contact@malabarmatrix.site",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Malabar-Matrix",
    HREF: "https://github.com/Malabar-Matrix"
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "malabar.matrix",
    HREF: "https://instagram.com/malabar.matrix",
  },
]

