for (const v6 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
    function F9(a11) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F9();
    function F16(a18, a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        const v26 = ["-4294967297",["-4294967297","-4294967297"]];
        v26.toString = Symbol;
        for (let v28 = 0; v28 < 10; v28++) {
            class C29 {
                [v26] = v28;
            }
            new C29();
            new C29();
        }
    }
    new F16();
    class C34 {
    }
    eval();
}
gc();
