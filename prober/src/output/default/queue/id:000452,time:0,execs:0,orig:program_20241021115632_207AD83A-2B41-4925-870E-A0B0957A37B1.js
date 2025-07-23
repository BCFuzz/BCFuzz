class C1 {
}
class C2 extends C1 {
    constructor(a4, a5) {
        super();
        super[this] = 1073741825;
    }
}
new C2();
for (let v7 = 0; v7 < 10; v7++) {
    const o10 = {
        "maxByteLength": 65536,
    };
    const v12 = new ArrayBuffer(4, o10);
    new BigInt64Array(v12);
}
gc();
