function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [20721];
for (let i6 = 0, i7 = 10;
    i6 !== i7;
    (() => {
        i7--;
        v3[v2] = i6;
        for (let v12 = 0; v12 < 250; v12++) {
            v12++;
            v12--;
        }
    })()) {
}
gc();
