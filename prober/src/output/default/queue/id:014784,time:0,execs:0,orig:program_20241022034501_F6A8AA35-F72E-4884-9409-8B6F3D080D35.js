const v0 = [];
const v1 = `
    const v2 = /\u{12345}/myvis;
    const v3 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    function f4(a5) {
        switch (v1) {
            case v0:
                break;
        }
    }
    v3[Symbol.toPrimitive] = f4;
    const o8 = {
        [v3]: v2,
    };
`;
eval(v1);
gc();
