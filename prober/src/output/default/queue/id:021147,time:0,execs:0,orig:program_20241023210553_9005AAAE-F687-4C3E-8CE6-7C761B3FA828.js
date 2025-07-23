const v1 = new Set();
function f2(a3, a4) {
    return a3;
}
class C5 {
}
class C6 extends C5 {
}
const v7 = new C6();
for (let v8 = 0; v8 < 250; v8++) {
    v8++;
    v8--;
    function f11() {
        return v7;
    }
    Object.defineProperty(v7, C5, { configurable: true, get: f2, set: f11 });
    v1.__proto__ = v7;
}
gc();
