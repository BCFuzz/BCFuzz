for (let [i16, i17] = (() => {
        for (let v2 = 0; v2 < 250; v2++) {
            v2++;
            function f5(a6, a7) {
                const o8 = {
                    "f": a7,
                    __proto__: a6,
                };
                const v9 = o8.f;
                try { v9(Date); } catch (e) {}
                Float32Array.from(o8);
                return f5;
            }
            f5(f5(Date), f5);
            v2--;
        }
        return [0, 10];
    })();
    i16 < i17;
    i17--) {
}
gc();
