import { LayerCondition } from "@core/layer";
import { SpriteName } from "@core/renderer";
import { randomInteger } from "@core/layers";

/**
 * Generate surface conditions for a 3x3 left building without a bridge.
 *
 * @param {Array<number>} startCoords - The starting coordinates [x, y] of the left building.
 *
 * @returns {Array<LayerCondition>} An array of surface conditions for the left building without a bridge.
 */
export const leftGroundConditions = (startCoords: [number, number]): LayerCondition[] => {
  const [x, y] = startCoords;

  return [

    {
      sprite: SpriteName.GROUND_MIDDLE_LEFT,
      coords: [x - 1, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x + 1, y],
    },

    {
      sprite: SpriteName.GROUND_MIDDLE_LEFT,
      coords: [x - 1, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x + 1, y - 1],
    },

    {
      sprite: SpriteName.GROUND_MIDDLE_LEFT,
      coords: [x - 1, y - 2],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y - 2],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x + 1, y - 2],
    },
  ];
}

/**
 * Generate surface conditions for a 3x3 left building with a bridge.
 *
 * @param {Array<number>} startCoords - The starting coordinates [x, y] of the left building.
 *
 * @returns {Array<LayerCondition>} An array of surface conditions for the left building with a bridge.
 */
export const leftGroundBridgeConditions = (startCoords: [number, number]): LayerCondition[] => {
  const [x, y] = startCoords;

  return [

    {
      sprite: SpriteName.GROUND_MIDDLE_LEFT,
      coords: [x - 1, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y],
    },
    {
      sprite: SpriteName.BRIDGE_LEFT,
      coords: [x + 1, y],
    },

    {
      sprite: SpriteName.GROUND_MIDDLE_LEFT,
      coords: [x - 1, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_RIGHT,
      coords: [x + 1, y - 1],
    },

    {
      sprite: SpriteName.GROUND_TOP_LEFT,
      coords: [x - 1, y - 2],
    },
    {
      sprite: SpriteName.GROUND_TOP_MIDDLE,
      coords: [x, y - 2],
    },
    {
      sprite: SpriteName.GROUND_TOP_RIGHT,
      coords: [x + 1, y - 2],
    },
  ];
}

/**
 * Generate surface conditions for a 3x3 right building.
 *
 * @param {Array<number>} endCoords - The ending coordinates [x, y] of the right building.
 *
 * @returns {Array<LayerCondition>} An array of surface conditions for the right building.
 */
export const rightGroundConditions = (endCoords: [number, number]): LayerCondition[] => {
  const [x, y] = endCoords;

  return [

    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x - 1, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_RIGHT,
      coords: [x + 1, y],
    },

    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x - 1, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_RIGHT,
      coords: [x + 1, y - 1],
    },

    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x - 1, y - 2],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y - 2],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_RIGHT,
      coords: [x + 1, y - 2],
    },
  ];
}

/**
 * Generate surface conditions for a 3x3 right building with a bridge.
 *
 * @param {Array<number>} endCoords - The ending coordinates [x, y] of the right building.
 *
 * @returns {Array<LayerCondition>} An array of surface conditions for the right building with a bridge.
 */
export const rightGroundBridgeConditions = (endCoords: [number, number]): LayerCondition[] => {
  const [x, y] = endCoords;

  return [

    {
      sprite: SpriteName.BRIDGE_RIGHT,
      coords: [x - 1, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_RIGHT,
      coords: [x + 1, y],
    },

    {
      sprite: SpriteName.GROUND_MIDDLE_LEFT,
      coords: [x - 1, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
      coords: [x, y - 1],
    },
    {
      sprite: SpriteName.GROUND_MIDDLE_RIGHT,
      coords: [x + 1, y - 1],
    },

    {
      sprite: SpriteName.GROUND_TOP_LEFT,
      coords: [x - 1, y - 2],
    },
    {
      sprite: SpriteName.GROUND_TOP_MIDDLE,
      coords: [x, y - 2],
    },
    {
      sprite: SpriteName.GROUND_TOP_RIGHT,
      coords: [x + 1, y - 2],
    },
  ];
}

/**
 * Generate a border of water conditions around the grid.
 *
 * @param {number} gridX - The width of the grid.
 * @param {number} gridY - The height of the grid.
 * @param {number} border - The size of the water border.
 *
 * @returns {Array<LayerCondition>} An array of water conditions representing a border.
 */
export const borderWaterConditions = (gridX, gridY, border): LayerCondition[] => {
  const conditions = [];

  for (let y = 0; y < gridY; y++) {
    for (let x = 0; x < gridX; x++) {
      if (
        x < border
        || y < border
        || x >= gridX - border
        || y >= gridY - border
       ) {
        conditions.push({
          sprite: SpriteName.WATER_MIDDLE_MIDDLE,
          coords: [x, y],
          boundary: true,
        });
      }
    }
  }

  return conditions;
}

/**
 * Generate vertical river conditions with a bridge in the center.
 *
 * @param {number} gridX - The width of the grid.
 * @param {number} gridY - The height of the grid.
 *
 * @returns {Array<LayerCondition>} An array of vertical river conditions.
 */
export const centerBridgeConditions = (gridX, gridY): LayerCondition[] => {
  const centerX = Math.floor(gridX / 2);
  const centerY = Math.floor(gridY / 2);
  const x = randomInteger(centerX - 2, centerX + 1);
  const y = randomInteger(centerY - 1, centerY + 1);

  const conditions: LayerCondition[] = [];

  for (let i = 0; i < gridY; i++) {
    if (i === y) {
      conditions.push({
        sprite: SpriteName.BRIDGE_MIDDLE,
        coords: [x, y],
      });
    } else {
      conditions.push({
        sprite: SpriteName.WATER_MIDDLE_MIDDLE,
        coords: [x, i],
        boundary: true,
      });
    }
  }

  return conditions;
}

/**
 * Generate center ground conditions for a specified grid.
 *
 * @param {number} gridX - The width of the grid.
 * @param {number} gridY - The height of the grid.
 * @param {number} border - The border size.
 *
 * @returns {Array<LayerCondition>} An array of center ground conditions.
 */
export const centerGroundConditions = (gridX, gridY, border): LayerCondition[] => {
  const centerX = Math.floor(gridX / 2);
  const x = randomInteger(centerX - 2, centerX + 2);

  const conditions: LayerCondition[] = [];

  for (let i = 0; i < gridY; i++) {
    if (i > border && i < gridY - border - 1) {
      conditions.push({
        sprite: SpriteName.GROUND_MIDDLE_MIDDLE,
        coords: [x, i],
        boundary: false,
      });
    }
  }

  return conditions;
}


