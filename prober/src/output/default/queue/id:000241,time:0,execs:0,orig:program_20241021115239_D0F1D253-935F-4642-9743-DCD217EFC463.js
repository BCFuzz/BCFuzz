const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v3 = new Int8Array();
try { Uint8Array(v3, v1, v3); } catch (e) {}
v1.length;
v3.length;
v3[31496n];
gc();
