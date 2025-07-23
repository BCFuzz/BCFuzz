const v1 = new Float32Array();
const v4 = new Int8Array(1);
class C5 extends Int8Array {
    #d = Int8Array;
    constructor(a7, a8) {
        super(v4);
        try {
            v4.#d = a7;
        } catch(e9) {
        }
    }
    [v4] = v1;
}
new C5();
gc();
