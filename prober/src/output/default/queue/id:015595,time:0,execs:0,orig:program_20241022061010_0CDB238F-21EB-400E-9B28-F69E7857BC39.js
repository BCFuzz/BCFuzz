class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
const v3 = [v2,v2,v2];
function f4(a5) {
    return v3;
}
Object.defineProperty(v3, 6, { enumerable: true, set: f4 });
const v7 = ([-1e-15,2.2250738585072014e-308,-5.0,1000.0])[0];
try { v3.splice(v7, v7, v2); } catch (e) {}
gc();
