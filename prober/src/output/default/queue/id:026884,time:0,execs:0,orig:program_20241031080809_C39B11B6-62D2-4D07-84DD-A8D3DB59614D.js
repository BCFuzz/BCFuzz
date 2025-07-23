function f1(a2, a3) {
    const v4 = new Uint8ClampedArray(a3, a2, a2);
    const v6 = new Int32Array(a3, a2, a3);
    v6.subarray().set(v4);
}
Int8Array[Symbol.toPrimitive] = f1;
this.encodeURIComponent(Int8Array);
gc();
