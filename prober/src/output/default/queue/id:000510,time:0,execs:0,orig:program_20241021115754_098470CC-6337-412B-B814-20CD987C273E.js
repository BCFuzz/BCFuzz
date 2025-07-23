class C0 {
    static {
        gc();
    }
    o(a5, a6) {
        const o7 = {
        };
        new Proxy(this, o7);
    }
}
const v10 = new C0();
v10.o(C0, v10);
gc();
