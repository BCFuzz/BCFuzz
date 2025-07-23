const v2 = new Uint8ClampedArray();
v2.buffer.transfer();
v2[1000] = undefined;
gc();
