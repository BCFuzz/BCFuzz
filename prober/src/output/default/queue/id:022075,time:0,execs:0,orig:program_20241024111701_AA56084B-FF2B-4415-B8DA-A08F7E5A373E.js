for (let i2 = 0, i3 = 8; i2 < i3; i3--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = new Float32Array();
    const v18 = new SharedArrayBuffer();
    const v19 = new Uint32Array(v18);
    v19.set(v15);
}
new F10();
gc();
