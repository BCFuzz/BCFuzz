const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9(a10, a11, a12, a13) {
                    const v14 = a10--;
                    /\u{12345}/myvis;
                    [v14,...[-666901.592271666,-1.2159841305053372e+308,2.2250738585072014e-308,8.58718033452028,-4.603314759533532]];
                }
            `;
            const v18 = v8.split(a6);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
