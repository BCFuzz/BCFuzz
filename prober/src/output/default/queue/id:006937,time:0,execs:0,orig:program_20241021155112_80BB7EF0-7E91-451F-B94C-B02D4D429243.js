const v2 = new Float64Array(257);
for (const v3 of v2) {
    const v4 = new Float64Array(v2, v3);
    const v6 = new Uint16Array(v4);
    try { v4(...v6); } catch (e) {}
}
gc();
