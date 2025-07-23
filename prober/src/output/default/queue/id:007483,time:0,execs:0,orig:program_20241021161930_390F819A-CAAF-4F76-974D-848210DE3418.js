const v2 = new Uint32Array(1000);
for (const v4 in v2) {
    const v5 = new Int16Array();
    const v7 = v5 && delete v5[v4];
    v7 || v7;
}
gc();
