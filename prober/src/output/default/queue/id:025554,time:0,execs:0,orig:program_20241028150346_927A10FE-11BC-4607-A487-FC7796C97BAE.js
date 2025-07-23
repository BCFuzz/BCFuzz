const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f9() {
        class C11 extends Uint8ClampedArray {
        }
        const v12 = new C11();
        const v13 = new Uint8ClampedArray(C11, a7);
        class C14 {
        }
        const v15 = new C14();
        const v16 = new Uint8ClampedArray();
        const v19 = new FinalizationRegistry(Int8Array);
        v19.register(v13, Uint8ClampedArray, v12);
        v19.register(FinalizationRegistry, v16, v15);
    }
    arguments.toString = f9;
    return arguments;
}
v2.map(f3);
gc();
