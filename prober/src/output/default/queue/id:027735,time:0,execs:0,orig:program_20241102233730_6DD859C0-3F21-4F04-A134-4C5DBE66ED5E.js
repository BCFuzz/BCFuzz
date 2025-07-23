const v1 = new Uint8Array();
function f3(a4, a5) {
    a5.add = a4;
    a5.prototype = a5;
    const o10 = {
        ...a5,
        "b": a5,
        get a() {
            const v8 = [f3,f3,f3];
            v8[0] = v8;
            Reflect.construct(WeakSet, v8, a5);
            return f3;
        },
    };
    try { o10.b(v1, o10); } catch (e) {}
    return f3;
}
f3(WeakSet, f3);
gc();
