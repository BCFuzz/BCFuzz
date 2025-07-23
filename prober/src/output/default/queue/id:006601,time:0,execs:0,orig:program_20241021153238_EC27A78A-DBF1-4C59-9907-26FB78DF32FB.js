const o5 = {
    toString(a1, a2) {
        const t2 = this.toString;
        return t2();
    },
};
o5.toString();
gc();
