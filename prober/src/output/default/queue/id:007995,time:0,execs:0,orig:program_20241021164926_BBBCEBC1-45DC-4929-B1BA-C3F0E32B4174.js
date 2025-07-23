const o6 = {
    n(a1, a2) {
        const v5 = this.constructor.freeze(this);
        this[65536] = a1;
        return v5;
    },
};
o6.n();
gc();
