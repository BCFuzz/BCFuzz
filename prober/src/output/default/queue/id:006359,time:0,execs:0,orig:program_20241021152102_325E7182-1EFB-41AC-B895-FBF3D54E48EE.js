class C1 extends Uint8Array {
    constructor(a3, a4) {
        super();
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.constructor(); } catch (e) {}
            this.b = a3;
        }
        new F5(F5, Uint8Array);
        class C11 extends F5 {
        }
        new C11();
        new C11();
    }
}
new C1();
new C1();
gc();
