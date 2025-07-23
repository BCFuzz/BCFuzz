class C2 extends Uint32Array {
    constructor(a4, a5, a6, a7) {
        super();
        const o8 = {
        };
        const v10 = new Proxy(Uint8Array, o8);
        function f11() {
            return f11;
        }
        v10.valueOf = f11;
    }
}
new C2(Uint32Array, Uint32Array, Uint32Array, Uint8Array);
gc();
