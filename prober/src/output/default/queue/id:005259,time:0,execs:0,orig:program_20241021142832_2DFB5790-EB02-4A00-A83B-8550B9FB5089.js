for (const v1 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = [v1,v1,v1];
        v9.toString = Symbol;
        for (let v10 = 0; v10 < 5; v10++) {
            class C11 {
                [v9] = v10;
            }
            new C11();
            const v13 = new C11();
            const t11 = v13.constructor;
            new t11();
            new C11();
        }
    }
    new F2();
}
gc();
