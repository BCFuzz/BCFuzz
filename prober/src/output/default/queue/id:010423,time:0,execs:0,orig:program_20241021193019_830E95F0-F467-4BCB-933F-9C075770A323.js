class C1 {
    toString(a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            const t3 = "symbol";
            t3["p" + v4] = v4;
        }
    }
}
const v7 = new C1();
try { AggregateError(v7, v7); } catch (e) {}
gc();
