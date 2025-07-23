function f2(a3, a4) {
    return 257;
}
Uint32Array.toString = f2;
const v5 = new Uint32Array(257);
v5.copyWithin(Float32Array, Uint32Array, v5);
gc();
