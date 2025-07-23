for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v12 = createGlobalObject().Atomics;
    try { v12.wait(createGlobalObject, v12, v12, createGlobalObject); } catch (e) {}
}
const v16 = new Uint8Array(3129);
for (const v17 in v16) {
}
gc();
