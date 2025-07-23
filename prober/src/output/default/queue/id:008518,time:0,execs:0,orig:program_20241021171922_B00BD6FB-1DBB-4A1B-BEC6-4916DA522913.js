const o7 = {
    toString(a1, a2) {
        const v5 = new Date();
        v5.setUTCMonth(-1000.0);
        return v5;
    },
};
const v8 = o7.toString();
v8.toString(v8);
gc();
