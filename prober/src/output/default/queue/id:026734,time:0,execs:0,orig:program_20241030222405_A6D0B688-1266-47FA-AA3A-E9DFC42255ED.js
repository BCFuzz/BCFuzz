for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i = 0; i < 5; i++) {
    function f20() {
        return f20;
    }
    function f21() {
        return f20;
    }
    Object.defineProperty(f20, Symbol.iterator, { get: f21 });
    function f24() {
        this[Symbol.iterator] = f20;
        const o27 = {
        };
        const v29 = new Proxy(this, o27);
        v29.name = v29;
    }
    f20[Symbol.toPrimitive] = f24;
    const o31 = {
        __proto__: f20,
    };
    Math.f16round(o31);
}
gc();
