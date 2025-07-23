const o6 = {
    set b(a1) {
        const v3 = this.constructor;
        v3.isFrozen(this);
        v3.freeze(this);
    },
};
o6.b = o6;
o6.b = o6;
gc();
