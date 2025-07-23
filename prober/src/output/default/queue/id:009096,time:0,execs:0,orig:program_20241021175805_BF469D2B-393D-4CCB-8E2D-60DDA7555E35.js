class C0 {
}
const v1 = new C0();
function f2() {
    Int16Array(v1, Int16Array);
    return v1;
}
v1[Symbol.toPrimitive] = f2;
const v9 = [904623.0599490013,904623.0599490013,904623.0599490013,904623.0599490013,904623.0599490013];
Object.defineProperty(v9, "unit", { value: v1 });
const v10 = ["YlW",904623.0599490013];
try { v10.toLocaleString("YlW", v9); } catch (e) {}
gc();
