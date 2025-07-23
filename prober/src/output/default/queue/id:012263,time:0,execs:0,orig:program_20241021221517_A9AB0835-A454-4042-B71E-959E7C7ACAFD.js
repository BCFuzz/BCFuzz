function f0(a1, a2) {
    const v5 = new ArrayBuffer(a1(a2), ArrayBuffer);
    v5.transferToFixedLength();
    new Float64Array(v5);
    return ArrayBuffer;
}
new Promise(f0);
gc();
