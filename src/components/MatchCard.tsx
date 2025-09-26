import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  time: string;
  competition: string;
  status: 'upcoming' | 'live' | 'finished';
  score?: string;
}

interface MatchCardProps {
  match: Match;
}

export const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-destructive';
      case 'finished':
        return 'bg-muted';
      default:
        return 'bg-primary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'LIVE';
      case 'finished':
        return 'FT';
      default:
        return match.time;
    }
  };

  return (
    <Card className="bg-card hover:shadow-card transition-smooth border-border p-8 group cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8 flex-1">
          <div className="text-center min-w-[120px]">
            <div className="text-sm font-medium text-foreground mb-1">
              {match.homeTeam}
            </div>
          </div>
          
          <div className="text-center min-w-[80px]">
            <div className="text-lg font-mono text-foreground">
              {match.score || '—'}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {getStatusText(match.status)}
            </div>
          </div>
          
          <div className="text-center min-w-[120px]">
            <div className="text-sm font-medium text-foreground mb-1">
              {match.awayTeam}
            </div>
          </div>
        </div>

        <div className="text-right min-w-[100px]">
          <div className="text-xs text-muted-foreground">
            {match.competition}
          </div>
          {match.status === 'live' && (
            <div className="inline-block w-2 h-2 bg-destructive rounded-full mt-1"></div>
          )}
        </div>
      </div>
    </Card>
  );
};