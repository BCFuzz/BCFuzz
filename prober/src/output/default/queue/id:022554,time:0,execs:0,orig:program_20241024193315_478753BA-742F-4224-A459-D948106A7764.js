function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Uint8ClampedArray(8);
    for (let v6 = 0; v6 < 10; v6++) {
        try { v4.reduce(Symbol, "p"); } catch (e) {}
    }
    for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
    }
}
new F0();
gc();
