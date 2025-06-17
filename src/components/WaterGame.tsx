
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Trophy, RefreshCw, Zap } from 'lucide-react';

interface GameState {
  waterLevel: number;
  score: number;
  gameActive: boolean;
  timeLeft: number;
  combo: number;
}

const WaterGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    waterLevel: 100,
    score: 0,
    gameActive: false,
    timeLeft: 30,
    combo: 0
  });

  const [challenges, setChallenges] = useState([
    { id: 1, text: "Turn off tap while brushing", points: 10, active: false },
    { id: 2, text: "Fix leaky faucet", points: 15, active: false },
    { id: 3, text: "Use rainwater harvesting", points: 20, active: false },
    { id: 4, text: "Install water-efficient toilet", points: 25, active: false },
    { id: 5, text: "Take shorter showers", points: 12, active: false },
    { id: 6, text: "Use drip irrigation", points: 18, active: false }
  ]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState.gameActive && gameState.timeLeft > 0) {
      timer = setTimeout(() => {
        setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (gameState.timeLeft === 0) {
      setGameState(prev => ({ ...prev, gameActive: false }));
    }
    return () => clearTimeout(timer);
  }, [gameState.gameActive, gameState.timeLeft]);

  useEffect(() => {
    if (gameState.gameActive) {
      const interval = setInterval(() => {
        setChallenges(prev => prev.map(challenge => ({
          ...challenge,
          active: Math.random() > 0.7
        })));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [gameState.gameActive]);

  const startGame = () => {
    setGameState({
      waterLevel: 100,
      score: 0,
      gameActive: true,
      timeLeft: 30,
      combo: 0
    });
  };

  const handleChallenge = (challenge: any) => {
    if (!challenge.active || !gameState.gameActive) return;

    const newCombo = gameState.combo + 1;
    const bonusMultiplier = Math.floor(newCombo / 3) + 1;
    const points = challenge.points * bonusMultiplier;

    setGameState(prev => ({
      ...prev,
      score: prev.score + points,
      waterLevel: Math.min(100, prev.waterLevel + 5),
      combo: newCombo
    }));

    setChallenges(prev => prev.map(c => 
      c.id === challenge.id ? { ...c, active: false } : c
    ));
  };

  const getWaterLevelColor = () => {
    if (gameState.waterLevel > 70) return 'text-blue-500';
    if (gameState.waterLevel > 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="shadow-xl animate-fade-in">
        <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Droplets className="w-8 h-8 animate-bounce" />
            Water Conservation Challenge
          </CardTitle>
          <p className="text-blue-100">Help save water and earn points!</p>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Game Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg animate-scale-in">
              <div className={`text-2xl font-bold ${getWaterLevelColor()}`}>
                {gameState.waterLevel}%
              </div>
              <div className="text-sm text-gray-600">Water Level</div>
              <div className={`w-full h-2 bg-gray-200 rounded-full mt-2`}>
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    gameState.waterLevel > 70 ? 'bg-blue-500' : 
                    gameState.waterLevel > 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${gameState.waterLevel}%` }}
                />
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg animate-scale-in">
              <div className="text-2xl font-bold text-green-600 flex items-center justify-center gap-1">
                <Trophy className="w-5 h-5" />
                {gameState.score}
              </div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg animate-scale-in">
              <div className="text-2xl font-bold text-purple-600 flex items-center justify-center gap-1">
                <Zap className="w-5 h-5" />
                {gameState.combo}
              </div>
              <div className="text-sm text-gray-600">Combo</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg animate-scale-in">
              <div className="text-2xl font-bold text-orange-600">
                {gameState.timeLeft}s
              </div>
              <div className="text-sm text-gray-600">Time Left</div>
            </div>
          </div>

          {/* Game Controls */}
          <div className="text-center">
            {!gameState.gameActive ? (
              <Button 
                onClick={startGame}
                className="px-8 py-3 text-lg hover:scale-105 transition-transform animate-pulse"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                {gameState.score > 0 ? 'Play Again' : 'Start Game'}
              </Button>
            ) : (
              <div className="text-lg font-semibold text-green-600 animate-bounce">
                Click on the highlighted challenges!
              </div>
            )}
          </div>

          {/* Game Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                onClick={() => handleChallenge(challenge)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  challenge.active && gameState.gameActive
                    ? 'border-green-500 bg-green-50 shadow-lg animate-pulse hover:scale-105'
                    : 'border-gray-200 bg-gray-50 opacity-70'
                } ${
                  gameState.gameActive && challenge.active ? 'hover:bg-green-100' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className={`w-5 h-5 ${
                    challenge.active && gameState.gameActive ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  <span className="font-semibold text-sm">{challenge.points} pts</span>
                </div>
                <p className="text-sm text-gray-700">{challenge.text}</p>
                {challenge.active && gameState.gameActive && (
                  <div className="mt-2 text-xs text-green-600 font-semibold animate-bounce">
                    Click now!
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Game Instructions */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">How to Play:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Click on highlighted water conservation actions when they appear</li>
              <li>• Build combos by clicking multiple actions in a row</li>
              <li>• Higher combos give bonus points</li>
              <li>• Keep your water level above 0 to continue playing</li>
              <li>• You have 30 seconds to score as many points as possible!</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterGame;
