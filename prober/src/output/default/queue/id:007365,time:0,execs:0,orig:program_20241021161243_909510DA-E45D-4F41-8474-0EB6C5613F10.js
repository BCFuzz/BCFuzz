const v1 = [1.7976931348623157e+308,784293.0080530378,4.576781119021163,-8.011182668082245e+307,1.0];
class C2 {
}
class C3 extends C2 {
}
const v4 = new C3();
for (let v5 = 0; v5 < 250; v5++) {
    v4.__proto__ = v1;
    new Int8Array(v4);
}
gc();
