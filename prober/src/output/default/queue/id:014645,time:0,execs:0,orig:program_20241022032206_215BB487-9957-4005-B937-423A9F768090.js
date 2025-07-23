const o5 = {
    valueOf() {
        try { this.valueOf(this, this, this, this); } catch (e) {}
        function f2() {
            return f2;
        }
        function f3(a4) {
            return f3;
        }
        Object.defineProperty(this, "c", { configurable: true, get: f2, set: f3 });
        super.c = this;
        return f2;
    },
};
o5.valueOf();
gc();
