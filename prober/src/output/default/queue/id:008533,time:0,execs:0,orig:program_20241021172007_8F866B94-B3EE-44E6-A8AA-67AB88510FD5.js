function f0() {
    return f0;
}
const v3 = new Uint32Array(12);
v3[Symbol.isConcatSpreadable] = f0;
([64,-65537]).concat(v3);
gc();
