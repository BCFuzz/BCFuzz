class C0 {
}
let v3 = new BigUint64Array(586);
for (let v4 of v3) {
    const o5 = {
    };
    function f6() {
        return v3;
    }
    Object.defineProperty(o5, "f", { configurable: true, enumerable: true, get: f6 });
    function f7() {
        let v8 = arguments;
        ({"b":v3,"e":C0,"f":v8,...v4} = o5);
        return v8;
    }
    f7();
}
gc();
