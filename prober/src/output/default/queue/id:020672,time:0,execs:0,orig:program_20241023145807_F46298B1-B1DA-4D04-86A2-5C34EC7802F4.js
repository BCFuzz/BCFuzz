const v1 = Array(Array);
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = [Array,Array,Array];
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
        const v24 = v7.constructor;
        class C25 extends v24 {
            a = v24;
        }
        new C25();
    }
}
new F2();
gc();
