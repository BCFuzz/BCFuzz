function f1() {
    function f2() {
        function f4() {
            return f4;
        }
        function f5(a6) {
            return f1;
        }
        Object.defineProperty(this, "b", { configurable: true, enumerable: true, get: f4, set: f5 });
        this.b = this;
        return f1;
    }
    f2.call(0.0);
    f2();
    return f2;
}
const v11 = new Float64Array(1201);
v11.map(f1);
gc();
