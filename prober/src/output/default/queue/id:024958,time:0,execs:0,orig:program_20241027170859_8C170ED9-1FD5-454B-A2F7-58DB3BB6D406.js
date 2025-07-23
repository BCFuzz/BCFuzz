for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
        }
    })()) {
}
const v20 = [2147483649,9,-13,9223372036854775807,41858,-8,268435441,-408372071];
let v21 = delete v20[160];
let v23 = new Float64Array(v20, Float64Array, v20);
function f25() {
    const v29 = (Float64Array % --v23) == (4294967296 - 4294967296);
    if (!v29) {
        v21 *= v29;
    }
    return f25;
}
const v32 = new Uint32Array(4046);
v32.reduce(f25);
gc();
