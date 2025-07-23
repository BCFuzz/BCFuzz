class C0 {
}
const v1 = new C0();
const v4 = [v1];
function f5() {
    return v1(C0);
}
Object.defineProperty(v4, "unitDisplay", { get: f5 });
const v7 = ["YlW",904623.0599490013];
try { v7.toLocaleString("YlW", v4); } catch (e) {}
gc();
