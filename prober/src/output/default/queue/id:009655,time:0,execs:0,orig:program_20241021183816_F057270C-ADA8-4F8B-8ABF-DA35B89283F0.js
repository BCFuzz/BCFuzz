const o12 = {
    set f(a1) {
        const v3 = -2147483647n ^ -2147483647n;
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = a7.constructor;
            try { v9.asIntN(v3); } catch (e) {}
        }
        new F5(-1024n);
    },
};
o12.f = o12;
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
