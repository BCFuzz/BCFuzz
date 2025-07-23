const v2 = new Int32Array();
const v4 = new Uint8ClampedArray();
const v6 = [9007199254740990];
Reflect.apply(v2.fill, v4, v6);
gc();
