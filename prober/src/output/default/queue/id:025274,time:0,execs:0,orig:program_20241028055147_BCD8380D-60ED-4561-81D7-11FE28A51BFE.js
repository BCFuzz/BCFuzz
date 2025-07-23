function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = /a\Sc/ygu;
    class C3 {
    }
    const v4 = new C3();
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = [this,this,this,this];
        for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
        }
        function f21(a22, a23) {
            const o24 = {
            };
            const v26 = new Proxy(v4, o24);
            return v26;
        }
        v10.constructor = f21;
        class C28 extends v10.constructor {
            [v2];
        }
        new C28();
    }
    new F5(F0, F0, this);
    for (let i33 = 0, i34 = 10; i34--, i33 < i34;) {
    }
}
new F0();
gc();
