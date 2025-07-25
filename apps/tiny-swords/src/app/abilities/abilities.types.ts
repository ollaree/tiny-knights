import { ISprite, TNumberOfPixels, TPixelsPosition } from '@common/common.types';

export interface IAbility<Context> {
  
  setContext(context: Context): this;
}

export interface WithSetPersonageContext {
  setContext(context: ISprite): void;
}

export type TPixelsCoords = [
  pxX: TPixelsPosition,
  pxY: TPixelsPosition,
  pxHeight: TNumberOfPixels,
  pxWidth: TNumberOfPixels,
];

export type TCollisionArea = TPixelsCoords;
