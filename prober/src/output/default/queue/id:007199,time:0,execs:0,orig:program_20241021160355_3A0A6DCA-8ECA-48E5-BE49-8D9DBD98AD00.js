function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Float32Array(4096);
    const v6 = new Map();
    for (const v7 in v4) {
        v6.f = v7;
    }
}
new F1();
gc();
