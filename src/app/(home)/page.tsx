import HomeHeader from "@/components/apps/home/home-header";
import HomeContent from "@/components/apps/home/home-content";
import FadeIn from "@/components/FadeIn";
export default function HomePage() {
  return (
    <main className="mt-24">
      <FadeIn>
        <HomeHeader />
      </FadeIn>
      <FadeIn delay={0.4}>
        <HomeContent />
      </FadeIn>
    </main>
  );
}
