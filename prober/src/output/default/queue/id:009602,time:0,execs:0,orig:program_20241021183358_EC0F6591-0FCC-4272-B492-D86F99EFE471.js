function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 5; i++) {
        const o11 = {
            set b(a7) {
                const v9 = new Date(a7);
                v9.getHours();
            },
        };
        o11.b = o11;
    }
}
new F0(F0, F0, F0, F0);
new F0();
gc();
