function f0() {
    let v1 = 1880;
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = F3.toString;
    try { new v6(); } catch (e) {}
    const v8 = new Uint32Array(v1);
    v1--;
    for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
        createGlobalObject().Atomics.load(v8, v1);
    }
    const v26 = new Uint8Array(3129);
    for (const v27 in v26) {
    }
    return 3129;
}
f0();
gc();
