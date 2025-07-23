const o5 = {
    toString(a2, a3) {
        try { a2.toString(this); } catch (e) {}
        return a2;
    },
};
o5.toString(o5).toString(-141872923n);
gc();
