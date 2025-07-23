function f0(a1, a2, a3, a4) {
    try { a1(a3, a3, a4, a3); } catch (e) {}
    const o8 = {
        "maxByteLength": 25,
    };
    const v10 = new ArrayBuffer(25, o8);
    const v12 = new Int16Array(v10);
    v12.sort(a4);
    return a4;
}
f0(f0, f0, f0);
gc();
