for (let [i14, i15] = (() => {
        for (let v2 = 0; v2 < 250; v2++) {
            v2++;
            function f5(a6, a7) {
                const o8 = {
                    "f": a7,
                    __proto__: a6,
                };
                const v9 = o8.f;
                try { v9(); } catch (e) {}
                return f5;
            }
            f5(f5(Number), f5);
            v2--;
        }
        return [0, 10];
    })();
    i14 < i15;
    i15--) {
}
gc();
