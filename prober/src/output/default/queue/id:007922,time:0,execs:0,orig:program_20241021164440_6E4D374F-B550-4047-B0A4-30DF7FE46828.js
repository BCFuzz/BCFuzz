function f0() {
    return f0;
}
class C1 extends f0 {
    static {
        const v3 = this.constructor();
        v3.toString();
        if (v3) {
        }
        for (let v5 = 0; v5 < 250; v5++) {
        }
    }
}
for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
}
gc();
