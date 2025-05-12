import { School, MapPinned, Clock8, Mail  } from "lucide-react";
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  titleweb: "Aprilpollo",
  titlewebdescription: "Don’t give up on your dreams. Keep sleeping.",
  links: {
    facebook: "https://facebook.com/noar.ps.3",
    instagram: "https://instagram.com/p.phonsing_",
    github: "https://github.com/phonsing-Hub",
    twitter: "https://x.com/phonsing_",
    docs: "https://nextui.org",
    linkedin: "https://linkedin.com/in/polsing-ps",
    sponsor: "#",
  },
  profile: {
    avatar: "/me/IMG_8993.jpg",
    name: "Phonsing Taleman",
    nickname: "NO AH",
    bio: "@p.phonsing_",
    workflow: [
     {
       icon: School,
       name: "Sripatum University"
     },
     {
       icon: MapPinned,
       name: "Nonthaburi"
     },
     {
       icon: Clock8,
       name: "11:00 - 22:30 (UTC +07:00)"
     },
     {
       icon: Mail,
       name: "polsing.ap@gmail.com"
     }

    ],
    achievements: ["https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png", "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png", "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png"],
    organizations: ["https://avatars.githubusercontent.com/u/101041024?s=64&v=4"]
  },
};
