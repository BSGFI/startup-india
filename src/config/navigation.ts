
export type NavChild = {
  name: string;
  href: string;
  description: string;
};

export type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Internships",
    href: "/internships",
    children: [
      {
        name: "Explore Internships",
        href: "/internships",
        description:
          "Discover hands-on learning and project opportunities",
      },
      {
        name: "How It Works",
        href: "/internships/how-it-works",
        description:
          "Understand the internship journey and process",
      },
      {
        name: "Apply Now",
        href: "/internships/apply",
        description:
          "Take the first step toward practical experience",
      },
    ],
  },

  {
    name: "Training",
    href: "/training",
    children: [
      {
        name: "Explore Programs",
        href: "/training",
        description:
          "Build industry-relevant technical skills",
      },
      {
        name: "Live Training",
        href: "/training/live",
        description:
          "Learn through instructor-led sessions",
      },
      {
        name: "Bootcamps",
        href: "/training/bootcamps",
        description:
          "Explore intensive, project-based learning",
      },
    ],
  },

  {
    name: "Mentorship",
    href: "/mentorship",
    children: [
      {
        name: "Explore Mentorship",
        href: "/mentorship",
        description:
          "Discover personalized learning guidance",
      },
      {
        name: "Book a Session",
        href: "/mentorship/book",
        description:
          "Request one-to-one mentorship support",
      },
    ],
  },

  {
    name: "Career Guidance",
    href: "/career-guidance",
    children: [
      {
        name: "Career Counseling",
        href: "/career-guidance",
        description:
          "Explore career paths and professional goals",
      },
      {
        name: "Resume Review",
        href: "/career-guidance/resume-review",
        description:
          "Improve your resume and professional profile",
      },
      {
        name: "Interview Preparation",
        href: "/career-guidance/interview-preparation",
        description:
          "Develop confidence for job interviews",
      },
    ],
  },

  {
    name: "Resources",
    href: "/resources",
    children: [
      {
        name: "Blog & Insights",
        href: "/resources/blog",
        description:
          "Explore learning tips and career insights",
      },
      {
        name: "Webinars",
        href: "/resources/webinars",
        description:
          "Discover upcoming learning sessions",
      },
    ],
  },

  {
    name: "About Us",
    href: "/about",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

// Navigation helpers

export const mainNav = nav;

export const footerNav = nav.filter(
  (item) =>
    item.name === "Home" ||
    item.name === "About Us" ||
    item.name === "Contact"
);

export const dropdownNav = nav.filter(
  (item) => Boolean(item.children?.length)
);

export function isActiveNavItem(
  pathname: string,
  href: string
): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}
