import { title } from "@/config/primitives";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function HeaderSection() {
  return (
    <section id="header-section" className="bg-zinc-50 dark:bg-zinc-900 flex-1 p-4 rounded-md">
      <div
        className="flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-delay="50"
      >
        <span className={title()}>
          Welcome to My{" "}
          <AuroraText speed={4} >Portfolio</AuroraText>
        </span>
        <span className="my-4 text-lg text-default-600 backdrop-blur-sm rounded-md lg:w-3/4">
          Hi there! I’m
          <Badge variant="secondary" className="mx-1 rounded-b-sm">NOAH</Badge>, a Computer Engineering &
          Software Developer
        </span>
      </div>
    </section>
  );
}
