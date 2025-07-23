const o5 = {
    toString(a2, a3) {
        this << "callee";
        return a2;
    },
};
try { o5.toString(o5, "callee", o5, o5); } catch (e) {}
gc();
