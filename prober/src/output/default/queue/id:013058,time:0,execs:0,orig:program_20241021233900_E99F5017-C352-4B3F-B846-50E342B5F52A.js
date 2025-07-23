function f1() {
    function f2() {
        this.b = this;
        this.b = this;
        return this;
    }
    f2.call(0.0);
    f2();
    return f2;
}
const v8 = new Float64Array(1201);
v8.map(f1);
gc();
