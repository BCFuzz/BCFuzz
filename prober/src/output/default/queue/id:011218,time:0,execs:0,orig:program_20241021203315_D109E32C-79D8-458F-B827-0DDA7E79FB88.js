const o5 = {
    toString(a1, a2) {
        try { Math.sqrt(this); } catch (e) {}
        return a2;
    },
};
o5.toString(o5);
gc();
