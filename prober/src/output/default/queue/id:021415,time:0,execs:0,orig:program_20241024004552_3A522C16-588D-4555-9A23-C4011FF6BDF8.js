for (let i = 0; i < 25; i++) {
    function f0() {
        return f0;
    }
    function f1() {
        const v4 = new Proxy(this, Proxy);
        try { v4.toString(v4, f0, f0, f1, f1); } catch (e) {}
    }
    f0[Symbol.toPrimitive] = f1;
    const o8 = {
        __proto__: f0,
    };
    Math.f16round(o8);
}
for (let i = 0; i < 5; i++) {
    class C11 {
    }
    const v12 = new C11();
    v12.constructor;
    const o14 = {
    };
    const v16 = new Proxy(v12, o14);
    v16.constructor;
}
gc();
