function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        const v6 = a1.__proto__;
        function f7(a8) {
            return v6;
        }
        Object.defineProperty(v6, "e", { configurable: true, enumerable: true, set: f7 });
    }
    return a3;
}
for (let v9 = 0; v9 < 50; v9++) {
    f0(f0);
}
for (let [i15, i16] = (() => {
        function f13() {
            return 10;
        }
        f13.caller;
        return [-3, 10];
    })();
    i15 < i16;
    i16--) {
}
gc();
