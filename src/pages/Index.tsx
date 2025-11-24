import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Header } from '@/components/Header';
import { DeckGrid } from '@/components/DeckGrid';
import { Hand } from '@/components/Hand';
import { Battlefield } from '@/components/Battlefield';
import { Footer } from '@/components/Footer';
import { CosmicBackground } from '@/components/CosmicBackground';
import { useGameStore } from '@/store/gameStore';
import { generateMockCaptains } from '@/utils/mockData';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { isConnected } = useAccount();
  const { deck, setDeck, resetGame } = useGameStore();

  useEffect(() => {
    if (isConnected && deck.length === 0) {
      // Load mock captains for testing
      // In production, this would fetch from blockchain
      const mockCaptains = generateMockCaptains(24);
      setDeck(mockCaptains);
    }
  }, [isConnected, deck.length, setDeck]);

  if (!isConnected) {
    return (
      <CosmicBackground>

        <Header />
        
        <main className="flex-1 flex items-center justify-center p-4 relative">
          <div className="space-y-12 max-w-6xl w-full">
            {/* Hero Section with Captain Image */}
            <div className="flex flex-col items-center justify-center gap-12">
              {/* Captain Image Pill */}
              <div className="relative w-full max-w-2xl">
                <div className="rounded-full border-2 border-primary/50 overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm p-3 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
                  <img 
                    src="https://images.unsplash.com/photo-1579546565269-cf6d6cb50e20?w=600&h=600&fit=crop" 
                    alt="Captain" 
                    className="w-full h-auto object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 text-center">
                <div className="space-y-4">
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <h1 className="text-6xl md:text-8xl font-black text-accent drop-shadow-[0_0_30px_hsl(var(--accent))] animate-fade-in leading-tight flex items-center">
                        PepuStars
                        {/* Captain image next to title (now using URL-safe name in public/) */}
                        <img
                          src={'/captain-frog.jpg'}
                          alt="Captain"
                          draggable={false}
                          className="ml-4 w-12 h-12 md:w-16 md:h-16 object-cover rounded-full ring-2 ring-accent/60"
                        />
                      </h1>
                      <div className="bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm md:text-lg drop-shadow-lg">
                        BETA
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                      The Stars Are Lost.{' '}
                      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                        Legends Must Rise
                      </span>
                    </h2>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                    A cosmic rift has torn through the Pepu Kingdom, scattering its stars across the universe. Only 10,000 living PepuStars remain—rare, on-chain NFTs you can collect, battle, and evolve.
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Collect, battle, and evolve your PepuStars & PepuStars Captains. On-chain gameplay with progression, tournaments, and seasonal updates.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 pt-8 items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-foreground font-bold px-8 py-4 text-lg rounded-xl shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] transition-all duration-300 animate-pulse-glow"
                  >
                    🔗 Connect Wallet to Begin
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-4 text-lg rounded-xl shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-all duration-300"
                    onClick={() => window.open('https://t.me/+nN2Y8C994ZI5OWNk', '_blank')}
                  >
                    📱 Join Telegram
                  </Button>
                </div>
              </div>
            </div>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="group p-8 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⭐</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">10,000 PepuStars</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Living fragments of power and destiny. From humble Embers to ultra-rare Shooting Stars, each one holds a spark of balance.
                </p>
              </div>
              
              <div className="group p-8 rounded-2xl border-2 border-secondary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-secondary/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--secondary)/0.4)]">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">👑</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Limited Edition Captains</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  500-NFT Captain Collection guiding the community to recover fallen stars and wield their strength in battles to come.
                </p>
              </div>
              
              <div className="group p-8 rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-accent/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)]">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎮</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Trading Card Game</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Collect, battle, and evolve your PepuStars. On-chain gameplay with progression, tournaments, and seasonal updates.
                </p>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K</div>
                <div className="text-sm text-muted-foreground">PepuStars NFTs</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500</div>
                <div className="text-sm text-muted-foreground">Captain NFTs</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$PSTARS</div>
                <div className="text-sm text-muted-foreground">Token Utility</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">TCG</div>
                <div className="text-sm text-muted-foreground">Coming Soon</div>
              </div>
            </div>
          </div>
        </main>
      </CosmicBackground>
    );
  }

  return (
    <CosmicBackground>
      <div className="min-h-screen flex flex-col">
        <Header />
      
      <main className="flex-1 container px-4 py-8 space-y-12">
        {/* Battlefield Section */}
        <section>
          <Battlefield />
        </section>

        {/* Hand Section */}
        <section>
          <Hand />
        </section>

        {/* Deck Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Your Deck</h2>
            <Button
              variant="outline"
              onClick={resetGame}
            >
              Reset Game
            </Button>
          </div>
          <DeckGrid captains={deck} />
        </section>
      </main>

        <Footer />
      </div>
    </CosmicBackground>
  );
};

export default Index;
