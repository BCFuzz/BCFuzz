class C1 {
}
const v2 = new C1();
const v6 = new Int32Array(681);
function f7(a8, a9, a10, a11) {
    function f13() {
        const o16 = {
            [51275]: undefined,
            "a": v6,
        };
        for (let i = 0; i < 5; i++) {
            a10 = undefined;
            v2.b *= 4294967296;
        }
        return undefined;
    }
    Object.defineProperty(arguments, "valueOf", { writable: true, value: f13 });
    arguments[2] = arguments;
    let v17 = arguments[2];
    v17--;
    return f13;
}
v6.map(f7);
gc();
