const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Float32Array(v3.buffer);
    v8.set(v3);
}
new F4();
gc();
