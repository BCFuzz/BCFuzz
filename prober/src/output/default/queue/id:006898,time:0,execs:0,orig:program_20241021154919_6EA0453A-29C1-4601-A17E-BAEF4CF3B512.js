const v0 = [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0];
for (const v1 of v0) {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v5 = new F2();
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = [v1];
        function f13(a14, a15) {
            v5.d = v5;
            return a15;
        }
        v12[Symbol.toPrimitive] = f13;
        for (let v18 = 0; v18 < 10; v18++) {
            class C19 {
                [v12] = v18;
            }
        }
    }
    new F6(v0, F6, v5, v5);
}
gc();
