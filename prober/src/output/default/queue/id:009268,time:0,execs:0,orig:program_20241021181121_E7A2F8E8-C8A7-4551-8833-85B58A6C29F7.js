const o1 = {
    get c() {
        return this;
    },
};
this.constructor.assign(o1);
gc();
