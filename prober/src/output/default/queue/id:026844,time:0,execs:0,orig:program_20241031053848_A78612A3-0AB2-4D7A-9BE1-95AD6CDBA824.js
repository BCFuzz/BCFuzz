function f1() {
    for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
        const v13 = createGlobalObject();
        const v14 = v13.Atomics;
        const v15 = v14.exchange;
        try { v15(Uint32Array, createGlobalObject, v15, v14, v13); } catch (e) {}
        const v19 = Math.imul(Uint32Array, -422222970);
        v19 + v19;
    }
    const v23 = new Uint8Array(3129);
    for (const v24 in v23) {
    }
    return 3129;
}
f1();
gc();
