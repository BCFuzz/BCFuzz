const v0 = [3.227363586579575e+307,144.39942255849087,-1000.0,-2.220446049250313e-16,-660182.3334997279,2.2250738585072014e-308,0.9589123302096395,0.8738834811108555];
function f1(a2) {
    const o3 = {
        [v0]: a2,
    };
}
class C4 {
}
let v5 = -1232456862;
const v6 = v5++;
const v9 = ("257")[1];
function f10(a11, a12, a13) {
    a12[3] = v0;
    const v14 = a12[3];
    function f15() {
        Object.defineProperty(v9, "g", { writable: true, enumerable: true, value: v6 });
    }
    v14[Symbol.toPrimitive] = f15;
    v14.every(f1);
}
try { f10(65536, C4); } catch (e) {}
const v20 = [];
function f21() {
}
function f22(a23) {
}
Object.defineProperty(v20, 2, { configurable: true, get: f21, set: f22 });
v20.push(v20);
gc();
