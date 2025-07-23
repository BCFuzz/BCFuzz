function f0(a1) {
    let v2 = 65536n;
    const v3 = v2 << v2;
    const v4 = v2--;
    return v4 + ~(v3 ^ v4);
}
const v8 = [172.91909532380623,1.7976931348623157e+308,2.0,1.7976931348623157e+308,-5.932636511541974,0.7172488544368111,-1000.0];
v8[Symbol.toPrimitive] = f0;
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = v8 + Date();
    try { eval(v18); } catch (e) {}
}
new F11(v8, F11, F11);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
