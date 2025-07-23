const v0 = `
    class C1 {
        #c;
        constructor(a3, a4) {
            const v5 = this.constructor;
            try { new v5(v0, a4, v5, v5); } catch (e) {}
            this.#c **= this;
        }
    }
    new C1(C1, C1);
`;
eval(v0);
gc();
