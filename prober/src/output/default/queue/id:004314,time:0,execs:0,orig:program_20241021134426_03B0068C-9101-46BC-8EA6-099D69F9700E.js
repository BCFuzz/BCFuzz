const v3 = new Float32Array(5);
try { v3.some(AggregateError); } catch (e) {}
gc();
