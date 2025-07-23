class C0 {
}
const v1 = new C0();
const v2 = [-2.220446049250313e-16,NaN,6.3901919291001406,-1000000000000.0,-4.0,-1.7976931348623157e+308,NaN,0.0];
v2[3941] = v1;
class C4 {
}
try { C4.apply(Int32Array, v2); } catch (e) {}
gc();
