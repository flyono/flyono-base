import {
  HomeGrid,
  HomeCard,
  ProfileCard,
  StatsCard,
  TechStackCard,
  RecentPostsCard,
  TimeCard,
  QuoteCard,
  LinksCard,
  WeatherCard,
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="flex-1 py-12">
      <HomeGrid>
        <HomeCard colSpan={2} rowSpan={2}>
          <ProfileCard />
        </HomeCard>
        <HomeCard>
          <TimeCard />
        </HomeCard>
        <HomeCard>
          <WeatherCard />
        </HomeCard>
        <HomeCard colSpan={2}>
          <StatsCard />
        </HomeCard>
        <HomeCard colSpan={2}>
          <TechStackCard />
        </HomeCard>
        <HomeCard colSpan={2}>
          <RecentPostsCard />
        </HomeCard>
        <HomeCard colSpan={2}>
          <QuoteCard />
        </HomeCard>
        <HomeCard>
          <LinksCard />
        </HomeCard>
      </HomeGrid>
    </div>
  );
}
