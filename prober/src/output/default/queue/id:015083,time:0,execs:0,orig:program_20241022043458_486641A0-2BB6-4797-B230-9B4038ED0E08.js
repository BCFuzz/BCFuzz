const o8 = {
    valueOf() {
        Math.sqrt(16 ** null);
        this & -4294967296;
        return this;
    },
};
try { o8.valueOf(); } catch (e) {}
gc();
