function f0() {
}
class C1 extends f0 {
    #o() {
        super[this] = this;
    }
    valueOf() {
        this.#o();
    }
}
let v5 = new C1();
let v6 = new C1();
const v7 = new C1();
for (let v8 = 0; v8 < 5; v8++) {
    v5.g &= v8;
}
v6 %= v6;
v5++;
for (let i13 = 70, i14 = 10 + 10; i14--, i14;) {
}
const v22 = new Int8Array(255);
for (const v23 in v22) {
    v7.valueOf();
}
gc();
