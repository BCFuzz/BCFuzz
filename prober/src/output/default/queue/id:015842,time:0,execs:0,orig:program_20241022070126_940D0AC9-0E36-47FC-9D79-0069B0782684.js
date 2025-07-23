const v3 = new Float32Array();
class C4 {
    m(a6, a7) {
        const v9 = [Reflect,Reflect,Reflect,Reflect];
        Reflect.apply(v3.join, a7, v9);
    }
}
const v12 = new C4();
try { v12.m("unshift", "string"); } catch (e) {}
gc();
