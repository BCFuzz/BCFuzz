const o5 = {
    set b(a1) {
        this.constructor.freeze(this);
    },
};
o5.b = o5;
o5.b = o5;
gc();
