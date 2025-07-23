function f0(a1, a2) {
    a2?.constructor;
    function f4(a5, a6, a7, a8) {
        return f0;
    }
    const t5 = f4.constructor;
    let v10 = t5();
    const v11 = v10--;
    class C12 {
        static #d = v11;
    }
    return f0;
}
class C13 {
}
const v14 = new C13();
v14.constructor = f0;
const v15 = v14.constructor;
const v17 = createGlobalObject();
try { v17.load(v15); } catch (e) {}
gc();
