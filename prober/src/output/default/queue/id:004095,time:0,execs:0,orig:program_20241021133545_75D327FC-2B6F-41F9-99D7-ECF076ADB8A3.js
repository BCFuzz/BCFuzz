const o10 = {
    set f(a1) {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            const v7 = a5.constructor;
            try { v7.asUintN(this, v7); } catch (e) {}
        }
        new F3(-1024n);
    },
};
o10.f = o10;
gc();
