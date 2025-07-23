const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
        function F2() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v4 = new F2();
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v4;
        }
        const v10 = new F6(true, v0);
        const v11 = new F6(v4, v10);
        try { v11.hasOwnProperty(); } catch (e) {}
        v10[true] = v11;
        for (let v13 = 0; v13 < 5; v13++) {
            class C16 {
                #d = 10n;
                static [10n] = 45373n;
            }
            const v17 = new C16();
            const v18 = v17.constructor;
            try { v18(v4, v17, v0, v1, 10n); } catch (e) {}
        }
        for (let v20 = 0; v20 < 5; v20++) {
        }
    }
    const v21 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C22 {
        static p(a24, a25, a26) {
        }
        static #e = v21;
    }
    const v27 = C22?.constructor;
    try { v27(v27, v0, v0, C22, v21); } catch (e) {}
    let v29 = 256n;
    v29--;
    try {
    const t0 = 4294967296;
    t0(4294967296, 4294967296);
    } catch (e) {}
    function f33() {
        return 4294967296;
    }
    class C34 {
        #d;
        static [f33];
    }
`;
eval(v0);
gc();
