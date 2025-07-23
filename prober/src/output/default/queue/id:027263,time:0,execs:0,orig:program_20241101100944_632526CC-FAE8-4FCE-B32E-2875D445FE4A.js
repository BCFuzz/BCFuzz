const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    return a5 ^ a4;
}
v2.map(f3);
const v10 = new Int32Array();
const v11 = v10.subarray();
for (let i = 0; i < 100; i++) {
    function f12(a13, a14, a15, a16) {
    }
    v11.map(f12);
}
gc();
