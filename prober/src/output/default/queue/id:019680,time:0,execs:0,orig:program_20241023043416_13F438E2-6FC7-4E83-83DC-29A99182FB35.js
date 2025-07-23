for (let v0 = 0; v0 < 50; v0++) {
    const v1 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    const v2 = v1.toLocaleString();
    const o8 = {
        toString(a4, a5) {
            const t5 = a5?.constructor;
            return t5();
        },
    };
    o8.toString(v2, v1);
    o8.toString(v1, o8);
}
gc();
