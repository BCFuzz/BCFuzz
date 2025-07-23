const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    a4 * a4;
    return a7;
    arguments.valueOf = f3;
    return a7;
}
v2.map(f3);
const v11 = new Int32Array();
const v12 = v11.subarray();
for (let i = 0; i < 100; i++) {
    function f13(a14, a15, a16, a17) {
    }
    v12.map(f13);
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
