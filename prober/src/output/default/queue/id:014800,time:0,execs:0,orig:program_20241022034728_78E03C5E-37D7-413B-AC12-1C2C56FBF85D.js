function f0(a1, a2, a3, a4) {
    function f6(a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F8(13011n, a1);
        return 13011n;
    }
    for (let v15 = 0; v15 < 5; v15++) {
        delete arguments[65535];
    }
    return a4;
}
f0();
gc();
