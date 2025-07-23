for (let v0 = 0; v0 < 10; v0++) {
    class C3 extends Uint8ClampedArray {
    }
    const v4 = new C3(4294967296);
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        v4[3655777530] **= 5.0;
    }
    new F5();
}
gc();
