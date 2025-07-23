const v1 = new Uint32Array();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
function f12() {
    for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
        const v25 = createGlobalObject().Atomics;
        try { v25.add(v1, i16, i16); } catch (e) {}
    }
    const v29 = new Uint8ClampedArray(3129);
    for (const v30 in v29) {
    }
    return f12;
}
f12();
gc();
