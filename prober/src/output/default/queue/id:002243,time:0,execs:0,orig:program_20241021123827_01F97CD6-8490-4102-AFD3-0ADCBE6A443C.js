class C1 extends Uint8Array {
    constructor(a3, a4) {
        super();
        gc();
        Uint8Array[3] = Uint8Array;
    }
}
new C1(Uint8Array, C1);
new C1(Uint8Array, C1);
gc();
