class C0 {
    constructor(a2) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                return f7;
            }
            class C8 extends f7 {
            }
        }
        new F5();
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = this.constructor;
            try { new v14(this); } catch (e) {}
            a12.d = a12;
            this.d = 1000;
            this.e = a13;
        }
        new F10(Uint8Array);
        const v17 = new F10(F10);
        new F10(v17);
    }
}
new C0(C0);
gc();
