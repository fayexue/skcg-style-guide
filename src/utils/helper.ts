export interface CssUnit {
  readonly dimention: number
  readonly unit: string
}

export function extractUnit(value: string | number): CssUnit {
  if (typeof value === 'string') {
    let unit = value.substr(-3);
    let dimention = 0;
    if (!unit || unit !== 'rem') {
      unit = value.substr(-2);
      dimention = parseFloat(value.slice(0, -2));
    } else {
      dimention = parseFloat(value.slice(0, -3));
    }
    return { dimention, unit };
  } else {
    return {
      dimention: value,
      unit: 'rem'
    }
  }
}

export function multiply(baseDimention: string | number, steps: number, unit?: string) {
  return extractUnit(baseDimention).dimention * steps + (unit || extractUnit(baseDimention).unit);
}

export function add(dimention1: string | number, dimention2: string | number) {
  const input1 = extractUnit(dimention1);
  const input2 = extractUnit(dimention2);
  return `${input1.dimention + input2.dimention}${input1.unit}`;
}