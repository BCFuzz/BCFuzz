for (let v0 = 0; v0 < 5; v0++) {
    const v3 = Symbol.iterator;
    const o28 = {
        [v3]() {
            let v5 = 10;
            const o11 = {
                next() {
                    v5--;
                    const v9 = v5 == 0;
                    const o10 = {
                        "done": v9,
                    };
                    return o10;
                },
            };
            const v13 = new Float32Array();
            function f14() {
                v13.length;
                const o16 = {
                    __proto__: v13,
                };
                return o16;
            }
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                const v21 = [1073741824,-26526];
                const o22 = {
                };
                const v24 = new Proxy(v21, o22);
                v24.with(Uint8ClampedArray, a19, v13, this).every(f14);
            }
            new F17();
            return o11;
        },
    };
    Reflect.construct(Uint8ClampedArray, [o28]);
}
gc();
