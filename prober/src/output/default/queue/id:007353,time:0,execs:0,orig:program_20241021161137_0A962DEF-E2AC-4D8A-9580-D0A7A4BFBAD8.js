function f0() {
    return f0;
}
const v1 = f0();
class C2 extends f0 {
    static {
        const v6 = new Int16Array(1880);
        for (const v7 in v6) {
        }
        const v9 = v1 >>> 9223372036854775807;
        v9 ** v9;
    }
}
gc();
