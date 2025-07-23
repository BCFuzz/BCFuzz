const o4 = {
    toString(a1) {
        a1 || a1;
        return super[this];
    },
};
try { o4.toString(); } catch (e) {}
gc();
