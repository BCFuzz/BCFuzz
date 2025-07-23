const o6 = {
    n(a1, a2) {
        for (let i = 0; i < 5; i++) {
            const v5 = this.constructor.freeze(this);
            v5.a = v5;
        }
        return a1;
    },
};
o6.n();
gc();
