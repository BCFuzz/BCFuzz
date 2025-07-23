const v1 = TypeError();
function f2() {
    this.line = this;
    this.b = this;
    return delete this.b;
}
const v7 = new Float64Array(1201);
v7.map(f2, v1);
gc();
