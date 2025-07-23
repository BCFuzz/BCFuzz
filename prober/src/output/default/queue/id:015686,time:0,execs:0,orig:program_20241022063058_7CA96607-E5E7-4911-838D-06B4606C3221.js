Uint16Array[1] = [4294967296];
const v3 = new Float64Array(Uint16Array);
v3["subarray"]().sort();
gc();
