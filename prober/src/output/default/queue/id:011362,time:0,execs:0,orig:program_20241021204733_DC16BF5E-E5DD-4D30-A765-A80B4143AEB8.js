const o23 = {
    set f(a1) {
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        }
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v17 = a15.constructor;
            function f18(a19, a20) {
                return a15;
            }
            v17.valueOf = f18;
            v17.asUintN(this, v17);
        }
        new F13(-1024n);
    },
};
o23.f = o23;
gc();
