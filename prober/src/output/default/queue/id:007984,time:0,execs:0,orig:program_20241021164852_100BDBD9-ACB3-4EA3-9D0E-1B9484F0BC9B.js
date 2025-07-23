for (const v1 in 9) {
    for (let v2 = 0; v2 < 5; v2++) {
        const t2 = 9;
        t2[v1] = v2;
    }
}
const v4 = new Uint32Array(9, 9);
const v6 = new Int32Array(9, 9);
for (const v7 in v4) {
    for (let v8 = 0; v8 < 5; v8++) {
        v6[v7] = v8;
    }
}
gc();
