class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 50; v4++) {
            let v5 = typeof a2;
            --v5;
            try {
                super.setSeconds();
            } catch(e9) {
            }
            v5 === "function";
        }
    }
}
const v11 = new C0();
const v12 = new C0(v11, C0);
const t15 = v12.constructor;
new t15();
gc();
