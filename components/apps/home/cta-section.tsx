import { title } from "@/config/primitives";
import { ModelSendme } from "./model-sendme";
export default function CtaSection() {
  return (
    <article
      id="cta-section"
      className="cta-section flex flex-wrap justify-between items-center rounded-md p-4"
    >
      <div className="md:w-1/2 w-full">
        <h2 className={title({ color: "blue" })}>Let’s Work Together</h2>
        <p
          className={
            "text-pretty md:w-80 text-md lg:text-lg text-default-600 my-4"
          }
        >
          มีโปรเจกต์ในใจหรือต้องการร่วมงานกันไหม?
          สามารถติดต่อมาได้เลยนะ ยินดีพูดคุยและรับฟังเสมอ
        </p>
      </div>
      <ModelSendme />
    </article>
  );
}
