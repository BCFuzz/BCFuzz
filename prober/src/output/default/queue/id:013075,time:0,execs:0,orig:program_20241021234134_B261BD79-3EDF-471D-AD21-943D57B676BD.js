const v1 = new WeakSet();
function f2(a3, a4) {
    const o9 = {
        ...a4,
        "b": a4,
        get a() {
            Reflect.construct(WeakSet, [v1], a4);
            return this;
        },
    };
    try { o9.b(f2, o9); } catch (e) {}
    return o9;
}
f2(WeakSet, f2);
gc();
