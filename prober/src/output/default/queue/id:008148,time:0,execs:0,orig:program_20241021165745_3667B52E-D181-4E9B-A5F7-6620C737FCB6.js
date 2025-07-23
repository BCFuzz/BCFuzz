function f0() {
    return f0;
}
const v1 = f0();
class C2 extends f0 {
    static {
        new this();
        const v7 = new Int16Array(1880);
        for (const v8 in v7) {
        }
        const v10 = v1 >>> 9223372036854775807;
        const v11 = v10 ** v10;
        v11 ^ v11;
    }
}
gc();
