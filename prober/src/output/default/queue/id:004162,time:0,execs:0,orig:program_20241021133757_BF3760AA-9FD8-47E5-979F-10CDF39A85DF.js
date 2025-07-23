const v3 = new Float32Array(130);
try { v3.sort(Symbol); } catch (e) {}
gc();
