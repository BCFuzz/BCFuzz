const o13 = {
    n(a1, a2, a3) {
        let v4;
        try { v4 = a3(); } catch (e) {}
        for (let v5 = 0; v5 < 10; v5++) {
            class C6 {
                constructor() {
                    this.length = 14;
                }
                #f;
            }
            new C6();
            const v10 = new C6();
            v10.length;
            for (let v12 = 0; v12 < 25; v12++) {
            }
            v10.length = v10;
        }
        return v4;
    },
};
const v14 = o13.n;
v14(v14, o13, v14);
gc();
