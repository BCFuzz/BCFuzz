function f0() {
    const v3 = new SharedArrayBuffer(undefined);
    for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    }
    const v15 = new DataView(v3);
    try { v15.setUint8(undefined, SharedArrayBuffer); } catch (e) {}
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
