function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
class C5 {
}
for (let i8 = 0, i9 = 127;
    i8 < i9;
    (() => {
        let v13 = i9--;
        class C14 extends C5 {
        }
        const v15 = new C14();
        function f16(a17, a18) {
            C5 = C14;
            v4.__proto__ = v15;
            v13 >>= i9;
            return a18;
        }
        v15.constructor = f16;
        const t11 = v15.constructor;
        t11();
    })()) {
}
gc();
