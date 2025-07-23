class C0 {
    o(a2) {
        const o3 = {
        };
        for (let v4 = 0; v4 < 5; v4++) {
            const v5 = v4++;
            const t6 = o3.__proto__;
            t6[536870912] = v5;
        }
        const v9 = new Uint8Array(3129);
        for (const v10 in v9) {
            function f11() {
                v9[arguments];
                return arguments;
            }
            f11()[1910];
        }
    }
}
const v16 = new C0();
v16.o(v16, v16, v16, v16);
gc();
