for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = new Int8Array();
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = new SharedArrayBuffer();
    const v17 = new Float32Array(v16);
    v17.set(v11);
}
new F12();
gc();
