function f0() {
    const o3 = {
        10: -2147483648,
        2147483648: 1000000.0,
    };
    return o3;
}
const v4 = f0();
function f5() {
    return f0;
}
class C6 extends f0 {
    static #b = f5;
    static {
        try {
            v4.#b = v4;
        } catch(e8) {
        }
    }
}
gc();
