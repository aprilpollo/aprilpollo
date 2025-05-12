import { Metadata } from "next";
import Title from "@/components/apps/profile/title";
import AboutSection from "@/components/apps/home/about-section";
import GirhubProfile from "@/components/apps/profile/github/github";

export const metadata: Metadata = {
  title: "Profile",
};

function page() {
  return (
    <section id="me" className="container max-w-7xl mb-14 py-10">
      <div className="me grid grid-cols-1 lg:grid-cols-6 gap-10">
        <div className="flex flex-col items-center lg:col-span-2 py-10">
          <Title />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="flex flex-col gap-4 ">
            <p className="font-bold">About Me</p>
            <p className="text-sm">
              ดีจ้า ชื่อโนอาร์ เรียกอาร์ก็ได้ เป็นทาสแมวเต็มตัว
              เวลาว่างก็จะหายไปกับหนัง ซีรีส์
              แล้วก็เกมเนื้อเรื่องที่เล่นทีลืมเวลาเลย ใครมีเกม หรือซีรีส์มันส์ ๆ
              มาแชร์กันได้เลย
            </p>
          </div>
          <AboutSection />
          <GirhubProfile />
        </div>
      </div>
    </section>
  );
}

export default page;
