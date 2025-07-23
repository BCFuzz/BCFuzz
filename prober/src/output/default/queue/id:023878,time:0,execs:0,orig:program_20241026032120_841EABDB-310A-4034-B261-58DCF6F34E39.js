const v0 = `
    function f1(a2, a3, a4) {
        const o5 = {
        };
        o5.constructor = f1;
        for (let i = 0; i < 5; i++) {
            Math.asin(a2);
        }
        const v10 = new Uint32Array(1000);
        for (const v11 in v10) {
        }
        return a4;
    }
    for (let v12 = 0; v12 < 5; v12++) {
        f1();
    }
`;
eval(v0);
gc();
