let v0 = 65535;
const v1 = v0--;
Object.defineProperty(Float32Array, 2, { configurable: true, value: v1 });
Float32Array[0] = v1;
const v3 = new Float32Array(Float32Array);
v3.reverse().sort();
gc();
