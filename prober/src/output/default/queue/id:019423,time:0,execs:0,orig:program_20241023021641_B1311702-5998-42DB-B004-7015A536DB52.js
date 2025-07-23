const v1 = [Symbol];
const o13 = {
    n(a3, a4) {
        class C5 {
        }
        const v6 = new C5();
        const v7 = new C5();
        Object.defineProperty(v1.__proto__, 536870887, { configurable: true, get: Symbol, set: Symbol });
        const v10 = this.constructor;
        v10.freeze(v7);
        v10.assign(v6, v7);
        return this;
    },
};
o13.n();
gc();
