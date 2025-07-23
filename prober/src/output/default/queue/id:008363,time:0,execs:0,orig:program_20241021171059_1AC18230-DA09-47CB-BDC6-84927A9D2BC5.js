const v2 = new Int32Array(Int32Array);
try { v2.with(7.405079664519453e+307); } catch (e) {}
gc();
