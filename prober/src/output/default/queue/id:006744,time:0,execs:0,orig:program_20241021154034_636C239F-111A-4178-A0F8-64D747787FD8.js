let v1 = [1024,-1817,-3,127,64703,-1967305570,-30680,512];
for (let v2 = 0; v2 < 32; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        ({"g":v1,} = this);
        Object.defineProperty(this, "h", { writable: true, configurable: true, value: 20 });
        function f5(a6) {
            return v1;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.h = F3;
    }
    new F3();
    const v8 = new F3();
    const t14 = v8.h;
    new t14();
    new F3();
}
gc();
