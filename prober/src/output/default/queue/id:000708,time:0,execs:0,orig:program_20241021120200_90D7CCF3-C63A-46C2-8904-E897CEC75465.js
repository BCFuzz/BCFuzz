class C3 extends Uint32Array {
    constructor(a5, a6, a7, a8) {
        super(a5);
        const o9 = {
        };
        const v11 = new Proxy(Uint8Array, o9);
        super.indexOf(v11, a7);
    }
}
new C3(15);
class C14 {
}
new C14();
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
}
new F16();
class C21 extends F16 {
    constructor(a23, a24, a25) {
        super();
        function F26(a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a28;
        }
        new F26();
        new F26();
    }
}
new C21();
new C21();
gc();
