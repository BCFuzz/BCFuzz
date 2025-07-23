const o8 = {
    toString(a1) {
        function f2() {
            return f2;
        }
        const v3 = f2.bind(f2, f2);
        function f4() {
            return v3;
        }
        function f5(a6) {
            return f2;
        }
        Object.defineProperty(v3, "toString", { get: f4, set: f5 });
        v3.toLocaleString(this, v3);
        return f4;
    },
};
o8.toString(o8);
gc();
