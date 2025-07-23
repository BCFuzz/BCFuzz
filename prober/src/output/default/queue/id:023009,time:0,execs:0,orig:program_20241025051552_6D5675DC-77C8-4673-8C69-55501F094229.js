function f0(a1, a2) {
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 25; v7++) {
                this["p" + v7] = v7;
            }
        }
    }
    const v10 = new C3();
    return JSON.parse(JSON.stringify([v10]));
}
f0();
f0();
gc();
