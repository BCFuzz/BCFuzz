for (let [i21, i22] = (() => {
        class C2 {
            constructor() {
                super.d = this;
            }
        }
        const v4 = new C2();
        const v5 = new C2();
        for (let i9 = 0, i10 = 10 + 10; i10--, i9 < i10;) {
            for (let v17 = 0; v17 < 10; v17++) {
            }
            for (const v18 in v5) {
                try { i10(v5, i10, C2, v18, v18); } catch (e) {}
                v4[v18];
            }
        }
        return [0, 10];
    })();
    i21 < i22;
    i22--) {
}
gc();
