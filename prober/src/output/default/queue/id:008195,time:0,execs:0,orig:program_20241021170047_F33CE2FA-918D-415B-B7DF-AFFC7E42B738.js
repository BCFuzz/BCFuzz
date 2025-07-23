function f0() {
    return f0;
}
const v1 = f0();
class C2 extends f0 {
    static {
        const v6 = new Int16Array(1880);
        for (const v7 in v6) {
            try { C2.strike(v7, v7, v7, v7); } catch (e) {}
        }
        const v10 = v1 >>> 9223372036854775807;
        v10 ** v10;
    }
}
gc();
