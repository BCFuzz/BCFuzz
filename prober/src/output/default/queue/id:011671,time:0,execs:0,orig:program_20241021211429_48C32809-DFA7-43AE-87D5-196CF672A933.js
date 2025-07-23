const v0 = `
    /\u{12345}/myvis;
    function f2() {
        const v3 = [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0];
        for (const v4 of v3) {
            for (let v5 = 0; v5 < 5; v5++) {
                function F6(a8, a9, a10, a11) {
                    if (!new.target) { throw 'must be called with new'; }
                    for (let v12 = 0; v12 < 5; v12++) {
                        for (let v13 = 0; v13 < 5; v13++) {
                        }
                    }
                }
            }
        }
        return v3;
    }
`;
eval(v0);
gc();
