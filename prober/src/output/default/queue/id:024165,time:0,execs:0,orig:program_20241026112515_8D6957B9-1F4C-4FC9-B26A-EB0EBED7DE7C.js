let v1 = new Uint8ClampedArray();
function f2() {
    const v5 = new Uint8Array(1880);
    for (const v6 in v5) {
    }
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    }
    for (let i19 = 0, i20 = 10; i20--, i19 < i20;) {
        const v29 = createGlobalObject().Atomics;
        try { v29.load(v5, 1880); } catch (e) {}
    }
    return --v1;
}
f2();
f2();
gc();
