let v2 = new Float32Array(0, 0, 0);
function f3(a4, a5) {
    return 0;
}
v2[Symbol.toPrimitive] = f3;
v2 >>>= v2;
gc();
