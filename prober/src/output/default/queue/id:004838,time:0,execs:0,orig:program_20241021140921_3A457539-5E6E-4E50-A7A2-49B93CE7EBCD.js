const v4 = Reflect.construct(Uint32Array, [Reflect,Reflect]);
try { v4.sort(-4294967295n); } catch (e) {}
gc();
