const v3 = [Uint32Array,Uint32Array];
const v4 = Reflect.construct(Uint32Array, v3);
const v5 = v4.toReversed(-9n, v4, v3);
try { v5.subarray(-9n); } catch (e) {}
gc();
