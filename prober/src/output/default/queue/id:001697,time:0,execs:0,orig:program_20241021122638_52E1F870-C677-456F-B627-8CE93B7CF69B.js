const v1 = new Uint8Array(Uint8Array);
delete v1[-1];
gc();
