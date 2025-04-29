import { Network, LayoutTemplate, GalleryVerticalEnd } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { title, subtitle } from "@/config/primitives";

// import { DotPattern } from "../ui/dot-pattern";

export default function FeaturesListSection() {
  const data = [
    {
      icon: <Network />,
      title: "Robust API Development",
      description:
        "สร้างและพัฒนา API ประสิทธิภาพสำหรับแพลตฟอร์มโซเชียลมีเดียและองค์กรขนาด โดยใช้ Go Fiber, FastAPI และ PostgreSQL",
    },
    {
      icon:<LayoutTemplate />,
      title: "Modern Web Application Development",
      description:
        "สร้างสรรค์เว็บแอปพลิเคชันที่ตอบโจทย์ความต้องการทางธุรกิจ ด้วยเฟรมเวิร์กและเทคโนโลยีใหม่ๆ",
    },
    {
      icon: <GalleryVerticalEnd />,
      title: "Professional Background",
      description:
        "ประสบการณ์กว่า 3 ปีในสายงานพัฒนา Full-Stack เชี่ยวชาญในการพัฒนาโซลูชันที่ใช้งานได้จริงและสามารถขยายระบบได้อย่างมีประสิทธิภาพ",
    },
  ];

  return (
    <article id="features-list-section" className="relative p-4" >
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
      <div className="flex flex-col md:w-2/3 w-full mb-10">
        <span className={title()}>My  <span className={title({ color: "cyan" })}>Expertise</span></span>
       
        {/* <p className={subtitle()}>
        สำรวจผลงาน ประสบการณ์ และทักษะที่แสดงถึงศักยภาพและความเชี่ยวชาญของฉัน
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((item, index) => (
          <Card key={index} className=" rounded-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {item.title}
                {item.icon}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </article>
  );
}
