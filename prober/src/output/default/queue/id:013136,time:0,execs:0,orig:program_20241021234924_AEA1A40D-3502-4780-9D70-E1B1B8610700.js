function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v6 = delete v4[289229587];
function f8(a9, a10, a11, a12) {
    return a9;
}
const v14 = new Int32Array(681);
function f15(a16, a17, a18, a19) {
    f8--;
    return a19;
    arguments.valueOf = f15;
    return f8;
}
f8 = v6;
v14.map(f15);
const v23 = new Int32Array();
const v24 = v23.subarray(289229587, 681);
for (let i = 0; i < 100; i++) {
    function f25(a26, a27, a28, a29) {
        return a26;
    }
    v24.map(f25);
}
gc();
