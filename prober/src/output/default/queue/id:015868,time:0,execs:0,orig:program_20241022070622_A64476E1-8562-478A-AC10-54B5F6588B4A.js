for (let v0 = 0; v0 < 10; v0++) {
    const v2 = new Uint16Array();
    const v3 = new Uint16Array();
    for (let v4 = 0; v4 < 10; v4++) {
        v3["p" + v4] = v4;
    }
    for (const v7 in v3) {
        v7.normalize();
        v2[v7];
    }
}
gc();
