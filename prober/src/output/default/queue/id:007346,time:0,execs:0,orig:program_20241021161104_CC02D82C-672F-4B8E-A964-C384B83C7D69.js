class C0 {
    constructor(a2) {
        for (let v3 = 0; v3 < 5; v3++) {
            for (let v4 = 0; v4 < 250; v4++) {
                v4++;
                v4--;
            }
            Reflect.getPrototypeOf(a2);
        }
    }
}
const v9 = new C0(C0);
new C0(v9);
gc();
