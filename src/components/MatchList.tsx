import { MatchCard } from "./MatchCard";

// Mock data for demonstration - in real app this would come from an API
const todayMatches = [
  {
    id: '1',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    homeTeamLogo: '',
    awayTeamLogo: '',
    time: '21:00',
    competition: 'La Liga',
    status: 'upcoming' as const,
  },
  {
    id: '2',
    homeTeam: 'Manchester City',
    awayTeam: 'Arsenal',
    homeTeamLogo: '',
    awayTeamLogo: '',
    time: '17:30',
    competition: 'Premier League',
    status: 'live' as const,
    score: '2-1',
  },
  {
    id: '3',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    homeTeamLogo: '',
    awayTeamLogo: '',
    time: '18:30',
    competition: 'Bundesliga',
    status: 'finished' as const,
    score: '3-2',
  },
  {
    id: '4',
    homeTeam: 'AC Milan',
    awayTeam: 'Inter Milan',
    homeTeamLogo: '',
    awayTeamLogo: '',
    time: '20:45',
    competition: 'Serie A',
    status: 'upcoming' as const,
  },
  {
    id: '5',
    homeTeam: 'Paris Saint-Germain',
    awayTeam: 'Olympique Marseille',
    homeTeamLogo: '',
    awayTeamLogo: '',
    time: '21:00',
    competition: 'Ligue 1',
    status: 'upcoming' as const,
  },
];

export const MatchList = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light text-foreground tracking-wide">
          European Football Today
        </h1>
        <p className="text-muted-foreground text-base font-light">
          {currentDate}
        </p>
      </div>

      <div className="space-y-2">
        {todayMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {todayMatches.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-lg font-light text-muted-foreground mb-2">
            No matches today
          </h3>
          <p className="text-sm text-muted-foreground font-light">
            Check back tomorrow for more matches
          </p>
        </div>
      )}
    </div>
  );
};