class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = [a5,a5,a5,a5,a5];
    function f8(a9, a10) {
        const o11 = {
        };
        const v13 = new Proxy(v1, o11);
        v13[4];
        return a10;
    }
    v7.constructor = f8;
    for (let i = 0; i < 5; i++) {
        class C16 extends v7.constructor {
        }
        new C16();
    }
}
new F2();
gc();
