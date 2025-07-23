class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = [C0,C0,C0,C0,C0];
    for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    }
    function f18(a19, a20) {
        const o21 = {
        };
        const v23 = new Proxy(v1, o21);
        return v23;
    }
    v7.constructor = f18;
    for (let i = 0; i < 5; i++) {
        class C25 extends v7.constructor {
            #h;
        }
        new C25();
    }
}
new F2(F2, F2, F2);
gc();
