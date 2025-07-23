class C0 {
    constructor(a2, a3) {
        try { a3(); } catch (e) {}
    }
}
class C5 extends C0 {
}
for (let i9 = 0, i10 = 10 + 10;
    (() => {
        i10--;
        const v12 = i9 < i10;
        function f13(a14, a15, a16) {
            new C5();
        }
        f13();
        return v12;
    })();
    ) {
    const v25 = createGlobalObject().Atomics;
    try { v25.load(); } catch (e) {}
    for (let v27 = 0; v27 < 250; v27++) {
    }
}
gc();
