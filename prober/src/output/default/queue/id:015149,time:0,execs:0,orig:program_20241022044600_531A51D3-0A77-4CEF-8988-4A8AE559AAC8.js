const v2 = new Uint32Array(1003);
for (const v3 in v2) {
    const v4 = v3?.substring;
    try { v4.toString(); } catch (e) {}
    v4[v3];
}
gc();
