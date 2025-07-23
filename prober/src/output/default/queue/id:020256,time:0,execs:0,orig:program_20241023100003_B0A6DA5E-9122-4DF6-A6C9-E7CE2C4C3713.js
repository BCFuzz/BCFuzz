function f0(a1) {
    return f0;
}
const o2 = {
};
const v4 = new Proxy(f0, o2);
class C5 extends v4 {
    constructor(a7, a8, a9) {
        super();
        try {
            super.o();
        } catch(e11) {
        }
    }
}
new C5();
gc();
