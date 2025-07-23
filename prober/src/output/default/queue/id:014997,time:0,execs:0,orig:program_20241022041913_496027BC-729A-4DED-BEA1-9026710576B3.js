const v2 = new BigInt64Array(512);
for (const v3 in v2) {
    for (let i = 0; i < 5; i++) {
    }
}
for (let v4 = 0; v4 < 10; v4++) {
    function f5() {
        return 512;
    }
    BigInt64Array.toString = f5;
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
    class C16 extends BigInt64Array {
        static {
            this.toString(this, this, this);
        }
    }
}
gc();
