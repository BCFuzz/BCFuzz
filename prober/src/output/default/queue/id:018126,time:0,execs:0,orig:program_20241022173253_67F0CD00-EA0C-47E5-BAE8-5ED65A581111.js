for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v22 = new Uint8ClampedArray(255);
for (const v23 in v22) {
    const o24 = {
    };
    function f25() {
        return o24;
    }
    function f26(a27) {
        const v31 = ["global","global"];
        const v32 = [];
        function f33(a34, a35, a36) {
            a35.replace("undefined", a35);
            const o43 = {
                65537: a34,
                ..."B",
                [v31](a39, a40, a41, a42) {
                },
            };
            return a27;
        }
        f33(v32, "global");
        f33(v31, "undefined");
        return v32;
    }
    Object.defineProperty(o24, "a", { configurable: true, enumerable: true, get: f25, set: f26 });
    o24.a = v23;
}
gc();
