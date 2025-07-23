const v1 = new Int8Array();
function f2() {
    let v3 = 1880;
    const v4 = v3--;
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v17 = createGlobalObject().Atomics;
        try { v17.xor(v1, v4, i7); } catch (e) {}
    }
    const v21 = new Uint8Array(3129);
    for (const v22 in v21) {
    }
    return Int8Array;
}
f2();
gc();
