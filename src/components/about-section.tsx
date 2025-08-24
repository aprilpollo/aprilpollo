import { HackathonCard } from "@/components/hackathon-card";
import { Badge } from "@/components/ui/badge";

const educational = [
  {
    title: "Modern Automotive Engineering",
    dates: "2021 - 2022",
    location: "Sripatum University",
    description:
      "Learning automotive design, analysis, and testing. Managing production systems and utilizing modern automotive equipment and technologies.",
    image: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-automotive-logo---vector-png-image_4781488.jpg",
    mlh: "https://www.spu.ac.th/fac/engineer/programs/next-generation-automotive-engineering-1",
    links: [],
  },
  {
    title: "Computer Engineering",
    dates: "2022 - 2025",
    location: "Sripatum University",
    description:
      "Learning computer system design, both hardware and software development, for various data processing applications and systems.",
    image: "https://cdn-icons-png.flaticon.com/256/6303/6303140.png",
    mlh: "https://www.spu.ac.th/fac/informatics/programs/computer-engineering",
    links: [],
  },
];

const work = [
  {
    title: "Network Monitoring",
    dates: "2021 - 2024",
    location: "Somsin Service Limited Partnership",
    description:
      "Managing and maintaining electronic server networks and ATM systems infrastructure.",
    image: "https://cdn-icons-png.flaticon.com/512/3962/3962092.png",
    mlh: "#",
    links: [],
  },
  {
    title: "Back End Developer",
    dates: "2025",
    location: "T.A.I. Solution Service Co., Ltd.",
    description:
      "Designing system architecture, creating flowcharts for workflow processes, developing and testing APIs, and managing databases.",
    image: "https://taisolution.tech/assets/pictures/logo_normal-1.png",
    mlh: "https://taisolution.tech/",
    links: [],
  },
];

export default function AboutSection() {
  return (
    <article className="">
      <div className="grid md:grid-cols-1 gap-10  backdrop-blur-[4px] rounded-md">
        <div className="flex flex-col gap-4">
          <Badge className="rounded-sm">
            Educational
          </Badge>
          <ul className="mb-4 ml-6 divide-y divide-dashed border-l">
            {educational.map((project, id) => (
              <HackathonCard
                key={id}
                dates={project.dates}
                description={project.description}
                image={project.image}
                links={project.links}
                mlh={project.mlh}
                location={project.location}
                title={project.title}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <Badge className="rounded-sm">
            Work
          </Badge>
          <ul className="mb-4 ml-6 divide-y divide-dashed border-l">
            {work.map((project, id) => (
              <HackathonCard
                key={id}
                dates={project.dates}
                description={project.description}
                image={project.image}
                links={project.links}
                mlh={project.mlh}
                location={project.location}
                title={project.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
