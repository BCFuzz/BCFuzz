class C1 extends Array {
}
class C2 {
    constructor(a4, a5, a6) {
        try { new a4(); } catch (e) {}
        for (const v8 in a4) {
        }
    }
}
new C2(C2);
new C2(C1);
for (let v11 = 0; v11 < 250; v11++) {
}
gc();
