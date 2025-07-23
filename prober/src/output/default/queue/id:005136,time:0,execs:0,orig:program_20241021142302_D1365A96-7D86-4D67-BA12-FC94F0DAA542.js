class C1 {
}
class C2 extends C1 {
}
Object.defineProperty(C1, 2, { value: NaN });
[0.0,-1000000.0,NaN,-0.0,2.220446049250313e-16,-4.0,-2.220446049250313e-16,246783.58654559474];
gc();
