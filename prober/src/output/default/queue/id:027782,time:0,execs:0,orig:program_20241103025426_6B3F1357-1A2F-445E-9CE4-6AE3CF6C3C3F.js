const v2 = createGlobalObject().Float16Array;
const v4 = new SharedArrayBuffer(v2);
const v5 = new v2(v4);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new Uint32Array(v4);
    v11.set(v5);
}
new F6(v4, createGlobalObject);
gc();
