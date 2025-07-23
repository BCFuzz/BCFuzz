for (let v1 = 0; v1 < 25; v1++) {
    const v3 = new Map();
    const v4 = v3.values();
    const v5 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    const v7 = v5.toLocaleString().small(v5);
    const o15 = {
        toString(a9, a10) {
            const t7 = v7.__proto__.toLocaleString(v4, a10).constructor;
            t7(a10);
            return a10;
        },
    };
    Object.defineProperty(v3, o15, { set: makeMasquerader });
}
gc();
