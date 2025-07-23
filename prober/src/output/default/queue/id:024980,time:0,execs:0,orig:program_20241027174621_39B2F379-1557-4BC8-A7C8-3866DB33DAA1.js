function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = ("DVVte").big();
    const v6 = new Uint8ClampedArray(8);
    for (let v7 = 0; v7 < 10; v7++) {
        try { v6.reduce(Symbol, v3); } catch (e) {}
    }
}
new F0();
new F0();
for (let i15 = 0, i16 = 10;
    (() => {
        i16--;
        const v18 = i15 < i16;
        for (let i20 = 0, i21 = 85; i21; i21--) {
        }
        return v18;
    })();
    ) {
}
gc();
