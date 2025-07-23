function f1(a2, a3, a4, a5) {
    return Int32Array;
}
const v7 = new Int32Array(681);
function f8(a9, a10, a11, a12) {
    f1--;
    return a12;
    arguments.valueOf = f8;
    return a12;
}
v7.map(f8);
const v16 = new Int32Array();
const v17 = v16.subarray();
for (let i = 0; i < 100; i++) {
    function f18(a19, a20, a21, a22) {
        return a22;
    }
    v17.map(f18);
}
gc();
