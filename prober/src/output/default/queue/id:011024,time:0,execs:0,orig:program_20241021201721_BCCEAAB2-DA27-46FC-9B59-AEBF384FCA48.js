const v0 = `
    class C1 {
        #c;
        constructor(a3, a4) {
            this.#c **= this;
        }
    }
    new C1();
`;
eval(v0);
gc();
