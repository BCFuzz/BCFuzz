function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10;
        i9 < i10;
        (() => {
            const v16 = new Date(i10--);
            v16.setFullYear(512);
            v16.getTimezoneOffset();
        })()) {
    }
}
new F1(512, F1, F1, F1);
gc();
