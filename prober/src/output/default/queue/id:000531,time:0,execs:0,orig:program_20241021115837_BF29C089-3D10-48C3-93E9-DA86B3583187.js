class C0 {
    constructor(a2) {
        function F3(a5) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a5;
        }
        new F3();
        new F3();
    }
}
new C0();
new C0();
gc();
