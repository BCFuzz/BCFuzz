function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            for (let v15 = 0; v15 < 25; v15++) {
                for (let v16 = 0; v16 < 5; v16++) {
                }
            }
            const v18 = [-1,2];
            v18.push(a5);
            const v20 = v18.indexOf(-3.0);
            v20 * v20;
        })()) {
        i9--;
    }
}
new F0(F0, F0, F0, F0);
gc();
