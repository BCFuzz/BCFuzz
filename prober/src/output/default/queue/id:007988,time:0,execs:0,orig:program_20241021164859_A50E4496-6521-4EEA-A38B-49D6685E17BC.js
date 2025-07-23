const v2 = new Float32Array(4096);
const v5 = [Uint32Array,Uint32Array,Uint32Array];
const v7 = Reflect.construct(Uint32Array, v5).reverse(v5, Uint32Array);
try { v7.set(v2); } catch (e) {}
gc();
