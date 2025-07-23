const v2 = new Float64Array(1000);
v2[12] = v2;
v2.sort();
gc();
