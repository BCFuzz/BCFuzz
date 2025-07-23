const v1 = [1.7976931348623157e+308,784293.0080530378,4.576781119021163,-8.011182668082245e+307,1.0];
class C2 {
}
class C3 extends C2 {
}
const v4 = new C3();
v4.__proto__ = v1;
const v5 = new Int8Array(v4);
try { v5.sort(C3); } catch (e) {}
gc();
