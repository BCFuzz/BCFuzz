for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v12 = 0; v12 < 5; v12++) {
                function f13() {
                    return a11;
                }
                const v15 = [-6.11084164070691,-1000000000000.0,-6.797835243387633,-3.0,1.0,1.6369247494600133e+308];
                v15.constructor = f13;
                try { v15.flatMap(Map); } catch (e) {}
            }
        }
        new F7(i3, i3, F7);
        i3--;
    })()) {
}
gc();
