const v3 = [Reflect,Reflect,Reflect,Reflect,Reflect];
const v4 = Reflect.construct(Uint32Array, v3);
const v5 = v4.reverse(v4, -1e-15, v3, v4);
try { v5.with(-1e-15); } catch (e) {}
gc();
