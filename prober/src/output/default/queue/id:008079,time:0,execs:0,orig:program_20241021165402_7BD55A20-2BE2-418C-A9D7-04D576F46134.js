const o6 = {
    n(a1, a2) {
        try { this.n(); } catch (e) {}
        super.d = Symbol.toPrimitive;
        return a1;
    },
};
o6.n(o6, o6.n());
gc();
