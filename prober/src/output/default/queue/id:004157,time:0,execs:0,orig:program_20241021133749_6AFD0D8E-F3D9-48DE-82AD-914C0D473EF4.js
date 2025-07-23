const v1 = `
    class C2 {
    }
    new C2();
    function f4(a5, a6, a7) {
        const v8 = [621427.1856124508,-Infinity,-2.7178248356014167,8.632153995786645,0.5803215404700105,-2.2250738585072014e-308,-847.8313472290884,403555.2158886029,1.7976931348623157e+308,-2.220446049250313e-16];
        [-190468.56150676322,1.460681105237637e+308,8.09378175035426,NaN,-1e-15,5.0,0.4572940273650268,-1.2472465727300203e+308,0.0,-2.080623795163894];
        const v10 = [];
        v10[65535] /= [v8];
        const v12 = a5.prototype;
        const o27 = {
            set d(a14) {
                const v17 = [2087322165,-1439285056];
                const v18 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
                const v19 = [4096];
                function f20(a21, a22) {
                    const o23 = {
                        __proto__: v18,
                        ["ignoreCase"]: v17,
                    };
                }
                f20("pqwpR", v19);
                super[this.valueOf(a7, v12)];
            },
            "e": a6,
        };
        return o27;
    }
    f4(C2);
    const v29 = f4(C2);
    v29.d = v29;
    for (let v30 = 0; v30 < 5; v30++) {
        v30 / v30;
        function F32() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v34 = new F32();
        function F35(a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v34;
        }
        new F35();
        const v40 = new F35();
        try { v40.hasOwnProperty(5); } catch (e) {}
        for (let v42 = 0; v42 < 5; v42++) {
            class C45 {
                #d = 10n;
                static [10n] = 45373n;
            }
            C45[10] = C45;
        }
        for (let v46 = 0; v46 < 5; v46++) {
        }
    }
    const v47 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C48 {
        static p(a50, a51, a52) {
        }
        static #e = v47;
    }
    const t60 = C48.constructor;
    t60();
    let v55 = 256n;
    v55--;
    function f57() {
    }
    class C58 {
        static #f;
        #d;
    }
`;
eval(v1);
gc();
