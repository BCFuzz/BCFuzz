const o7 = {
    n(a2, a3) {
        try { this.n(); } catch (e) {}
        const v6 = Symbol.toPrimitive;
        this[v6] = "valueOf";
        return v6;
    },
};
function f8(a9, a10) {
    a9.n();
    const o14 = {
        __proto__: a9,
        set a(a13) {
        },
    };
    return o14;
}
f8(f8(o7));
gc();
