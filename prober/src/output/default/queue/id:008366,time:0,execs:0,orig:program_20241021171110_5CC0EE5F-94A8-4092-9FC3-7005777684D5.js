function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
for (let v6 = 0; v6 < 125; v6++) {
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(this, "f", { writable: true, enumerable: true, value: v5 });
        this.b = F7;
        this.f = -9007199254740992;
        this.b = -9007199254740992;
    }
    new F11();
}
gc();
