for (let i = 0; i < 25; i++) {
    async function f0(a1, a2, a3) {
        return a1;
    }
    const v5 = f0(f0, f0, f0).constructor;
    try { new v5(); } catch (e) {}
    for (let v7 = 0; v7 < 25; v7++) {
        for (let v8 = 0; v8 < 5; v8++) {
        }
    }
}
gc();
