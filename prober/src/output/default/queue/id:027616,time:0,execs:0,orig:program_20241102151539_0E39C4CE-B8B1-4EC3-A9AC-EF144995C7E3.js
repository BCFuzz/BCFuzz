const v1 = new Uint8Array(Uint8Array, Uint8Array);
const v3 = new WeakSet();
function f4(a5, a6) {
    a6.add = a5;
    a6.prototype = a6;
    const o11 = {
        ...a6,
        "b": a6,
        get a() {
            return Reflect.construct(WeakSet, [v3], a6);
        },
    };
    try { o11.b(v1, o11); } catch (e) {}
    return Uint8Array;
}
f4(WeakSet, f4);
gc();
