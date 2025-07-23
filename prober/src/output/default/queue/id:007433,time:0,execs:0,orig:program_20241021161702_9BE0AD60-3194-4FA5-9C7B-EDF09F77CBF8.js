const v3 = new Float32Array(896);
v3[332] = v3;
Reflect.construct(Int32Array, [v3]);
gc();
