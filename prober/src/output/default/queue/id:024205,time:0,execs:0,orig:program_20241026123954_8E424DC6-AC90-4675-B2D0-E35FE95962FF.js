function f0() {
    return f0;
}
for (let v1 = 0; v1 < 10; v1++) {
    function f5(a6, a7) {
        const o19 = {
            ...a6,
            __proto__: a6,
            "b": 462505212n,
            "h": a6,
            [2n]: a7,
            [a7]: f5,
            ...a6,
            m(a9, a10, a11, a12) {
                Object.defineProperty(a7, f0, { writable: true, configurable: true, value: a7 });
                return a11;
            },
            "maxByteLength": v1,
            "c": 462505212n,
            128: a6,
            toString(a14, a15) {
                return this;
            },
            "e": -6n,
            set f(a17) {
                ~a6;
            },
        };
        return o19;
    }
    f5(f5(462505212n, 462505212n));
    for (let v22 = 0; v22 < 50; v22++) {
        f5(v22, -6n);
    }
}
gc();
