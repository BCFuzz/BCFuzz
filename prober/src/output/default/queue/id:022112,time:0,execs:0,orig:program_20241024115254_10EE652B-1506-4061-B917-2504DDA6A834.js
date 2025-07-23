function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new SharedArrayBuffer(a5);
    const v10 = new Uint16Array(v8);
    v10.sort();
}
const v12 = new F2(F2, Int32Array, 2);
const t7 = v12.constructor;
new t7(Int32Array, 2);
gc();
