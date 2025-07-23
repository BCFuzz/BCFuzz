for (let v0 = 0; v0 < 5; v0++) {
    const v2 = [1000000000.0,-2.0];
    v2.fill(v0);
    const o4 = {
        "set": Uint32Array,
    };
    const v6 = new Proxy(v2, o4);
    try { v6.fill(); } catch (e) {}
}
gc();
