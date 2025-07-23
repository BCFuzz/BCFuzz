const v0 = [];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10;
        i9 < i10;
        (() => {
            i10--;
            const v16 = new Date(v0);
            v16.getUTCMilliseconds();
        })()) {
    }
}
new F1();
gc();
