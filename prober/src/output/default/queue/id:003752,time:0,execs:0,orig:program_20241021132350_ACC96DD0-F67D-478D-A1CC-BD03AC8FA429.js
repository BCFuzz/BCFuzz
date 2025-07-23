function f0() {
    return f0;
}
const v1 = f0();
class C2 extends f0 {
    constructor(a4) {
        super();
        v1 + arguments;
    }
}
new C2();
gc();
