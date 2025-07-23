class C0 {
}
let v3 = new BigUint64Array(586);
for (let v4 of v3) {
    const o5 = {
    };
    function f6() {
        let v7 = arguments;
        const o8 = {
            __proto__: o5,
        };
        o8.valueOf = v4;
        ({"b":v3,"e":C0,"f":v7,...v4} = o5);
        return v7;
    }
    f6();
}
gc();
