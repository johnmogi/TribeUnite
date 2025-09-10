export interface GameState {
  width: number;
  height: number;
  isRunning: boolean;
  lastTime: number;
  ctx: CanvasRenderingContext2D | null;
}

export const createGameState = (): GameState => ({
  width: 800,
  height: 600,
  isRunning: false,
  lastTime: 0,
  ctx: null,
});
