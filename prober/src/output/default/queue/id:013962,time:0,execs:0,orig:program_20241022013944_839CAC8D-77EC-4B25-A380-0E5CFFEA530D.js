for (let v0 = 0; v0 < 10; v0++) {
    const v2 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    const v3 = v2.toLocaleString();
    for (let i = 0; i < 5; i++) {
        const o10 = {
            toString(a5, a6) {
                const t6 = a6.constructor;
                const v8 = t6();
                v8 && v8;
                return v8;
            },
        };
        o10.toString(v3, false);
        o10.toString(v2, o10);
    }
}
gc();
