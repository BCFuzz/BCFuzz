const v2 = new Uint8ClampedArray(Uint8ClampedArray);
v2[65535] = -4294967297;
v2.toReversed();
gc();
