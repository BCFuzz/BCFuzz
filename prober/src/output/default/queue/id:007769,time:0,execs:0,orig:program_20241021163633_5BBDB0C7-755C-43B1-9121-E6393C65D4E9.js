const v2 = new Uint32Array(RegExp);
v2[Symbol.toPrimitive] = RegExp;
try { Set.__defineGetter__(v2, Uint32Array); } catch (e) {}
gc();
