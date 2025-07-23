const v0 = `
    class C1 {
        constructor(a3, a4, a5) {
            let v6 = 1992522195;
            let v7 = WeakMap;
            const v9 = BigInt64Array();
            let v10 = 127;
            [v10,v7,,v6] = v9;
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
