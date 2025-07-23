function f1() {
    ("valueOf").slice(1024).concat(-9007199254740991);
    for (let i7 = 0; i7 < 21768; i7++) {
    }
    const o14 = {
        [Infinity]: f1,
    };
    return o14;
}
const t9 = f1().Infinity;
t9();
for (let [i30, i31] = (() => {
        for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
        }
        return [0, 10];
    })();
    i30 < i31;
    i31--) {
}
for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
}
gc();
