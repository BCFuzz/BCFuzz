const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
delete v1[1000000000000.0];
gc();
