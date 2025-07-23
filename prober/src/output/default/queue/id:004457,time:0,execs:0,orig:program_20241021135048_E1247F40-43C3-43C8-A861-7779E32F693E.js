const v3 = new Int32Array();
const v5 = new Uint8ClampedArray(v3);
const o21 = {
    set d(a7) {
        const v8 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
        function f9(a10, a11) {
            const o12 = {
                __proto__: v8,
                "f": Uint8ClampedArray,
                3529: v5,
                0: a11,
            };
            const v15 = new BigInt64Array(67);
            v15.reverse();
            const v18 = new BigInt64Array(6);
            const o19 = {
                ...v18,
                [Uint8ClampedArray]: 6,
                [BigInt64Array]: 11,
                16: v3,
                "e": 410449.5296383104,
            };
        }
        for (let i = 0; i < 250; i++) {
            f9(a7, f9);
        }
    },
};
o21.d = o21;
gc();
