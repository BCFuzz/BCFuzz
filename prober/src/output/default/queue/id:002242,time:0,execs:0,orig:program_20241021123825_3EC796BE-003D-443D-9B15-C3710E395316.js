const v1 = new Int8Array(Int8Array, Int8Array, Int8Array);
let v2;
try { v2 = Int8Array(); } catch (e) {}
v1["join"](v2);
gc();
