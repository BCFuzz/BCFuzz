function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
for (let i6 = 0;
    (() => {
        const v8 = i6 < 21768;
        delete v4[Math.sinh(i6)];
        return v8;
    })();
    i6++) {
}
gc();
