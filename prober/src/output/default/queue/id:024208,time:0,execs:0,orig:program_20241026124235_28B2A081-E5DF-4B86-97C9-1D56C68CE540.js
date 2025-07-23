class C1 {
}
const v2 = new C1();
function f3(a4) {
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    f3();
    return ("object")[1];
}
v2.constructor = f3;
const v17 = v2.constructor;
try { v17("object", v17, v2); } catch (e) {}
gc();
