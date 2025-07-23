class C0 {
    constructor(a2) {
        function f3(a4) {
            const v6 = new ArrayBuffer(a4, this);
            v6.transfer();
            const v9 = new Int32Array(v6);
            return v9;
        }
        this.constructor = f3;
        try { this.constructor(); } catch (e) {}
    }
}
new C0();
gc();
