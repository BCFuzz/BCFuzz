const v1 = new BigInt64Array();
try { Uint8ClampedArray.from(v1); } catch (e) {}
gc();
