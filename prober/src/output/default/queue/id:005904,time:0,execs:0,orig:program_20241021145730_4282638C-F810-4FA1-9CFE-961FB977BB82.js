const v2 = new Float32Array();
function f4() {
    return 147;
}
Uint32Array[Symbol.toPrimitive] = f4;
delete v2[Uint32Array];
gc();
