function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i9, i10] = (() => {
            let v7 = 10;
            v7++;
            return [0, v7];
        })();
        i10++, i9 < i10;
        (() => {
            const v17 = new Date(i10--);
            v17.setMilliseconds(v17);
        })()) {
        i10--;
    }
}
new F0();
gc();
