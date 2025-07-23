const v2 = new Uint32Array(4096);
for (let v3 = 0; v3 < 5; v3++) {
    const v4 = v3++;
    v2.fill(v4, v4, 4096);
}
gc();
