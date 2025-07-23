const v2 = new Float32Array(3682);
const v4 = new Float32Array(v2);
Reflect.construct(Int8Array, [v4]);
gc();
