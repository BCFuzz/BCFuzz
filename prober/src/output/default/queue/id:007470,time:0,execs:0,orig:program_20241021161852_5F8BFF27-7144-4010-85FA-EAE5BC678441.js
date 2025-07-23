const o5 = {
    valueOf(a2, a3) {
        return 11n ** this;
    },
};
try { o5.valueOf(o5, 11n); } catch (e) {}
gc();
