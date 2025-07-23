class C0 {
    constructor(a2, a3, a4) {
        for (const v5 in a2) {
        }
    }
}
const v6 = new C0(C0, C0, C0);
const v7 = new C0();
const v8 = v7.constructor;
const v9 = new v8(v8, v8, v6);
const v10 = new C0(v8, v7, C0);
const t11 = v10.constructor;
new t11(v10, v9);
for (let v13 = 0; v13 < 250; v13++) {
}
gc();
