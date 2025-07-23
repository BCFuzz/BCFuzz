const o7 = {
    valueOf(a3, a4) {
        try { this.valueOf(); } catch (e) {}
        return 11n ** 4n;
    },
};
o7.valueOf();
gc();
