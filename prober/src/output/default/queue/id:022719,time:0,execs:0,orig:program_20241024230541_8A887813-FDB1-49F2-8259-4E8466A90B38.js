const v2 = new Float64Array(257);
v2[255] = v2;
v2.sort();
gc();
