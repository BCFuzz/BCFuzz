const v2 = new Uint8Array(3129);
for (const v3 in v2) {
    function f4() {
        function F5(a7, a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F5();
        return arguments;
    }
    f4();
}
gc();
