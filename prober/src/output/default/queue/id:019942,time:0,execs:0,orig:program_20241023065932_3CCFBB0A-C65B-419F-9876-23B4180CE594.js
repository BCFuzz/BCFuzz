for (let i = 0; i < 25; i++) {
    function f0() {
        return f0;
    }
    function f1() {
        const o3 = {
        };
        const v5 = new Proxy(this, o3);
        try { v5.toString(); } catch (e) {}
    }
    f0[Symbol.toPrimitive] = f1;
    const o9 = {
        __proto__: f0,
    };
    Math.f16round(o9);
}
for (let i = 0; i < 5; i++) {
    class C12 {
    }
    const v13 = new C12();
    const o14 = {
    };
    const v16 = new Proxy(v13, o14);
    v16.__proto__;
}
gc();
