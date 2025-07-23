function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new BigUint64Array();
    const v8 = v7.keys;
    try { v8(); } catch (e) {}
    function f10() {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.constructor(); } catch (e) {}
            this.e = arguments;
        }
        F12.length;
        new F12();
        new F12();
    }
    f10();
    this.a = a2;
}
new F0();
new F0();
gc();
