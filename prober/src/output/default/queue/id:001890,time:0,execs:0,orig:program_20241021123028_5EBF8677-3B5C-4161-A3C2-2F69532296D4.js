for (let v2 = 0; v2 < 32; v2++) {
    const v4 = "p" + v2;
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8) {
            new Float64Array(58766);
            return f7;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f7 });
        this.h = F5;
        this.c = -256;
    }
    new F5();
    const v13 = new F5();
    new F5();
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a18;
        this.c = v13;
    }
    new F15();
    new F15("m", 58766);
    new F15();
    const v23 = Symbol.iterator;
    const o25 = {
        [v23]() {
        },
    };
    const t28 = "m";
    t28[v4] = v2;
}
gc();
