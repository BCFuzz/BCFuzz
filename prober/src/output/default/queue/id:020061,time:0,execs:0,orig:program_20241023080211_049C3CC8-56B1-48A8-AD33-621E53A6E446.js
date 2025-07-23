const o6 = {
    valueOf(a3, a4) {
        11n ** this;
        return this;
    },
};
try { o6.valueOf(); } catch (e) {}
gc();
