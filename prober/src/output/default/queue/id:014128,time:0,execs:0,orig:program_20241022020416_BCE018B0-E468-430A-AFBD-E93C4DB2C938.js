for (let v1 = 0; v1 < 5; v1++) {
    const t1 = v1 >>> v1;
    t1[55] = 128;
}
const v5 = new Uint8Array(3129);
for (const v6 in v5) {
}
gc();
