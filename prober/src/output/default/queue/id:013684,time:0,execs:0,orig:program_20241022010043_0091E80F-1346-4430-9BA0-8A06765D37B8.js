function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        (() => {
            class C12 {
            }
            const v13 = new C12();
            const v14 = new C12();
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a19.length;
            }
            new F15("-1430", C12, v14);
            new F15(v13, "m", "m");
            return i8 < i9;
        })();
        i9--) {
    }
}
new F0();
gc();
