const o10 = {
    n(a1, a2) {
        class C3 {
        }
        const v4 = new C3();
        const v5 = new C3();
        const v7 = this.constructor;
        v7.freeze(v5);
        v7.assign(v4, v5);
        return v5;
    },
};
o10.n();
gc();
