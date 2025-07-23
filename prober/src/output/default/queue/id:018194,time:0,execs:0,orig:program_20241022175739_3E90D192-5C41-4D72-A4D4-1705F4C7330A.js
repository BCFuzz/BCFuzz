function f0() {
    const v2 = new Uint16Array();
    for (let v3 = 0; v3 < 10; v3++) {
        v2["p" + v3] = v3;
    }
    for (const v6 in v2) {
        delete v2[v6];
    }
    return f0;
}
f0();
f0();
gc();
