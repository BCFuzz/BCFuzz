const o7 = {
    m(a3, a4) {
        return Math.max(a4);
    },
};
try { o7.m(-4.0, -1n); } catch (e) {}
gc();
