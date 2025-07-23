function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        try { v18.store(536870912n, "-1620964611", i8); } catch (e) {}
    }
    const v22 = new Uint8Array(3129);
    for (const v23 in v22) {
    }
}
new F0();
gc();
