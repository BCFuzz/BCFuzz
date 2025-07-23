let v1 = 256n;
class C2 {
    constructor(a4) {
        v1 <<= 16n;
    }
}
const v5 = new C2();
new C2(v5);
new C2();
new C2();
class C9 extends C2 {
}
new C9();
gc();
