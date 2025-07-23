const v1 = new Uint8ClampedArray();
v1.valueOf = v1;
v1.subarray();
gc();
