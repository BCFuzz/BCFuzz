function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            this.isPrototypeOf();
        }
        const v8 = new F5();
        this.__proto__ = v8;
    }
}
const v9 = new F0();
const t12 = v9.constructor;
new t12();
const v14 = new Uint8Array(3129);
for (const v15 in v14) {
}
gc();
