const v0 = /j/dyvi;
class C1 {
}
function f2(a3) {
    return v0;
}
const v4 = new C1();
Object.defineProperty(v4, "toString", { writable: true, enumerable: true, value: f2 });
function f5(a6) {
    const v9 = [v4,v4,v4,v4,v4];
    Reflect.apply(("e").endsWith, v4, v9);
    return C1;
}
v4.constructor = f5;
const v12 = v4.constructor;
try { v12(v0, v0, v12, v0, v12); } catch (e) {}
gc();
