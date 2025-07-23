Uint8ClampedArray[1] = 1166015113n;
const v4 = new Uint32Array(9);
try { v4.set(Uint8ClampedArray); } catch (e) {}
gc();
