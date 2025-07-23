const o9 = {
    toString(a1, a2) {
        for (let v3 = 0; v3 < 100; v3++) {
            const v4 = [2744,-15826,53999,-4294967296,2147483648,536870889,-128,38977];
            function f5(a6, a7) {
                v4[93] >>>= a7;
                return a6;
            }
            f5(a2, f5);
        }
        return a2;
    },
};
o9.toString(o9);
gc();
