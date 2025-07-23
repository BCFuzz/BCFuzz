const v1 = new Set();
class C2 extends Set {
    8 = v1;
    #d;
}
function f3(a4, a5, a6, a7) {
    const o15 = {
        toString(a9) {
            function f10(a11) {
                new C2();
                return arguments;
            }
            f10();
        },
    };
    function f17(a18, a19, a20, a21) {
        v1 / a21;
        return f17;
    }
    const v23 = new C2();
    for (let v24 = 0; v24 < 5; v24++) {
        const t21 = f17(v23, v24, v23, a5);
        t21(o15, 2, v24, o15);
    }
    return o15;
}
f3(C2, v1, v1, v1);
f3();
gc();
