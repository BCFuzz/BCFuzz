for (let v0 = 0; v0 < 5; v0++) {
    const v3 = new Uint32Array(1000);
    for (const v4 in v3) {
    }
    const v5 = [v0,v0,v0];
    try {
    const t0 = 4294967296;
    t0(...v5);
    } catch (e) {}
}
gc();
