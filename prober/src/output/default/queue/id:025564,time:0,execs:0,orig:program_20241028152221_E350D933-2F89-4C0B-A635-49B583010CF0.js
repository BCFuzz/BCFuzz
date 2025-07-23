const v1 = new Int16Array();
function f2() {
    let v3 = 1880;
    const v5 = new Uint32Array(v3);
    const v6 = v3--;
    for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
        const v19 = createGlobalObject().Atomics;
        try { v19.xor(v1, v6, v6); } catch (e) {}
        v19.load(v5, v3);
    }
    const v24 = new Uint8Array(3129);
    for (const v25 in v24) {
    }
    return Int16Array;
}
f2();
gc();
