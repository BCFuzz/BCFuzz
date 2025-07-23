class C0 {
    constructor(a2, a3, a4, a5) {
        for (let v6 = 0; v6 < 25; v6++) {
            for (let v7 = 0; v7 < 5; v7++) {
                for (let i = 0; i < 5; i++) {
                    try { a2(); } catch (e) {}
                }
                eval(a2);
            }
            let v11 = 5.0;
            --v11;
            v11 | v11;
            for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
            }
        }
    }
}
new C0(C0);
gc();
