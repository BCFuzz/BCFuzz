const v1 = new Map();
let v2;
try { v2 = Map(v1); } catch (e) {}
v1 != v2;
gc();
