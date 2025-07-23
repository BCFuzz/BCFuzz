const o0 = {
};
function f1(a2) {
    const v4 = new SharedArrayBuffer();
    new Int32Array(v4);
}
o0[Symbol.toPrimitive] = f1;
Uint32Array[0] = o0;
new Uint32Array(Uint32Array);
gc();
