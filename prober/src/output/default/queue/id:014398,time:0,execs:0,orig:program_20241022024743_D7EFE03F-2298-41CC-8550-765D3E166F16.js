const v0 = `
    /\u{12345}/myvis;
    let v2 = 61104;
    let v3 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C4 {
        static p(a6, a7, a8) {
            let v5 = this;
            [,v3,v2,v5] = a7;
        }
    }
`;
eval(v0);
gc();
