class C0 {
    constructor(a2, a3) {
        const v4 = [6,268435440,-1872111987,-15,1889378099];
        for (let v6 of v4) {
            v6 >>= v6;
            v4[v6] = 1;
        }
    }
}
new C0();
new C0();
gc();
