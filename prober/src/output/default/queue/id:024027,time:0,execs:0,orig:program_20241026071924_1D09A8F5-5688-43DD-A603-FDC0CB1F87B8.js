function f1() {
    return -4.0;
}
class C2 {
    static {
        this.constructor = f1;
        const v4 = this.constructor();
        v4.toString();
        if (v4) {
        }
        for (let v6 = 0; v6 < 250; v6++) {
        }
    }
}
gc();
