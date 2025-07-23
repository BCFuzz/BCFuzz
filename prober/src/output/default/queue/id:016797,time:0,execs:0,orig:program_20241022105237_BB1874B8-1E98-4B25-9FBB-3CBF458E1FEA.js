const o4 = {
    valueOf(a1) {
        Math.acosh(this);
        return this;
    },
};
try { o4.valueOf(o4, o4); } catch (e) {}
gc();
