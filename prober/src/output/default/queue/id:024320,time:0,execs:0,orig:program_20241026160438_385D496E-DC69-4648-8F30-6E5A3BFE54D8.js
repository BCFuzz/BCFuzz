const v2 = new Float32Array(1024);
for (const v3 in v2) {
    const o5 = {
        "get": Promise,
    };
    const v7 = new Proxy(Promise, o5);
    try { new v7(Proxy); } catch (e) {}
}
gc();
