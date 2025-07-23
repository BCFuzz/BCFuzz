function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
    for (let i18 = 0, i19 = 10;
        i18 < i19;
        (() => {
            i19--;
            const o31 = {
                n(a25, a26, a27) {
                    const v29 = new Float32Array();
                    Object.defineProperty(this, 830, { value: v29 });
                    return a3;
                },
            };
            const v32 = o31.n;
            try { v32(); } catch (e) {}
        })()) {
    }
}
new F0();
gc();
