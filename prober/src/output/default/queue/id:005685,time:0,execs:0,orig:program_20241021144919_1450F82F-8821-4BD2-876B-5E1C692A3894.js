const o10 = {
    n(a1, a2, a3) {
        for (let v4 = 0; v4 < 10; v4++) {
            class C5 {
                constructor() {
                    this.length = 14;
                }
                #f;
            }
            const v8 = new C5();
            for (let v9 = 0; v9 < 25; v9++) {
            }
            v8.length = v8;
        }
        return this;
    },
};
const v11 = o10.n;
v11(v11, o10, v11, o10, v11);
gc();
