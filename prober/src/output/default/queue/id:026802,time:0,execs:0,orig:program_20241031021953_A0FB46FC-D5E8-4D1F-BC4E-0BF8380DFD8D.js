const v2 = new Int32Array(2584);
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a6.constructor = a8;
    a6.slice();
}
new F4(v2, Int32Array, Int8Array);
gc();
