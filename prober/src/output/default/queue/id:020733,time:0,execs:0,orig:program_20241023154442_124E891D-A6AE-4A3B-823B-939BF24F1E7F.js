function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        (() => {
            i9++;
            const v11 = i8 < i9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f16(a17, a18) {
                return a18;
            }
            Reflect.construct(Promise, [f16], F12);
            return v11;
        })();
        i9--) {
        i9--;
    }
}
new F0(F0, F0, F0, F0);
gc();
