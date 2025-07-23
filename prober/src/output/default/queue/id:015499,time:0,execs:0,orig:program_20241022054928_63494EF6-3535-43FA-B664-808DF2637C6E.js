function f1(a2) {
    Symbol(a2) in SyntaxError(a2);
}
const v8 = [-1000.0,2.220446049250313e-16,0.21707873446094106,0.30135142262428616,0.23354146903329376];
v8.toString = f1;
const o12 = {
    set d(a10) {
        for (let i = 0; i < 100; i++) {
            const o11 = {
                [v8]: 0.9555916980184522,
            };
        }
    },
};
o12.d = o12;
gc();
