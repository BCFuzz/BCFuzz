class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = [a4];
    const v8 = [a5,a5,a5,a5,a5];
    function f9(a10, a11) {
        const o12 = {
        };
        const v14 = new Proxy(v1, o12);
        return v14;
    }
    v8.constructor = f9;
    for (let i = 0; i < 5; i++) {
        class C16 extends v8.constructor {
            4 = v7;
        }
        new C16();
    }
}
new F2(C0, F2, v1);
gc();
