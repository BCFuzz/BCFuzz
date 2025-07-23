class C0 {
}
const v1 = new C0();
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            let v7 = this;
            const v10 = `
                function f11() {
                    if (C6) {
                    } else {
                        v7 <<= v1;
                    }
                    return C6;
                }
            `;
            const v12 = v10.split(a8);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
