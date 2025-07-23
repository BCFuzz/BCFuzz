class C1 {
    constructor(a3, a4) {
        this.__proto__;
    }
}
new C1();
class C7 {
}
class C8 extends C7 {
}
const v9 = new C8();
for (let v10 = 0; v10 < 500; v10++) {
    let v11;
    try { v11 = v10(); } catch (e) {}
    v11 = v9;
    const v12 = v10++;
    const v13 = new Int8Array(v9, v12);
    const v15 = new Int32Array(v13, Int32Array, Int32Array);
    v15 >= v13;
    function f17(a18, a19, a20) {
        return v12;
    }
    f17();
}
gc();
