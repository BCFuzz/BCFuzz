const o7 = {
    toString(a1, a2) {
        const t2 = this.__proto__.toLocaleString().constructor;
        const v6 = new t2(a2);
        v6[8] = v6;
        return this;
    },
};
o7.toString();
gc();
