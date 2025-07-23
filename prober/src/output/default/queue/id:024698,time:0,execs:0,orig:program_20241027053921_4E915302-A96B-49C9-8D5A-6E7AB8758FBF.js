const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
const v4 = v3.reverse();
for (let i7 = -3, i8 = 10; i7 < i8; i8--) {
}
const v16 = new BigUint64Array();
const v17 = v3.buffer;
v17.transfer(v16, v2);
function f19(a20, a21, a22, a23) {
    a20.subarray().copyWithin(v17, v4);
    return v16;
}
try { f19(v16); } catch (e) {}
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
