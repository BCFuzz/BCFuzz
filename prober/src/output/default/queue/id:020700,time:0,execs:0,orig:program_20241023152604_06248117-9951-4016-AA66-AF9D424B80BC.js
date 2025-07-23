class C0 {
    #n(a2, a3) {
    }
}
const v5 = new Set();
function f6(a7, a8, a9, a10) {
    const o18 = {
        toString(a12) {
            function f13(a14) {
                new C0();
                return arguments;
            }
            f13();
        },
    };
    function f20(a21, a22, a23, a24) {
        v5 / a24;
        return f20;
    }
    for (let v26 = 0; v26 < 5; v26++) {
        const t20 = f20();
        t20(o18, 2, v26, o18);
    }
    return a10;
}
const v29 = f6(v5, Set, C0, v5);
f6(Set, v29, v29, v29);
gc();
