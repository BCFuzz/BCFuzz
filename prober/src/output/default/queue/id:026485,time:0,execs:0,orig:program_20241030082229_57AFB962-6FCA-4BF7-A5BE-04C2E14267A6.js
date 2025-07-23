function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
const v6 = [0.0,-1000000.0,NaN,-0.0,2.220446049250313e-16,-4.0,-2.220446049250313e-16,246783.58654559474];
function f7(a8) {
    const v10 = [a8,a8,a8];
    return Reflect.apply(Date.now, v5, v10);
}
v6.toString = f7;
const o13 = {
};
function f14(a15) {
    return f14;
}
class C16 extends f14 {
}
for (let v17 = 0; v17 < 250; v17++) {
    let v18;
    try { v18 = v17(); } catch (e) {}
    o13[v6] **= v18;
    v17++;
    v17--;
}
gc();
