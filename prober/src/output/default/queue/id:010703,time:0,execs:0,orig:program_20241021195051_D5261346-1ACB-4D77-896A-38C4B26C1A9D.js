const v0 = `
    const v2 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    const v4 = v2.toLocaleString().small();
    const v5 = v4.startsWith();
    const v6 = v4.search();
    const o11 = {
        toString(a8, a9) {
            v4(v5, v2, v6, false);
            return v2;
        },
    };
    /\u{12345}/myvis;
`;
eval(v0);
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
gc();
