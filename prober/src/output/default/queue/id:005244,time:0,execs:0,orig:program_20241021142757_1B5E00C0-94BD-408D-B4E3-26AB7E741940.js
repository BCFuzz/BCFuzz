const o0 = {
};
function f1() {
    return o0;
}
function f2(a3) {
    for (let v4 = 0; v4 < 250; v4++) {
        v4--;
        v4++;
        for (let v7 = 0; v7 < 5; v7++) {
        }
    }
}
Object.defineProperty(o0, "a", { configurable: true, get: f1, set: f2 });
o0.a = o0;
gc();
