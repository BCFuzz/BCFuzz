for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        this.a4 = F1;
        Object.defineProperty(this, "a19", { writable: true, configurable: true, enumerable: true, value: F1 });
        this.g = -1;
        this.a = -1;
    }
    const v4 = new F1();
    function f5(a6) {
        return a6;
    }
    Object.defineProperty(v4, "g13", { configurable: true, enumerable: true, set: f5 });
    const v7 = new F1();
    for (const v8 in v7) {
        for (let v9 = 0; v9 < 32; v9++) {
            v4[v8 + v9] = v9;
        }
    }
    const o11 = {
        ...v4,
    };
}
gc();
