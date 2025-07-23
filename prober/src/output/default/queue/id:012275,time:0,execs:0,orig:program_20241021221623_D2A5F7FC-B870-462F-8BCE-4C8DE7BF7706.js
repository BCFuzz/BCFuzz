for (let v0 = 0; v0 < 25; v0++) {
    const v3 = Symbol.iterator;
    const o27 = {
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
            let v15 = -1622767604;
            v15 = 2135;
            for (let v16 = 0; v16 < 5; v16++) {
                const v17 = [15,-14,536870912,-1,981068376];
                function f18() {
                    function f19() {
                        return ("subarray")["slice"](2754, v15);
                    }
                    return f19;
                }
                function f22(a23) {
                    return a23;
                }
                Object.defineProperty(v17, Symbol.toPrimitive, { enumerable: true, get: f18, set: f22 });
                Math.log(v17);
            }
            return o11;
        },
    };
    Reflect.construct(Uint8ClampedArray, [o27]);
}
gc();
