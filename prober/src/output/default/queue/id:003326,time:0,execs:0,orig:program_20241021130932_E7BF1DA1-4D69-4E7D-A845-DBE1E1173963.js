try { Reflect.construct(Reflect); } catch (e) {}
Reflect.construct(Float32Array, [Reflect,Reflect]).includes();
gc();
