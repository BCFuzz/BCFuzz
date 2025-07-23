for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i = 0; i < 25; i++) {
    function f10() {
        return f10;
    }
    function f11() {
        const o13 = {
        };
        const v15 = new Proxy(this, o13);
        try { v15.bind(); } catch (e) {}
    }
    f10[Symbol.toPrimitive] = f11;
    const o19 = {
        __proto__: f10,
    };
    Math.f16round(o19);
}
gc();
