for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const t1 = createGlobalObject().Function;
    const v13 = t1();
    v13.caller = v13;
}
const v16 = new Uint8Array(3129);
for (const v17 in v16) {
}
gc();
