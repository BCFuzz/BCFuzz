function f0(a1, a2, a3, a4) {
    a1.caller = a1;
    for (let v5 = 0; v5 < 5; v5++) {
        Object.defineProperty(a1.__proto__, "e", { configurable: true, enumerable: true, set: a3 });
    }
    return a2;
}
for (let v7 = 0; v7 < 50; v7++) {
    f0(f0);
}
gc();
