const v0 = [-2.0,0.7146582820534206,3.951847436209368,-Infinity,-1000000000000.0];
const v1 = `
    for (let i4 = 0, i5 = 10;
        (() => {
            const v6 = i5 >> i5;
            i4 < v0;
            return v6;
        })();
        i5--) {
        i4 + i4;
        i5 !== i5;
    }
    try { undefined[v1](); } catch (e) {}
`;
eval(v1);
gc();
