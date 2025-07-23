const v0 = `
    async function* f1(a2, a3) {
        class C4 {
        }
        function f5(a6) {
            return a6;
        }
        Object.defineProperty(C4, "eval", { set: f5 });
        with (C4) {
            try { eval(); } catch (e) {}
        }
        return f1;
    }
    f1();
`;
for (let i12 = 0, i13 = 10; i12 != i13; i13--) {
    for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    }
}
eval(v0).next(v0, eval);
gc();
