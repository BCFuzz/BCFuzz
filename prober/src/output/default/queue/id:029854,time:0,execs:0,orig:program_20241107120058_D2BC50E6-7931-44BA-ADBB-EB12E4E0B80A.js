function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = 200;
    const v5 = v4--;
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    }
    const o18 = {
        "maxByteLength": 3614,
    };
    const v20 = new SharedArrayBuffer(3614, o18);
    const v22 = new Int32Array(v20);
    const v24 = createGlobalObject();
    const v25 = v24.globalThis;
    try { v25.Int16Array(); } catch (e) {}
    const v29 = v24.Atomics.waitAsync(v22, v4, v22, v5).__defineSetter__;
    try { v29(); } catch (e) {}
    for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
    }
}
new F0();
new F0();
new F0();
for (let i46 = 0, i47 = 10; i46 != i47; i47--) {
}
gc();
