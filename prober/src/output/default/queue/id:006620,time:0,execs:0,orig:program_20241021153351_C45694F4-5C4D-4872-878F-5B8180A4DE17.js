function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Int8Array(255);
    for (const v5 in v4) {
        const v7 = new WeakMap();
        (255 || v7) ^ 255;
    }
}
new F0();
gc();
