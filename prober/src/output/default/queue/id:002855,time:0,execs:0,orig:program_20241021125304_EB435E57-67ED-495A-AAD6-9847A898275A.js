function f1(a2, a3, a4, a5) {
    const o17 = {
        toString(a7, a8) {
            this.__proto__.toLocaleString().constructor.constructor();
            const v13 = a8 && "8";
            const v14 = v13?.small;
            try { new v14(); } catch (e) {}
            v13 == v13;
            return "8";
        },
    };
    o17.toString(a3, a4, f1, f1, f1);
    return o17;
}
let v19 = f1();
for (let i = 0; i < 5; i++) {
    v19 *= f1(f1, "8", "8", v19);
}
gc();
