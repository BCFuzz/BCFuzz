let v0 = 536870912n;
const v1 = v0--;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let v12 = 0; v12 < 100; v12++) {
    function f13() {
        return v0;
    }
    class C14 extends f13 {
    }
    function f15() {
        return v1;
    }
    function f16(a17) {
        return f15;
    }
    Object.defineProperty(C14, "toString", { enumerable: true, get: f15, set: f16 });
    for (const v18 in C14) {
        C14[v18];
    }
}
gc();
