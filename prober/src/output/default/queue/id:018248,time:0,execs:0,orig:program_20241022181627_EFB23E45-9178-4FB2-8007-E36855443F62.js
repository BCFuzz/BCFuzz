class C0 {
}
class C1 {
    constructor() {
        super.d = this;
        ++C0;
    }
}
const v4 = new C1();
for (let i8 = 0, i9 = 10 + 10; i9--, i8 < i9;) {
    for (let v16 = 0; v16 < 100; v16++) {
    }
    for (const v17 in v4) {
        C0[v17];
    }
}
for (let i21 = -3, i22 = 10; i22--, i21 < i22;) {
}
gc();
