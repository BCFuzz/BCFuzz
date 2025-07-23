const v2 = new Uint32Array(1000);
for (let v3 in v2) {
    const v6 = v3 ** -1;
    Math.pow(--v3, v6);
}
gc();
