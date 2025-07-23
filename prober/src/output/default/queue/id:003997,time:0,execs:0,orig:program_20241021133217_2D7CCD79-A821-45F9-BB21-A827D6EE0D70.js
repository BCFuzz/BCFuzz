const v0 = `
    let v1 = -50716;
    for (let v2 = 0; v2 < 5; v2++) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v5 = new F3();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v5;
        }
        const v11 = new F7();
        const v12 = new F7();
        v11[true] = v12;
        for (let v13 = 0; v13 < 5; v13++) {
        }
        for (let v14 = 0; v14 < 5; v14++) {
        }
        "p" + v2;
    }
    let v17 = 61104;
    let v18 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C19 {
        static p(a21, a22, a23) {
            let v20 = this;
            [,v18,v17,v20] = a22;
        }
        static #e = v18;
    }
    -(++v1);
`;
eval(v0);
gc();
