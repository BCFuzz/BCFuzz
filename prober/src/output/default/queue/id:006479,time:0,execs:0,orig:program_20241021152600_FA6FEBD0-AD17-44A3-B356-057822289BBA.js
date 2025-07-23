function f0() {
    Object.defineProperty(ArrayBuffer, f0, { configurable: true, get: f0 });
    const v3 = ("round").__proto__;
    ArrayBuffer.isView();
    const o5 = {
        ...v3,
    };
}
f0();
class C7 extends f0 {
    constructor(a9, a10, a11, a12) {
        super();
        for (let v13 = 0; v13 < 10; v13++) {
            f0();
        }
    }
}
new C7();
gc();
