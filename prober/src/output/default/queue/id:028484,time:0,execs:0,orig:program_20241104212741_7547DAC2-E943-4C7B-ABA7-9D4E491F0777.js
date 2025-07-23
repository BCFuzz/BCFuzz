function f0() {
    let v1 = -4294967295;
    const v2 = v1--;
    (v2 - v2).toString();
    return f0;
}
const v7 = f0();
const v8 = new BigUint64Array(586);
for (const v9 of v8) {
    function f10() {
        v7();
        return arguments;
    }
    for (let v13 = 0; v13 < 5; v13++) {
    }
    f10();
}
for (let i17 = 2, i18 = 52435; i18; i18--) {
}
gc();
