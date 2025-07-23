const v2 = new Float32Array(Array, Float32Array, Array);
v2.constructor = Array;
try { v2.slice(); } catch (e) {}
gc();
