const v2 = new Int8Array(Uint8Array);
v2.constructor = Uint8Array;
v2.slice();
gc();
