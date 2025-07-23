function f0(a1, a2) {
    for (let v3 = 0; v3 < 5; v3++) {
        class C4 {
            static set b(a6) {
                this.b;
                this.name;
            }
        }
        const o9 = {
            __proto__: C4,
        };
        o9.b = o9;
    }
    return a1;
}
f0.apply();
gc();
