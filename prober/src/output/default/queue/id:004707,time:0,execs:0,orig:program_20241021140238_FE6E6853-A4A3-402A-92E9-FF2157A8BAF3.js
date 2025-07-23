const v3 = [2087322165,-1439285056];
const v4 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
const v5 = [4096];
function f6(a7, a8) {
    const v11 = new Int16Array(8);
    Object.defineProperty(v5, 4, { configurable: true, value: v11 });
    function F12() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F12();
    a8.at(a8);
    const o21 = {
        [a8](a17, a18, a19, a20) {
            v14.toString = f6;
        },
        [a7]: "getFloat32",
        __proto__: v4,
        ["m"]: v3,
    };
    return o21;
}
const v22 = f6("pqwpR", v5);
for (let i = 0; i < 250; i++) {
    f6("m", v22);
}
gc();
