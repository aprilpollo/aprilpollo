import { title } from "@/config/primitives";
import { Badge } from "@/components/ui/badge";

export default function HeaderSection() {
  return (
    <section className="" id="header-section">
      <div
        className="flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-delay="50"
      >
        <span className={title()}>
          Welcome to My{" "}
          <span className={title({ color: "blue" })}>Portfolio</span>
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
