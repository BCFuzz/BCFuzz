for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 5; v10++) {
    function f11(a12, a13, a14, a15) {
        for (let v16 = 0; v16 < 5; v16++) {
            const v17 = a12.__proto__;
            function f18(a19) {
                return v17;
            }
            Object.defineProperty(v17, "e", { configurable: true, enumerable: true, set: f18 });
        }
        return a14;
    }
    for (let v20 = 0; v20 < 10; v20++) {
        f11(f11);
    }
    function f22() {
        return f22;
    }
    function f23(a24, a25) {
        return a24;
    }
    for (let v26 = 0; v26 < 5; v26++) {
        f23 instanceof f22;
    }
}
gc();
