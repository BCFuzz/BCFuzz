class C0 {
    constructor(a2, a3) {
        const v5 = ArrayBuffer.bind();
        try { v5.call(); } catch (e) {}
    }
}
new C0();
const v8 = new C0();
const v9 = v8.constructor;
new v9(v8, v9, v8, v9);
const t10 = v8.constructor;
const v12 = new t10();
const t12 = v12.constructor;
new t12();
const v15 = new C0();
const t15 = v15.constructor;
const v17 = new t15();
const t17 = v17.constructor;
new t17();
const v20 = new C0();
const t20 = v20.constructor;
new t20();
const v25 = v8["valueOf"]().__defineGetter__;
v25.e = v25;
gc();
