const v2 = new Uint8ClampedArray(Uint8ClampedArray.bind());
v2.subarray();
delete v2[53343n];
gc();
