for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = new SharedArrayBuffer();
    new Uint16Array(v16, v16, a12);
}
new F10();
gc();
