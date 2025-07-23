function f0(a1, a2, a3, a4) {
    function f5(a6) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a1;
        }
        const v12 = new F8();
        try { v12.e(a3, Date, a2); } catch (e) {}
        class C14 extends Date {
        }
        const v15 = new C14();
        v15.setUTCSeconds();
        return Number.isNaN(v15.getYear());
    }
    ([3.6678067847652756,-3.3588036264140016e+307,5.730101676166519e+306,-1000000000.0,0.21287490118238417,-1.5994042304030588e+308,2.2250738585072014e-308,0.0]).flatMap(f5);
    return a3;
}
f0(f0);
gc();
