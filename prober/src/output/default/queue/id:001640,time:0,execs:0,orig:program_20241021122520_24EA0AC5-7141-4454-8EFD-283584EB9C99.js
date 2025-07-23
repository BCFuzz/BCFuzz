const o4 = {
    valueOf(a1, a2) {
        return a1 instanceof a2;
    },
};
1073741824n <= 1073741823n;
try { o4.valueOf(65536n, o4); } catch (e) {}
gc();
