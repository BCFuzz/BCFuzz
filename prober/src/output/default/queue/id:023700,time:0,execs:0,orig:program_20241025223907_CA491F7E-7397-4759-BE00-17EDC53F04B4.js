for (let [i13, i14] = (() => {
        for (let v2 = 0; v2 < 250; v2++) {
            const v3 = v2++;
            function f5(a6, a7) {
                const o8 = {
                    __proto__: a6,
                    "b": v3,
                    0: 0,
                };
                const v9 = o8.f;
                try { v9(); } catch (e) {}
                return f5;
            }
            f5(f5(Number));
        }
        return [0, 10];
    })();
    i13 < i14;
    i14--) {
}
gc();
