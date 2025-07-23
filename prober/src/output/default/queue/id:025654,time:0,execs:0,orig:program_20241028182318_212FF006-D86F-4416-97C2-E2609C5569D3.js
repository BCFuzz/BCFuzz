const v2 = Symbol.iterator;
const o33 = {
    [v2]() {
        let v4 = 10;
        const o10 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                const o9 = {
                    "done": v8,
                };
                return o9;
            },
        };
        let v14 = -1622767604;
        v14 = 2135;
        const v15 = [15,-14,536870912,-1,981068376];
        function f16() {
            return ("subarray")["slice"](2754, v14);
        }
        function f19(a20) {
            return a20;
        }
        Object.defineProperty(v15, Symbol.toPrimitive, { enumerable: true, get: f16, set: f19 });
        for (let i23 = 0, i24 = v14; i23 !== i24; i24--) {
            Math.abs(i24);
        }
        return o10;
    },
};
Reflect.construct(Uint8ClampedArray, [o33]);
gc();
