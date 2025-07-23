const v1 = new Uint8ClampedArray();
try { BigInt64Array.from(v1); } catch (e) {}
gc();
