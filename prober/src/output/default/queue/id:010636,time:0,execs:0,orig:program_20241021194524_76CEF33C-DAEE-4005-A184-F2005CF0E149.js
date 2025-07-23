const o10 = {
    set d(a2) {
    },
    toString(a4, a5, a6) {
        this.toJSON = -2147483647;
        return JSON["stringify"](this);
    },
};
o10.toString();
gc();
