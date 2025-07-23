const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v4 = new SharedArrayBuffer(v2);
const v5 = new v2(v4);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new Int8Array(v4);
    v11.set(v5);
}
new F6(v1, createGlobalObject);
gc();
