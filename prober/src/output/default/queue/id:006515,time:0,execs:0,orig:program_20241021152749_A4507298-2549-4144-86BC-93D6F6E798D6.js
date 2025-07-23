const v0 = [4096];
for (let i = 0; i < 250; i++) {
    const v2 = new Int16Array(v0);
    Object.defineProperty(v0, 4, { configurable: true, value: v2 });
    const o5 = {
        "maxByteLength": 774,
    };
    new SharedArrayBuffer(85, o5);
}
gc();
