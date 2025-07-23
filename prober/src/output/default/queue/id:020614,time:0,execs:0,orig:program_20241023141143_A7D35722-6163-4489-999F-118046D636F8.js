class C0 {
    get h() {
        const o2 = {
        };
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v7 = new F3(o2, F3);
        const v10 = new Uint32Array(1000);
        for (const v11 in v10) {
            function f12(a13, a14, a15, a16) {
                function f18(a19, a20) {
                    a16 >= o2;
                    try { v7.keyFor(); } catch (e) {}
                    return arguments;
                }
                f18();
            }
            f12();
        }
    }
}
const v25 = new C0();
v25.h;
gc();
