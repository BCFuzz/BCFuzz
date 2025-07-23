for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function f10() {
}
class C11 extends f10 {
    #o() {
        const v14 = arguments.valueOf(arguments, this, arguments, arguments, this);
        v14.constructor.freeze(v14);
    }
    valueOf() {
        this.#o();
    }
}
let v19 = new C11();
v19 %= v19;
gc();
