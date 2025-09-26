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
    <Card className="bg-gradient-card hover:bg-card transition-smooth border-border hover:shadow-glow p-6 group cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-bold">
              {match.homeTeam.substring(0, 3).toUpperCase()}
            </div>
            <span className="font-semibold text-foreground group-hover:text-primary transition-smooth">
              {match.homeTeam}
            </span>
          </div>
          
          <div className="text-muted-foreground font-mono text-sm">
            {match.score || 'vs'}
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-foreground group-hover:text-primary transition-smooth">
              {match.awayTeam}
            </span>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-bold">
              {match.awayTeam.substring(0, 3).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="text-xs">
            {match.competition}
          </Badge>
          <Badge className={`${getStatusColor(match.status)} text-xs font-mono`}>
            {getStatusText(match.status)}
          </Badge>
        </div>
      </div>
    </Card>
  );
};