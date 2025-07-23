class C1 {
    constructor(a3) {
        delete a3.d;
    }
}
const v5 = new C1(127);
const v6 = new C1(v5);
new C1(v6);
for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
}
for (let v18 = 0; v18 < 250; v18++) {
}
gc();
