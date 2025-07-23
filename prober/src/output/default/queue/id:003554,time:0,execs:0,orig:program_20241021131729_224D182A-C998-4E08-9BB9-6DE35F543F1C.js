class C1 {
}
const v2 = new C1();
const v3 = new C1();
class C4 {
    static get f() {
        v3[1] = v2;
        const o6 = {
        };
    }
}
C4.toString().replaceAll(1.0);
gc();
