const v1 = new WeakMap();
function f2(a3) {
    return a3;
}
Object.defineProperty(v1, "pp", { configurable: true, set: f2 });
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
    for (let v14 = 0; v14 < 25; v14++) {
        v1["p" + "p"] = v14;
    }
}
gc();
