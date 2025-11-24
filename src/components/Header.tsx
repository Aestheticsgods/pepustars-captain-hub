import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-xl bg-gradient-to-r from-background/95 via-background/90 to-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="container flex h-20 items-center justify-between px-4 relative">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]">
                PepuStars
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 ml-8">
            <a 
              href="https://pepustars.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Website
            </a>
            <a 
              href="https://t.me/+nN2Y8C994ZI5OWNk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Telegram
            </a>
            <a 
              href="https://pepuswap.com/#/swap?outputCurrency=0x901db3533a321e64f3da4468138935ed01e19345" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Buy $PSTARS
            </a>
          </div>
        </div>

        {/* Wallet Connection */}
        <ConnectButton 
          chainStatus="none"
          showBalance={false}
          accountStatus="avatar"
        />
      </div>
    </header>
  );
};
