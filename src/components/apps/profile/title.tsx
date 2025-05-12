import { siteConfig as config } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Divider } from "@heroui/divider";

function Title() {
  return (
    <>
      <div className="w-full flex lg:flex-col gap-4">
        <Avatar
          src={config.profile.avatar}
          alt="me"
          className="lg:size-60 size-20 lg:mx-auto"
          isBordered
        />
        <div className="lg:mt-10 lg:w-full flex flex-col justify-center">
          <TextAnimate className="uppercase max-w-max mb-2 pb-2 text-md font-bold border-dashed border-b-4 border-fd-muted-foreground">
            {config.profile.name}
          </TextAnimate>
          <TextAnimate
            animation="scaleUp"
            by="text"
            delay={0.5}
            className="text-sm mb-2"
          >
            {config.profile.nickname}
          </TextAnimate>
        </div>
      </div>
      <Divider className="my-5" />
      <div className="w-full flex flex-col gap-2 mb-5">
        {config.profile.workflow.map((item, i) => (
          <span key={i} className="flex gap-2 items-center text-sm">
            <item.icon className="text-default-400" />
            {item.name}
          </span>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <span className="text-xl font-bold">Achievements</span>
        <div className="flex gap-2">
          {config.profile.achievements.map((item, i) => (
            <Avatar key={i} size="lg" src={item} />
          ))}
        </div>
      </div>
      <Divider className="my-5" />
      <div className="w-full flex flex-col gap-4 ">
        <span className="text-xl font-bold">Organizations</span>
        <div className="flex gap-2">
          {config.profile.organizations.map((item, i) => (
            <Avatar key={i} size="lg" src={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Title;
