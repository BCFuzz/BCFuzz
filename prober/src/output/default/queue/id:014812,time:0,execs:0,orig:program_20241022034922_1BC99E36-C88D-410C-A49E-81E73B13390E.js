const o9 = {
    toString(a1, a2) {
        let v3 = 2.2250738585072014e-308;
        v3++;
        const o5 = {
        };
        const t6 = o5.constructor;
        t6(v3).toPrecision();
        return o5;
    },
};
o9.toString();
gc();
