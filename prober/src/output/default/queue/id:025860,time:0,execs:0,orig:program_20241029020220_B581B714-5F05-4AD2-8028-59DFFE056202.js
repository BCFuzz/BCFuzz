class C1 extends Map {
}
const v2 = new C1();
function f3() {
    const o4 = {
        __proto__: v2,
    };
    o4.size;
    return f3;
}
try { f3(); } catch (e) {}
gc();
