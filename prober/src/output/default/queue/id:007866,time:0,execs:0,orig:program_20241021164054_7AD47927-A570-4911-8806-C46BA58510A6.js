const v2 = new Uint16Array(Int8Array, Uint16Array);
function f4() {
    return Int8Array;
}
Uint32Array[Symbol.toPrimitive] = f4;
const v7 = new Int8Array();
try { v7.slice(v2, Uint32Array); } catch (e) {}
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
