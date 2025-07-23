class C0 {
}
class C1 extends C0 {
    constructor(a3, a4) {
        super();
        const v5 = [0.2823171093299658,397.5942152657765];
        class C6 {
        }
        const v7 = new C6();
        function f8() {
            const o11 = {
                __proto__: null,
                toString() {
                    super.g = v5;
                    return this;
                },
            };
            const v13 = ("").repeat();
            try { v13.substring(v13, o11); } catch (e) {}
            return f8;
        }
        v7.valueOf = f8;
        for (let i17 = 0, i18 = 10; i17 !== i18; i18--) {
            for (let v25 = 0; v25 < 5; v25++) {
                v25 ^ v7;
            }
        }
    }
}
new C1(C1, C0);
gc();
