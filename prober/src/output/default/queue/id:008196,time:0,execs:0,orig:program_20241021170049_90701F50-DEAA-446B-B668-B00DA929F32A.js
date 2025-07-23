class C0 {
    constructor(a2, a3, a4, a5) {
        for (let v6 = 0; v6 < 100; v6++) {
            const v8 = new Set();
            v8.union(v8);
        }
    }
}
const v10 = new C0();
new C0(C0, v10, v10, v10);
gc();
