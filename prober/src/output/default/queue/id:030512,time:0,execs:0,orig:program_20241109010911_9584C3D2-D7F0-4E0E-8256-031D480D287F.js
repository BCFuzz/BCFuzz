const v2 = new Int8Array(106);
function f3() {
    for (let i6 = 0, i7 = 10; i7--;) {
        const v14 = createGlobalObject();
        const v15 = v14.Atomics;
        v15.or(v2, i6, v15.isLockFree(createGlobalObject, v14));
    }
    const v20 = new Uint8Array(3129);
    for (const v21 in v20) {
    }
    return v20;
}
f3();
gc();
