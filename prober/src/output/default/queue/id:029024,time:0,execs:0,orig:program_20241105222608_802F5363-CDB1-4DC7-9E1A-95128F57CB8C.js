for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v12 = new SharedArrayBuffer(10);
const v14 = new Int16Array(v12);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = new Uint8ClampedArray(v12);
    v20.set(v14);
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
new F15(F15, v14);
gc();
