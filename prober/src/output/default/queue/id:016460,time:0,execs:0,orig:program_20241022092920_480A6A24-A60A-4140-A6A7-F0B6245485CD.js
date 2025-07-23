function f1() {
    function f2() {
        const v3 = typeof f2;
        for (let v4 = 0; v4 < 5; v4++) {
        }
        this.b = v3;
        this.valueOf(this, f2, f2);
        this.b = this;
        return this;
    }
    f2.call(0.0);
    f2();
    return f2;
}
const v11 = new Float64Array(1201);
v11.map(f1);
gc();
