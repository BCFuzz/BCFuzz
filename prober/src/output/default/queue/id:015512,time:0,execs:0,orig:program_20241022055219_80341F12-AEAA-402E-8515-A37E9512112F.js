class C0 {
}
const v1 = new C0();
function f2() {
    function f3(a4, a5) {
        const v8 = new Int32Array(C0);
        for (let v9 = 0; v9 < 100; v9++) {
            const o16 = {
                toString(a11, a12) {
                    const v14 = this.__proto__.toLocaleString();
                    if (!(v14 >= "10817")) {
                        this[954] = v8;
                    }
                    return v14;
                },
            };
            o16.toString("10817");
        }
    }
    return f3;
}
function f18(a19) {
    return f18;
}
Object.defineProperty(v1, Symbol.toPrimitive, { configurable: true, get: f2, set: f18 });
class C22 extends C0 {
    [v1];
}
gc();
