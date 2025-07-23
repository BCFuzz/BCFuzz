const v2 = new Uint8Array(1);
for (const v3 in v2) {
    v2[v3] = v3;
}
gc();
