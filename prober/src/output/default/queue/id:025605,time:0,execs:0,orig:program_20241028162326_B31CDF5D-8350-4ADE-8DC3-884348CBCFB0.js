for (let v0 = 0; v0 < 50; v0++) {
    const o13 = {
        toString(a2, a3) {
            const o5 = {
            };
            const t5 = o5.constructor;
            const v7 = t5(2.2250738585072014e-308);
            function f8(a9, a10) {
                return v0;
            }
            v7.valueOf = f8;
            return v0 >> v7.toExponential(v7);
        },
    };
    o13.toString();
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
}
gc();
