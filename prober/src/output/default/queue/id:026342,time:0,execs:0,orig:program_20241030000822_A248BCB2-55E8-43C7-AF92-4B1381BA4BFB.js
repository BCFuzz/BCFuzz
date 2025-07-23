class C0 {
}
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
let v14 = new BigUint64Array(586);
for (let v15 of v14) {
    const o16 = {
    };
    const o17 = {
        __proto__: o16,
    };
    function f18() {
        let v19 = arguments;
        ({"b":v14,"e":C0,"f":v19,...v15} = o16);
        o17[Proxy] /= v19;
        return v19;
    }
    f18();
}
gc();
