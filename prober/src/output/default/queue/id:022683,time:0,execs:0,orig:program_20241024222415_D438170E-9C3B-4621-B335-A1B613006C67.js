function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 10, i5 = 10;
        -13369 < i5;
        (() => {
            const v10 = i5 | (i5 & i4);
            i5--;
            [v10];
        })()) {
    }
}
new F0();
gc();
