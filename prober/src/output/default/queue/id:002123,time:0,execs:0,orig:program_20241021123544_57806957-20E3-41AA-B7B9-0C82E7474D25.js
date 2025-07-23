const v2 = new Uint8ClampedArray(7);
v2.includes(v2);
const v5 = new Set(v2);
v5.add().has(v2);
gc();
