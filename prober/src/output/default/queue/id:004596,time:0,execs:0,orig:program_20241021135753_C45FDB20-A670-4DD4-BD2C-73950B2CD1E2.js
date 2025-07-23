class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 32; v4++) {
            ("p").padEnd(v4);
        }
    }
}
const v7 = new C0();
const v8 = new C0();
const v9 = new C0(v8, v7);
new C0(C0, v9);
gc();
