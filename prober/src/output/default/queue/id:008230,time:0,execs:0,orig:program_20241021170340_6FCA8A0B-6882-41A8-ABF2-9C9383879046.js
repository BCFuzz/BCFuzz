class C0 {
}
class C1 extends C0 {
    static {
        const v5 = new BigInt64Array(256);
        for (const v6 in v5) {
            super[v6];
        }
    }
}
gc();
