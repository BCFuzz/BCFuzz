const v2 = new Uint8Array(4096);
function f3(a4, a5, a6) {
    const o17 = {
        [v2](a8, a9) {
        },
        toString(a11, a12, a13) {
            JSON["stringify"](this);
            return a6;
        },
    };
    return o17;
}
const v18 = f3();
f3()[v18];
gc();
