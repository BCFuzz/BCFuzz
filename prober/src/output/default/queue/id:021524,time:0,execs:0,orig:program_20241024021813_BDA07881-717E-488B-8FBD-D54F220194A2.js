const o12 = {
    toString(a2, a3) {
        const o5 = {
        };
        const v6 = o5.constructor;
        const v7 = v6(2.2250738585072014e-308);
        function f8(a9, a10) {
            return 100;
        }
        v7.valueOf = f8;
        v7.toExponential(v7);
        return v6;
    },
};
o12.toString(o12, 100);
gc();
