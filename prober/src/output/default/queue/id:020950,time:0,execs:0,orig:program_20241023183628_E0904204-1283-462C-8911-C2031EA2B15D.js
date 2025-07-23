function f0() {
    function f1(a2, a3) {
        return a3;
    }
    return f1;
}
class C4 {
}
function f5() {
    return f0;
}
Object.defineProperty(C4, "toString", { configurable: true, get: f5 });
let v6 = -2.220446049250313e-16;
v6++;
eval(([[v6,C4]]).toLocaleString(v6, C4));
gc();
