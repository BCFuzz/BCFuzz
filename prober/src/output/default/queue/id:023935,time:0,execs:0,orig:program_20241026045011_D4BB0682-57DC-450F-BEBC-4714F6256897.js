const v2 = new Uint8ClampedArray(4294967296);
const v5 = createGlobalObject().Float16Array;
try { new v5(v2); } catch (e) {}
gc();
