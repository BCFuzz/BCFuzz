const v1 = new Uint8ClampedArray();
const v2 = v1.byteLength;
const v3 = [9007199254740990,0,14847,536870912,1000,1000,-9,16,1073741824,-1539059450];
v3[5] %= v2 / Uint8ClampedArray;
gc();
