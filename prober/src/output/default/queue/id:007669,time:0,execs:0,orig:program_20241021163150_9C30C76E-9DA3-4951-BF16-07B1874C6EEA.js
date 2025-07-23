for (let i = 0; i < 25; i++) {
    async function f0(a1, a2, a3) {
        return await a3;
    }
    f0();
    function f6() {
    }
    for (let v7 = 0; v7 < 25; v7++) {
        delete v7[f6];
        for (let v9 = 0; v9 < 5; v9++) {
        }
    }
}
gc();
