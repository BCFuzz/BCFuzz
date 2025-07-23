let v0 = 64;
const v1 = v0--;
const v3 = new Uint8Array(v1, v0, v1);
function f4() {
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v17 = createGlobalObject().Atomics;
        try { v17.or(v3, i8, v0); } catch (e) {}
    }
    const v20 = new Uint8Array(3129);
    for (const v21 in v20) {
    }
    return f4;
}
f4();
gc();
