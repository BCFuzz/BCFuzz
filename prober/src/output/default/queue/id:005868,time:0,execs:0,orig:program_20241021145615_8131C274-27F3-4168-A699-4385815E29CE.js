class C0 {
    #m(a2, a3, a4, a5) {
    }
    get e() {
        const v7 = `
            function f8(a9, a10, a11) {
                f8();
                return this;
            }
        `;
        eval(v7);
    }
}
const v15 = new C0();
v15.e;
gc();
