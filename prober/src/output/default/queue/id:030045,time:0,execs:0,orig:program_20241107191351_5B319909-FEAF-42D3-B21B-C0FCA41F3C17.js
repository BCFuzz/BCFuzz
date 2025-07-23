for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
let v20 = 106;
v20--;
const v23 = new Uint32Array(v20);
function f24() {
    for (let i27 = 0, i28 = 10; i28--, i28;) {
        createGlobalObject().Atomics.or(v23, i28, v20);
    }
    const v40 = new Uint8Array(3129);
    for (const v41 in v40) {
    }
    return 3129;
}
f24();
gc();
