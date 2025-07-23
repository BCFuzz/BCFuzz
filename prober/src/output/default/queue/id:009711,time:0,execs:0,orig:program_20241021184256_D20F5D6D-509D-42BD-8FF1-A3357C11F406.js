function f1() {
    return Date;
}
Object.defineProperty(Date, "toString", { get: f1 });
const v4 = /alxyz{93}/md.constructor;
try { v4("b", Date); } catch (e) {}
gc();
