class C0 {
    o(a2, a3) {
        const o4 = {
        };
        const v6 = new Proxy(this, o4);
        v6.b = v6;
    }
}
const v7 = new C0();
v7.o();
gc();
