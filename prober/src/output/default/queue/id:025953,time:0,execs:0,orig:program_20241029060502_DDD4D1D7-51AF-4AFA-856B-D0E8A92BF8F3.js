const v4 = Reflect.construct(ArrayBuffer, [ArrayBuffer,ArrayBuffer], SharedArrayBuffer);
try { v4.grow(v4, v4); } catch (e) {}
gc();
