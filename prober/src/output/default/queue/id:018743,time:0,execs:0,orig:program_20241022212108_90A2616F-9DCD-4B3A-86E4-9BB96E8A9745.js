const v1 = [303537114,-4294967297,1000];
const v2 = Date();
const v3 = v1.sort;
try { v3.call(v2); } catch (e) {}
gc();
