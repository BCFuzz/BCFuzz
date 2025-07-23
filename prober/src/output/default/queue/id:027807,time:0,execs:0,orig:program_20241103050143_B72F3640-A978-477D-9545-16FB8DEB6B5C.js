class C0 {
}
const v1 = new C0();
for (let i5 = -3, i6 = 10; i5 < i6; i6--) {
}
const v13 = [-2.220446049250313e-16,2.0,1.7976931348623157e+308,1000.0,-1.021370805805516e+308,-1000000000.0,0.4525172265339412];
function f14() {
    return 0.0;
}
Object.defineProperty(v13, Symbol.toPrimitive, { value: f14 });
v13[0] = v13;
const v19 = new Uint32Array(1000);
for (const v20 in v19) {
    v1[v13.join(v20.toLocaleLowerCase())] ||= 0.0;
}
gc();
