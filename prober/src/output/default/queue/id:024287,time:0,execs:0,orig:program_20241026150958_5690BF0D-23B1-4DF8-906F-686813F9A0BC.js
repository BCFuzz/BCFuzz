const v2 = new Int8Array(Float64Array);
v2.constructor = Float64Array;
v2.slice();
gc();
