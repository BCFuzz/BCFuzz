class C0 {
    constructor(a2, a3, a4, a5) {
        let v6;
        try { v6 = a4.call(a2, C0); } catch (e) {}
        for (let v7 = 0; v7 < 5; v7++) {
            const o8 = {
            };
            let v9 = o8.constructor;
            for (let i12 = 0, i13 = 10;
                (() => {
                    i13--;
                    const v15 = i12 < i13;
                    v9 ^= v6 === v15 ? v6 : v15;
                    return v15;
                })();
                ) {
            }
        }
    }
}
new C0();
gc();
