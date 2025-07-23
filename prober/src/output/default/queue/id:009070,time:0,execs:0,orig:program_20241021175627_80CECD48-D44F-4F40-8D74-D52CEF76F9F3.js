class C1 {
}
const v2 = new C1();
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        i6--;
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a13.name;
            const o17 = {
            };
            class C18 {
            }
            function f19(a20, a21, a22, a23) {
                return F11;
            }
            C18.length = C18;
            Reflect.deleteProperty(v2);
            Reflect.ownKeys(o17);
        }
        const v27 = new F11(F11);
        const t16 = v27.constructor;
        new t16(3037);
    })()) {
}
gc();
