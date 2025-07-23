function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = this;
    this.b = 4294967296n;
}
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
const v16 = new Int32Array(681);
function f17(a18, a19, a20, a21) {
    function f23() {
        const v24 = new F1();
        delete v24[8];
        return a18;
    }
    Object.defineProperty(arguments, "valueOf", { configurable: true, value: f23 });
    return arguments;
}
v16.map(f17);
gc();
