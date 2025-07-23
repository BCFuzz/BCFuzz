const v1 = `
    for (let v2 = 0; v2 < 5; v2++) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
        }
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let v10 = 0; v10 < 5; v10++) {
        }
        let v11 = 0;
        for (let i = 0; i < 5; i++) {
            try {
            const t0 = true;
            t0();
            } catch (e) {}
            v11++;
        }
    }
    [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C15 {
        static #e = 256n;
    }
`;
eval(v1);
gc();
