const v4 = new Int8Array(53);
const v6 = new Float32Array(8);
const v7 = [Int8Array];
const v8 = [v4,v4,v4,v4];
v6.byteOffset |= -9007199254740990;
const v9 = v7.__proto__;
try { v9(v9, ...v8, ...v8, ...v4, ...v6, ...v6); } catch (e) {}
gc();
