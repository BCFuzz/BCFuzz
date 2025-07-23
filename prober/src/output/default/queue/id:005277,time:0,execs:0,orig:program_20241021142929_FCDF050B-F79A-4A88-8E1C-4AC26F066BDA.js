class C1 {
    static n(a3, a4) {
        0 & 268435439n;
    }
}
try { C1.n(C1, C1); } catch (e) {}
for (let v8 = 0; v8 < 25; v8++) {
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i15 = 0, i16 = 10;
            i15 < i16;
            (() => {
                const v21 = new WeakSet();
                const v22 = v21.has;
                try { v22.bind(); } catch (e) {}
                try { v22(); } catch (e) {}
                i16--;
            })()) {
        }
    }
    new F9(v8, 268435439n);
}
gc();
