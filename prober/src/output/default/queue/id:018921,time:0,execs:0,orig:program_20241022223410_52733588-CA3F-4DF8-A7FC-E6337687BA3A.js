function f0(a1, a2, a3, a4) {
    const v6 = new Uint8ClampedArray();
    const t2 = v6.constructor;
    const v8 = new t2();
    let v9 = 0;
    for (let i = 0; i < 5; i++) {
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                        };
                        return f0;
                    },
                };
            },
        };
        v9++;
    }
    const v22 = a1.toString();
    const v23 = v22.link(f0);
    const v25 = ~v8;
    let v26 = Math.log10();
    let v27 = ~v25;
    const v28 = ++v27;
    for (const v29 of v23) {
        if (!v28) {
            v26 *= v28;
            function F30(a32, a33, a34) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
    }
    const o37 = {
        get stack() {
            super.valueOf(v28);
            return v8;
        },
        [v22]: v25,
        "h": v6,
        ...v8,
        "b": v27,
    };
    return v23;
}
f0(f0);
gc();
