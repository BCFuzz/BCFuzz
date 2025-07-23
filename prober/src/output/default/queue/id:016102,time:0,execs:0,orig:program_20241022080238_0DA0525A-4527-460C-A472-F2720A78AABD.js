function f1() {
    function f2() {
        return f2;
    }
    function f3() {
        typeof f3;
        for (let v5 = 0; v5 < 5; v5++) {
            f2();
        }
        this.valueOf(f1, f3, f1);
        this.b = this;
        return f1;
    }
    f3.call(0.0);
    return f3();
}
const v13 = new Float64Array(1201);
v13.map(f1);
gc();
