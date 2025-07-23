for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i = 0; i < 100; i++) {
    function f10() {
        return f10;
    }
    function f11() {
        try { this.bind(); } catch (e) {}
        const o14 = {
        };
        const v16 = Proxy.revocable;
        try { new v16(); } catch (e) {}
        const v18 = new Proxy(this, o14);
        v18.name = v18;
        try { v18.toString(); } catch (e) {}
    }
    f10[Symbol.toPrimitive] = f11;
    const o22 = {
        __proto__: f10,
    };
    Math.f16round(o22);
}
gc();
