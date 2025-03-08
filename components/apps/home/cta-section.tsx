
import { title } from "@/config/primitives";
import { ModelSendme } from "./model-sendme";
export default function CtaSection() {
  return (
    <section
      id="cta-section"
      className="cta-section flex flex-wrap justify-between items-center my-10"

    >
      <div className="md:w-1/2 w-full">
        <h2 className={title()}>Reach Out Anytime</h2>
        <p
          className={
            "text-pretty md:w-80 text-md lg:text-lg text-default-600 my-4"
          }
        >
          Have a project in mind or looking to collaborate? Feel free to reach
          out I’d love to hear from you!
        </p>
      </div>
      <ModelSendme />
    </section>
  );
}