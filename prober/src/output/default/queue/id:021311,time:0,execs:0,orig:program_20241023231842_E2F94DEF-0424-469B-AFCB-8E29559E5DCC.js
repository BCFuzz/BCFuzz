for (let i2 = 0, i3 = 7; i2 < i3; i3--) {
    for (let v10 = 0; v10 < 25; v10++) {
        function f11() {
            return i2;
        }
        function F13(a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v18 = new F13();
        const v19 = v18.constructor;
        const v21 = ("-13")[undefined];
        function f22(a23, a24) {
            const v25 = a24.constructor;
            v25.prototype = v25;
            const v26 = new v25();
            return v26;
        }
        f22(v21, v18);
        Object.defineProperty(v19, 0, { enumerable: true, get: f11, set: f22 });
        const t19 = this.constructor;
        const v31 = t19(-1103857354);
        function f32(a33) {
            const v34 = [this,this,this];
            for (let v35 = 0; v35 < 5; v35++) {
                function f36(a37, a38, a39, a40) {
                    v34.length;
                    return arguments;
                }
                f36(f36, a33, f32, -1103857354);
            }
            return a33;
        }
        Object.defineProperty(v31, "valueOf", { configurable: true, enumerable: true, value: f32 });
        v31.toExponential(v31);
    }
}
gc();
