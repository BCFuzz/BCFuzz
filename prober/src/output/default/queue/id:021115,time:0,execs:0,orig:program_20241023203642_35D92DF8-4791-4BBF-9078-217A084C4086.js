const v1 = [-1,-1,-1];
const o10 = {
    toString(a3) {
        function f4() {
            return -1;
        }
        const v5 = f4.bind(f4, f4, a3, -1, v1);
        function f6() {
            return v5;
        }
        function f7(a8) {
            return a8;
        }
        Object.defineProperty(v5, "toString", { get: f6, set: f7 });
        v5.toLocaleString(f4, this);
        return f4;
    },
};
o10.toString();
gc();
