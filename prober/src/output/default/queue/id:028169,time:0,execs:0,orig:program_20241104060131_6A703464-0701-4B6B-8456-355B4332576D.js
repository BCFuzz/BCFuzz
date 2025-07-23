const v1 = new SharedArrayBuffer();
const v3 = new Float64Array(v1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Uint32Array(v1);
    v9.set(v3);
}
new F4();
for (let i14 = 0, i15 = 65535; i14 !== i15; i15--) {
}
gc();
