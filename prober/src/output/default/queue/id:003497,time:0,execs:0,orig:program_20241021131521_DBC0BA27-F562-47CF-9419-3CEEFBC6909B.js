function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v3 = [536870887,268435456,-9,-15,1073741824,1,-65536,1887717570];
const v5 = new Date();
class C6 {
}
const v7 = new C6();
const v8 = [v7];
class C9 extends C6 {
}
new C9();
function f13() {
    const o17 = {
        "b": 0.0,
        "c": -2.3987554640519305e+306,
        ...v8,
        [C9]: v3,
        __proto__: v5,
        [0.0]: "replace",
    };
}
for (let v18 = 0; v18 < 100; v18++) {
    f13();
}
gc();
