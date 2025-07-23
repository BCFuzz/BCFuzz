const o1 = {
};
function f2(a3) {
    return -1000000000000.0;
}
o1[Symbol.toPrimitive] = f2;
Uint32Array[0] = o1;
new Uint32Array(Uint32Array);
gc();
