let v0 = 1.250847162803364;
v0++;
for (let v2 = 0; v2 < 25; v2++) {
    const o13 = {
        toString(a4, a5) {
            const o6 = {
            };
            const t7 = o6.constructor;
            const v8 = t7(v0);
            function f9(a10, a11) {
                return v2;
            }
            v8.valueOf = f9;
            v8.toExponential(v8);
            return a4;
        },
    };
    o13.toString();
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
}
gc();
