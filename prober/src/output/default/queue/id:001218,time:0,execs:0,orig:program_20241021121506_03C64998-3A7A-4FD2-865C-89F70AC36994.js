class C2 {
}
const v3 = new C2();
class C4 extends C2 {
}
const v5 = new C4();
Object.defineProperty(v5, "toString", { writable: true, enumerable: true, value: Date });
class C6 extends C2 {
    [v5] = "split";
}
const v7 = new C6();
const t11 = v7.constructor;
new t11();
const v10 = v3.constructor;
function f11() {
    const o12 = {
    };
    function f13() {
    }
    function f14(a15) {
    }
    Object.defineProperty(o12, "e", { writable: true, configurable: true, enumerable: true, get: f13, set: f14 });
}
v10.constructor = f11;
const v16 = v10.constructor;
try { v16(); } catch (e) {}
for (let v18 = 0; v18 < 250; v18++) {
}
gc();
