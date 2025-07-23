for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new Uint16Array(Uint16Array);
    const v3 = new Uint16Array(v2);
    for (let v4 = 0; v4 < 10; v4++) {
        v3["p" + v4] = v4;
    }
    for (const v7 in v3) {
        v2[v7];
        for (let v9 = 0; v9 < 250; v9++) {
        }
    }
}
gc();
