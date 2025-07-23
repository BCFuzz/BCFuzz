function f0(a1) {
    const o2 = {
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function f13(a14, a15, a16, a17) {
            const o28 = {
                toString(a19, a20) {
                    function f21(a22, a23, a24, a25) {
                        delete a22[a23];
                        return a23;
                    }
                    f21(v4, a8);
                    return f13;
                },
            };
            o28.toString();
            return F5;
        }
        for (let i = 0; i < 5; i++) {
            f13();
        }
        return a10;
    }
    f9(v3, a8, a8);
    f9();
}
new F5(F5, F5);
new F5(f0, v3);
new F5();
gc();
