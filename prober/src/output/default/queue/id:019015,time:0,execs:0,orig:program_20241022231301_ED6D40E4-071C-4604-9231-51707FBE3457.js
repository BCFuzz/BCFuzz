for (let v0 = 0; v0 < 100; v0++) {
    const v2 = new Map();
    v2.values().next();
    const v5 = v2.values();
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    try { v8.next(v2, v2); } catch (e) {}
}
gc();
