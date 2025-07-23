for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    function f11() {
        return f11;
    }
    const v13 = new Proxy(f11, Reflect);
    v13.prototype = v13;
}
gc();
