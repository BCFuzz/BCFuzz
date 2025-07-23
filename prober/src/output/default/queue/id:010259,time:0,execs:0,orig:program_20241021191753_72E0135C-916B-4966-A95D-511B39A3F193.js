const v2 = `
    const v3 = /\u{12345}/myvis;
    const v4 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    function f5(a6) {
        return 1865 < 2701 ? 1865 : 2701;
    }
    v4[Symbol.toPrimitive] = f5;
    const o11 = {
        [v4]: v3,
    };
`;
eval(v2);
gc();
