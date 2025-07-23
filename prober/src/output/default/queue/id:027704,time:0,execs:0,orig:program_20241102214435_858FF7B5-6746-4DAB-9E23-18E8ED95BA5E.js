class C0 {
}
const v1 = new C0();
function f2() {
    this.b = this;
    delete this.b;
    return C0;
}
f2();
const v8 = new Float64Array(1201);
v8.map(f2, v1);
([-1e-15,-Infinity,-3.0,4.0,-9.574728604669495,-1000.0,-99512.60297857109,-1.7976931348623157e+308]).findIndex(f2);
gc();
