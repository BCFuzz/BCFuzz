const o10 = {
    n(a1, a2, a3) {
        for (let v4 = 0; v4 < 25; v4++) {
            class C5 {
                static {
                    try { this.call(); } catch (e) {}
                    for (let v8 = 0; v8 < 100; v8++) {
                    }
                }
            }
            new C5();
        }
        return a1;
    },
};
const v11 = o10.n;
v11(o10, v11, v11);
gc();
