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
    const v19 = createGlobalObject().Atomics;
    function f20(a21) {
        v2.byteOffset;
        for (let i25 = 0, i26 = 10; i25 !== i26; i26--) {
        }
        return a21;
    }
    v19[Symbol.toPrimitive] = f20;
    v19.or(v6);
    i10 < v19;
}
for (let i39 = -3, i40 = 10; i39 < i40; i40--) {
}
gc();
