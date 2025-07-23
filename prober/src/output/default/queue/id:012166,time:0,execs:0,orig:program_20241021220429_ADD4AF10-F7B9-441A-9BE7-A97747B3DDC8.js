const o11 = {
    valueOf(a1) {
        function f2(a3, a4, a5, a6) {
            a1();
            return f2;
        }
        try { this.valueOf(); } catch (e) {}
        -51195 - a1;
        return -51195;
    },
};
o11.valueOf();
o11.valueOf();
gc();
