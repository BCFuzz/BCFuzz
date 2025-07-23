function f0() {
    const o2 = {
        127: -2147483648,
        128: -2147483648,
    };
    return f0;
}
const v5 = new Uint32Array(1000);
for (const v6 in v5) {
    function f7(a8, a9, a10, a11) {
        arguments.toString = f0;
        function f13(a14, a15) {
            a14.toString(a15, f0);
            return arguments;
        }
        f13(arguments);
    }
    f7();
}
for (let i21 = 0, i22 = 10;
    i21 < i22;
    (() => {
        i22--;
        for (let i29 = 0, i30 = 10; i29 !== i30; i30--) {
        }
    })()) {
}
gc();
