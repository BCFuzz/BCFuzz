function f0() {
}
const v1 = /a\Sc/ygu;
v1.toString = f0;
class C2 {
}
const v3 = new C2();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = [this,this];
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
    function f20(a21, a22) {
        const o23 = {
        };
        const v25 = new Proxy(v3, o23);
        return v25;
    }
    v9.constructor = f20;
    for (let i = 0; i < 5; i++) {
        class C27 extends v9.constructor {
            [v1];
        }
        new C27();
    }
}
new F4();
gc();
