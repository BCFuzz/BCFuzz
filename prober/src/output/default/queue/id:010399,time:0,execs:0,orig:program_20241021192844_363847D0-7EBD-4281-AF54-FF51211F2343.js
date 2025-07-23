const v0 = `
    /\u{12345}/myvis;
    function f2() {
        for (const v4 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
            const v5 = [v4,v4,v4];
            for (let v6 = 0; v6 < 5; v6++) {
                class C7 {
                    [v5] = v6;
                }
            }
        }
        return v0;
    }
`;
eval(v0);
gc();
