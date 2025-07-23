const v0 = `
    /\u{12345}/myvis;
    for (const v3 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
        }
        class C6 extends F4 {
        }
        const v7 = new C6();
        with (v7) {
        }
    }
`;
eval(v0);
gc();
