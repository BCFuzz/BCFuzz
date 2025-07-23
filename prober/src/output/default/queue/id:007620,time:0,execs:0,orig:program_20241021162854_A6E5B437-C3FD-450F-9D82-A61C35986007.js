const o6 = {
    valueOf(a2) {
        try { this.valueOf(2147483649); } catch (e) {}
        -51195 - a2;
    },
};
o6.valueOf(o6, 2147483649);
gc();
