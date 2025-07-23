for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Uint32Array(106);
function f13() {
    for (let i16 = 0, i17 = 10; i17--;) {
        const v25 = createGlobalObject().Atomics;
        v25.or(v12, i16, v25.isLockFree());
    }
    const v30 = new Uint8Array(3129);
    for (const v31 in v30) {
    }
    return 3129;
}
f13();
gc();
