const v2 = new Uint16Array(129);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F3();
let v6 = v5.g;
for (let i9 = 0, i10 = 10;
    (() => {
        i10--;
        const v12 = i9 < i10;
        v6 = v2;
        return v12;
    })();
    ) {
    createGlobalObject().Atomics.or(v6);
}
gc();
