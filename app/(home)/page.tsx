import HomeHeader from "@/components/apps/home/home-header";
import HomeContent from "@/components/apps/home/home-content";
import AnimatedContent from "@/components/animatedcontent";
export default function HomePage() {
  return (
    <main className="mt-24">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <HomeHeader />
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={400}
      >
        <HomeContent />
      </AnimatedContent>
    </main>
  );
}
