for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v11 = new BigUint64Array();
const v13 = v11.buffer.transfer();
function f14(a15, a16, a17, a18) {
    a15.subarray(v13, a17);
    return a15;
}
try { f14(v11); } catch (e) {}
gc();
