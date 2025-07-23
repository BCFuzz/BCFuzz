const v0 = /a\Sc/ygu;
class C1 {
}
const v2 = new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = [F3];
    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
    }
    function f19(a20, a21) {
        const o22 = {
        };
        const v24 = new Proxy(v2, o22);
        return v24;
    }
    v8.constructor = f19;
    for (let i = 0; i < 5; i++) {
        class C26 extends v8.constructor {
            [v0];
        }
        new C26();
    }
}
new F3(v2, F3, C1);
gc();
