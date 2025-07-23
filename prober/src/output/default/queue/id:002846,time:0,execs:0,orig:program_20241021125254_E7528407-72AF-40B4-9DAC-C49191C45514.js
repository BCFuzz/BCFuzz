function f2(a3, a4, a5, a6) {
    const o19 = {
        toString(a8, a9) {
            this.__proto__;
            const v11 = a9 || "8";
            const v12 = v11.small;
            try { new v12(); } catch (e) {}
            v11 == v11;
            let v17 = -26944 + ("number" ^ -26944);
            v17--;
        },
    };
    o19.toString("number", a5, a3);
    return o19;
}
f2();
for (let i = 0; i < 5; i++) {
    -f2();
}
gc();
