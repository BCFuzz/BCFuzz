function f0(a1, a2) {
    const o19 = {
        toString(a4) {
            const o16 = {
                n(a7, a8, a9) {
                    const v10 = this;
                    const t6 = v10.Intl.Locale;
                    const v13 = new t6("aWqBm");
                    const t8 = v13.toString;
                    t8(a9);
                    return a2;
                },
            };
            const v17 = o16.n;
            v17();
            return v17;
        },
    };
    Uint32Array[0] = o19;
    new Uint32Array(Uint32Array);
    return f0;
}
try { f0(); } catch (e) {}
gc();
