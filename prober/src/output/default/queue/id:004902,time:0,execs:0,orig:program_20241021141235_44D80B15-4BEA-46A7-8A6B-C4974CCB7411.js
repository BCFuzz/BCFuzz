function f0(a1) {
    const o18 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                    v5++;
                    v5--;
                }
                function F8(a10, a11, a12) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F8();
                new F8();
                new F8();
                try {
                    super.slice();
                } catch(e17) {
                }
            }
        },
    };
    return o18;
}
const v19 = f0(f0);
const v20 = f0();
function f21(a22, a23) {
    a22.n();
    return a22;
}
f21(v19);
f21(v20);
gc();
