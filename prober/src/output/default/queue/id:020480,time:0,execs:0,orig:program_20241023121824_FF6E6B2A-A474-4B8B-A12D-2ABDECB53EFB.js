function f0(a1, a2) {
    typeof a1 === "symbol";
    const o6 = {
        __proto__: a1,
    };
    return "symbol";
}
class C7 {
}
const v8 = new C7();
f0(v8);
for (let v10 = 0; v10 < 10; v10++) {
    f0(v10, C7);
}
gc();
