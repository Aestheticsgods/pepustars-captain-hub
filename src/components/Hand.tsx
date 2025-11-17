import { useGameStore } from '@/store/gameStore';
import { CaptainCard } from './CaptainCard';
import { Button } from './ui/button';

export const Hand = () => {
  const { hand, removeFromHand } = useGameStore();

  if (hand.length === 0) {
    return (
      <div className="w-full p-8 rounded-lg border-2 border-dashed border-border bg-card/50">
        <p className="text-center text-muted-foreground">
          Your hand is empty. Select cards from your deck above to draw them into your hand.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Your Hand</h2>
        <div className="text-sm text-muted-foreground">
          {hand.length}/5 cards
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {hand.map((captain) => (
          <div key={captain.id} className="relative group">
            <CaptainCard captain={captain} isInHand />
            <Button
              variant="destructive"
              size="sm"
              className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeFromHand(captain.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
