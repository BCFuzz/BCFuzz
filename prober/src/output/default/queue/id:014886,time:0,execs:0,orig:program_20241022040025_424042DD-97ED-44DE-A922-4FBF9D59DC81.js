const o5 = {
    set d(a1) {
        const v2 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
        v2[7] = v2;
        for (let i = 0; i < 10; i++) {
            const o3 = {
                __proto__: v2,
            };
            o3.copyWithin();
        }
    },
};
o5.d = o5;
gc();
