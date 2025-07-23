function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            const v17 = new Int8Array(255);
            for (const v18 in v17) {
            }
            new Set();
            function f21() {
                return f21;
            }
            const o27 = {
                m(a23, a24, a25, a26) {
                    return a23;
                },
                "call": f21,
                "get": f21,
                "has": f21,
                "isExtensible": f21,
            };
        })()) {
        i9--;
    }
}
new F0(F0, F0, F0, F0);
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
gc();
