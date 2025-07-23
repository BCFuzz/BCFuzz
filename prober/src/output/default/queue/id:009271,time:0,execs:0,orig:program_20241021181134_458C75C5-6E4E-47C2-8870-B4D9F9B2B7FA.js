const o2 = {
    "a": -39.37673266688546,
    get g() {
        return this;
    },
};
this.constructor.seal(o2);
gc();
