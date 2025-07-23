for (let v0 = 0; v0 < 10; v0++) {
    const v1 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    const v2 = v1.toLocaleString();
    for (let i = 0; i < 5; i++) {
        const o9 = {
            toString(a4, a5) {
                const t6 = a5.constructor;
                const v7 = t6();
                v7 && v7;
            },
        };
        o9.toString(v2, v2);
        o9.toString(v1, o9);
    }
}
gc();
