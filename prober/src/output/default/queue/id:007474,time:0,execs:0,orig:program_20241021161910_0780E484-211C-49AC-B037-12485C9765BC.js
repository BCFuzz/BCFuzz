for (let v0 = 0; v0 < 250; v0++) {
    const v2 = new Float32Array(v0, v0);
    try { v2.reduce(); } catch (e) {}
}
gc();
