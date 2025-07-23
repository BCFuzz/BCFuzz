const v4 = new Int32Array(681);
function f6(a7, a8) {
    const v11 = new SharedArrayBuffer(256);
    const v13 = new DataView(v11);
    return v13.getUint8(1);
}
Float32Array[Symbol.toPrimitive] = f6;
function f17(a18, a19, a20, a21) {
    Float32Array >>> 128;
    return Int32Array;
}
v4.map(f17);
gc();
