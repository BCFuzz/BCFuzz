function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 100; i++) {
        const o8 = {
            set b(a4) {
                ("p" + a4).replace("p", "p");
            },
        };
        o8.b = o8;
    }
}
new F0();
gc();
