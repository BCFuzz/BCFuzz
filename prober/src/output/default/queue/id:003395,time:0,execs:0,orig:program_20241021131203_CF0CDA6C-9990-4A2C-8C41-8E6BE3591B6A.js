const o8 = {
    toString(a1, a2) {
        const v5 = this.__proto__.toLocaleString().constructor;
        const v6 = new v5();
        v6.toWellFormed(a2);
        return v5;
    },
};
o8.toString();
gc();
