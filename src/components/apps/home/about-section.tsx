import { HackathonCard } from "@/components/hackathon-card";
import { Chip } from "@heroui/chip";

const educational = [
  {
    title: "Modern Automotive Engineering",
    dates: "2021 - 2022",
    location: "Sripatum University",
    description:
      "เรียนรู้การออกแบบ วิเคราะห์ และทดสอบยานพาหนะ จัดการระบบการผลิต และใช้งานอุปกรณ์ที่เกี่ยวข้องกับยานยนต์",
    image: "/logo/logo2.svg",
    mlh: "https://www.spu.ac.th/fac/engineer/programs/next-generation-automotive-engineering-1",
    links: [],
  },
  {
    title: "Computer Engineering",
    dates: "2022 - 2025",
    location: "Sripatum University",
    description:
      "เรียนรู้การออกแบบระบบคอมพิวเตอร์ ทั้งฮาร์ดแวร์และซอฟต์แวร์ เพื่อใช้ในกระบวนการประมวลผลข้อมูลต่างๆ",
    image: "logo/logo1.svg",
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
      "การจัดการและบำรุงรักษาเครือข่ายเซิร์ฟเวอร์อิเล็กทรอนิกส์ (ATM)",
    image: "/logo/logo3.svg",
    mlh: "#",
    links: [],
  },
  {
    title: "Back End Developer",
    dates: "2025",
    location: "T.A.I. Solution Service Co., Ltd.",
    description:
      "ออกแบบสถาปัตยกรรมระบบ สร้าง flowcharts สำหรับแต่ละขั้นตอนการทำงาน พัฒนาและทดสอบ API และจัด databases",
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
          <Chip variant="dot" radius="sm" size="sm" color="primary">
            Educational
          </Chip>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {educational.map((project, id) => (
              <HackathonCard
                key={id}
                dates={project.dates}
                description={project.description}
                image={project.image}
                links={project.links}
                location={project.location}
                title={project.title}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <Chip variant="dot" radius="sm" size="sm" color="success">
            Work
          </Chip>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {work.map((project, id) => (
              <HackathonCard
                key={id}
                dates={project.dates}
                description={project.description}
                image={project.image}
                links={project.links}
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
