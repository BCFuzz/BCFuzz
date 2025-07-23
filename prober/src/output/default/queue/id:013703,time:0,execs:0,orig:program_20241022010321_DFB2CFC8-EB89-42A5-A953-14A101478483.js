const o4 = {
    toString(a1) {
        try { Math.round(this); } catch (e) {}
    },
};
o4 + [o4];
gc();
