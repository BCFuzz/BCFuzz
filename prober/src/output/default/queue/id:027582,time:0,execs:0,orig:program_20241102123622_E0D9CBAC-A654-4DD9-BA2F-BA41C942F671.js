function f0(a1, a2, a3, a4) {
    const v5 = a1.caller;
    for (let v6 = 0; v6 < 5; v6++) {
        const v7 = a1.__proto__;
        function f8(a9) {
            return f0;
        }
        Object.defineProperty(v7, "e", { configurable: true, enumerable: true, set: f8 });
    }
    return v5;
}
for (let v10 = 0; v10 < 25; v10++) {
    f0(f0);
}
for (let i14 = -3, i15 = 10; i14 < i15; i15--) {
}
gc();
