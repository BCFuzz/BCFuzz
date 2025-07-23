function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v5 = new Uint8ClampedArray(2502);
for (const v6 in v5) {
    const o7 = {
        "a": v6,
        "e": v5,
        [C1]: 2502,
        [v6]: v2,
    };
}
gc();
