for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new WeakSet();
    const v4 = new Set();
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    v2.__proto__ = v7;
}
gc();
