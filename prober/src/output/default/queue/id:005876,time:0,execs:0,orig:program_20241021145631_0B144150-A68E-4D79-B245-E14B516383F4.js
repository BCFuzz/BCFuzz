for (let v0 = 0; v0 < 250; v0++) {
    const v2 = new Int16Array(v0, v0, v0);
    const o3 = {
    };
    const v5 = new Proxy(v2, o3);
    try { v5.filter(); } catch (e) {}
}
gc();
