const o10 = {
    n(a1, a2, a3) {
        for (let v4 = 0; v4 < 25; v4++) {
            class C5 {
                constructor() {
                    this.length = 14;
                }
                #f;
            }
            for (let v8 = 0; v8 < 5; v8++) {
            }
            const v9 = new C5();
            v9.b = v9;
        }
    },
};
const v11 = o10.n;
const v12 = v11?.bind;
try { v12(); } catch (e) {}
v11();
gc();
