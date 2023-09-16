export interface Link {
  title: string;
  icon: string;
  url: string;
}

export interface LinkTree {
  name: string;
  avatar: string;
  links: Link[];
}

export const linkTreeData: LinkTree = {
  "name": "Derek 🎐",
  "avatar": "/me.jfif",
  "links": [
      {
      "title": "Personal Website",
      "icon": "/website.svg",
      "url": "https://devbyderek.com"
    },
    {
      "title": "LinkedIn",
      "icon": "/linkedin.svg",
      "url": "https://www.linkedin.com/in/derek-mackey"
    },
    {
      "title": "Github",
      "icon": "/github.svg",
      "url": "https://github.com/fuusei"
    },
    {
      "title": "Old Github",
      "icon": "/github.svg",
      "url": "https://github.com/dmackey199"
    }
  ]
}
