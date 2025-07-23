let v1 = new WeakSet();
function f2(a3) {
    return a3;
}
const v5 = [f2()];
for (let i7 = 0; i7 < 21768; i7++) {
    [v1] = v5;
}
gc();
