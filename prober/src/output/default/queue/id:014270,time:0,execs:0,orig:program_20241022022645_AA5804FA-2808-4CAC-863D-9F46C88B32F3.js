for (let v0 = 0; v0 < 25; v0++) {
    const v2 = [1000000000.0,-2.0];
    const o3 = {
        "set": Number,
    };
    const v5 = new Proxy(v2, o3);
    try { v5.fill(); } catch (e) {}
}
gc();
