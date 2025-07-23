const v0 = `
    class C1 {
        #m(a3, a4) {
        }
        constructor(a6) {
            this.#m();
        }
    }
    new C1(C1);
`;
const v10 = eval(v0);
v10 >>> v10;
gc();
