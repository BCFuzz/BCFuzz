const o1 = {
    ..."-44997",
};
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
Reflect.defineProperty(Reflect, Reflect, o1);
class C7 {
}
const v8 = new C7();
class C9 {
    constructor(a11, a12) {
        const v13 = a12?.constructor;
        try { new v13(); } catch (e) {}
        delete a12.g;
    }
}
const v16 = new C9(v4, v4);
new C9(v8, v16);
gc();
