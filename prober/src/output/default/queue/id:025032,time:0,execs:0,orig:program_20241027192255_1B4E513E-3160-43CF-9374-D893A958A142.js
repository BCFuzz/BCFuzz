const v3 = createGlobalObject().WebAssembly.Exception;
class C4 {
    o(a6, a7) {
        new v3();
    }
}
const v9 = new C4();
try { v9.o(v9); } catch (e) {}
gc();
