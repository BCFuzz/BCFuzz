for (let v0 = 0; v0 < 5; v0++) {
    const v3 = new Uint32Array(1000);
    for (const v4 in v3) {
    }
    const v5 = v3[2];
    const v6 = [1000,1000];
    try { v5(); } catch (e) {}
    try {
    const t0 = 4294967296;
    t0(...v6);
    } catch (e) {}
}
gc();
