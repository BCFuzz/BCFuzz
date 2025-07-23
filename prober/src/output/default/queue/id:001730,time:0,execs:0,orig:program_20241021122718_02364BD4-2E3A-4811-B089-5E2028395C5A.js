function f0() {
    const o2 = {
        get h() {
            return f0;
        },
    };
    return o2;
}
const v3 = f0();
class C4 extends f0 {
    static n(a6, a7) {
        super[this];
        for (let v9 = 0; v9 < 25; v9++) {
            v3["p" + v9] = v9;
        }
        Reflect.construct(a6);
    }
}
for (let i = 0; i < 5; i++) {
    try { C4.n(); } catch (e) {}
}
gc();
