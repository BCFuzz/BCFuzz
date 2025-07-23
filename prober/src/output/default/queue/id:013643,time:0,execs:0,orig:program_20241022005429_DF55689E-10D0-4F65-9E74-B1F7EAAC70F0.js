const v2 = createGlobalObject().Float16Array;
const v5 = new Uint32Array(1000);
for (const v6 in v5) {
    const v7 = new v2(v5, v6);
    delete v7[v6];
}
gc();
