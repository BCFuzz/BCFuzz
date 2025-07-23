const v1 = new Int32Array(Int32Array);
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v14 = new BigInt64Array(5);
const v16 = new Float64Array();
function f17(a18) {
    return a18;
}
function f19() {
    return v1;
}
f17[Symbol.species] = f19;
v16.constructor = f17;
const v22 = v16.subarray(5, 5);
try { v22.set(v14); } catch (e) {}
gc();
