const v2 = new Int8Array();
const v4 = new Float32Array(8);
const v5 = [Float32Array];
const v6 = [v4,v4];
const v7 = v5.__proto__;
try { v7(v7, ...v6, ...v6, ...v2, ...v4); } catch (e) {}
const v10 = new Uint32Array(Uint32Array);
v10["values"]().next(Uint32Array);
gc();
