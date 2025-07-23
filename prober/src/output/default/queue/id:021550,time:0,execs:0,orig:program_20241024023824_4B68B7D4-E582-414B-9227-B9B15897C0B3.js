function f0(a1, a2) {
    a1.constructor;
    typeof a1 === "symbol";
    const o7 = {
        __proto__: a1,
    };
    return o7;
}
class C8 {
}
const v9 = new C8();
f0(v9);
for (let v11 = 0; v11 < 10; v11++) {
    f0(v11);
}
gc();
