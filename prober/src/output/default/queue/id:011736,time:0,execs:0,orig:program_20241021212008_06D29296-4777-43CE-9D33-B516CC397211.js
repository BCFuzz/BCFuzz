const v2 = new Int8Array();
const v3 = new Float32Array(v2);
const v4 = [Int8Array,Int8Array,Int8Array];
const v5 = [v3];
const v6 = v4.__proto__;
try { v6(v6, ...v5, ...v5, ...v2, ...v3, ...v3, ...v6); } catch (e) {}
for (let v8 = 0; v8 < 250; v8++) {
}
gc();
