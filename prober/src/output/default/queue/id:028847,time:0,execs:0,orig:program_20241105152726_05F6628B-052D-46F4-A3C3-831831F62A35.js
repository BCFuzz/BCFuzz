let v0 = 1073741825;
const v2 = new Int32Array();
function f3() {
    const v5 = v0--;
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        try { v18.xor(v2, v5, 1880); } catch (e) {}
    }
    const v22 = new Uint8Array(3129);
    for (const v23 in v22) {
    }
    return Int32Array;
}
f3();
gc();
