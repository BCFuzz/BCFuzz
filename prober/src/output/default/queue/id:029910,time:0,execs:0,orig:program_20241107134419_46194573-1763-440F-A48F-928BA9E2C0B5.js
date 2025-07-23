const v2 = new Uint8Array();
function f3() {
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        const v16 = createGlobalObject().Atomics;
        try { v16.or(v2, i7, 64); } catch (e) {}
    }
    const v19 = new Uint8Array(3129);
    for (const v20 in v19) {
    }
    return 64;
}
f3();
gc();
