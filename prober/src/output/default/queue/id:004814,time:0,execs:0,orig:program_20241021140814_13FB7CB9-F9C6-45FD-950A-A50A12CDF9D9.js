const v2 = Math.ceil.bind();
let v3;
try { v3 = v2.bind(); } catch (e) {}
v3.length = v3;
gc();
