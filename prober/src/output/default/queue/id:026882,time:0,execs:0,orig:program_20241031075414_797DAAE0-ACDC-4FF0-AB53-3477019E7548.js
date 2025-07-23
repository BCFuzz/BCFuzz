const v1 = new Uint32Array(Uint32Array, Uint32Array);
const v3 = new WeakSet();
function f4(a5, a6) {
    a5.add = v1;
    a6.prototype = a6;
    const o11 = {
        ...a6,
        "b": a6,
        get a() {
            Reflect.construct(WeakSet, [v3], a6);
            return f4;
        },
    };
    try { o11.b(f4, o11); } catch (e) {}
    return a6;
}
f4(WeakSet, f4);
gc();
