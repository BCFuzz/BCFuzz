class C1 {
    static [-9.214133637540952e+306];
    b;
}
const v2 = `
    const o3 = {
    };
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        let v10;
        try { v10 = a6.shift(); } catch (e) {}
        const v12 = ("-4294967297")?.substring;
        new Date(-9.214133637540952e+306);
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        let v25;
        try { v25 = v12(o3); } catch (e) {}
        const v27 = ["-4294967297",[v25,v25,v25,v25,v25]];
        try { v27.values(); } catch (e) {}
        for (let v29 = 0; v29 < 5; v29++) {
            function* f30(a31, a32, a33, a34) {
                return a32;
            }
            class C35 {
                [v27] = v29;
            }
            const v36 = new C35();
            const v37 = v36?.constructor;
            for (let v38 = 0; v38 < 100; v38++) {
            }
            try { new v37(C1, "-4294967297", o3, v10); } catch (e) {}
        }
    }
    new F4();
    /\u{12345}/myvis;
`;
eval(v2);
gc();
