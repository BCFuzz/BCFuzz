class C0 {
    constructor(a2, a3, a4, a5) {
        for (let v6 = 0; v6 < 5000; v6++) {
            const v7 = [v6];
            super.a = v6;
            v7.length **= v6;
        }
    }
}
new C0(C0, C0, C0, C0);
gc();
