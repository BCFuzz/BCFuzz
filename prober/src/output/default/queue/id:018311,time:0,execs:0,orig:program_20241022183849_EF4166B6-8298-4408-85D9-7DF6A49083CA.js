const v1 = [4294967296];
Object.defineProperty(Uint16Array, 2, { enumerable: true, value: 50775 });
Uint16Array[1] = v1;
const v4 = new Float64Array(Uint16Array);
v4["subarray"]().sort();
gc();
