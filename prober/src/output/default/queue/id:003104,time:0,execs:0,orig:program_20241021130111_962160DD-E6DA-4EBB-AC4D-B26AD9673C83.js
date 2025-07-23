const o12 = {
    set d(a1) {
        const v2 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
        function f3(a4, a5) {
            const o6 = {
                __proto__: v2,
            };
            const v9 = new BigInt64Array(6);
            const o10 = {
                ...v9,
            };
            return this;
        }
        for (let i = 0; i < 250; i++) {
            f3(a1, f3);
        }
    },
};
o12.d = o12;
gc();
