function f2(a3, a4) {
    try { a3.__defineSetter__(undefined, a3); } catch (e) {}
    const o7 = {
        get a() {
            return f2;
        },
    };
    return o7;
}
f2().a(Date);
gc();
