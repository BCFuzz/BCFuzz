for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7) {
            -a7;
            return a7--;
        }
        f6(6n);
        const v11 = new Uint8Array(3115);
        v11.map(noInline);
    }
    new F1();
}
gc();
