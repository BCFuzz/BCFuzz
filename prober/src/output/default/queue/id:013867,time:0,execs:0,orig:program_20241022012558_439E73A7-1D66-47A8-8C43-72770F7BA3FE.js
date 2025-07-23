class C2 {
}
class C3 extends C2 {
}
const v4 = new C3();
const t5 = v4?.constructor;
new t5();
for (let v7 = 0; v7 < 500; v7++) {
    v7++;
    function f9(a10) {
        try { Reflect.getPrototypeOf(); } catch (e) {}
    }
    f9();
}
gc();
