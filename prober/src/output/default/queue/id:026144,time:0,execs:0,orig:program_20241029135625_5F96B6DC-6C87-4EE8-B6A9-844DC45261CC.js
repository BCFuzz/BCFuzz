const v2 = new Proxy(Reflect, Reflect);
function f3(a4, a5) {
    const o6 = {
    };
    class C8 extends o6.constructor {
    }
    C8.seal(v2);
    return Reflect;
}
f3.apply();
gc();
