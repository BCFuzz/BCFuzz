for (let [i12, i13] = (() => {
        for (let v2 = 0; v2 < 100; v2++) {
            function f3(a4, a5) {
                const o6 = {
                    "f": a5,
                    __proto__: a4,
                };
                const v7 = o6.f;
                try { v7(); } catch (e) {}
                return f3;
            }
            f3(10, v2);
            f3(f3(), f3);
        }
        return [0, 10];
    })();
    i12 < i13;
    i13--) {
}
gc();
