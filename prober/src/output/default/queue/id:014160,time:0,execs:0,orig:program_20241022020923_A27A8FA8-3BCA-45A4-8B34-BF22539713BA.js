const v2 = new Float64Array(16);
v2[1] = v2;
eval(v2.toLocaleString());
gc();
