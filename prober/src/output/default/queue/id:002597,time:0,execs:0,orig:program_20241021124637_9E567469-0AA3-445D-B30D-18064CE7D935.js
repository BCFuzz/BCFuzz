const v2 = new Float64Array("string", Float64Array, Float64Array);
try { v2.sort("string"); } catch (e) {}
gc();
