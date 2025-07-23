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
                return 255;
            }
            const o22 = {
                "apply": f21,
                "call": f21,
                "get": f21,
                "getOwnPropertyDescriptor": f21,
                "has": f21,
                "isExtensible": f21,
            };
        })()) {
        i9--;
    }
}
new F0();
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
