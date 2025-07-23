const o4 = {
    valueOf() {
        function f1() {
            return f1;
        }
        function f2(a3) {
            return a3;
        }
        Object.defineProperty(this, "c", { configurable: true, get: f1, set: f2 });
        super.c = this;
        return this;
    },
};
o4.valueOf(o4);
gc();
