const v2 = new Uint8Array(Array, Uint8Array, Uint8Array);
v2.constructor = Array;
try { v2.slice(Uint8Array, v2); } catch (e) {}
gc();
