class C3 {
    c;
}
const v4 = new C3();
function f5() {
    this.b = this;
    delete this.b;
    return this;
}
const v10 = new Float64Array(1201);
v10.map(f5, v4);
gc();
