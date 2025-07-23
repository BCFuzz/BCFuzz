function f10(a11, a12) {
    function F13(a15, a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        function f19() {
            const v21 = a16?.propertyIsEnumerable;
            try { new v21(arguments); } catch (e) {}
            function F23(a25, a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v29 = new F23();
            v29.e = v29;
            return a11;
        }
        f19();
    }
    new F13(f10, f10);
    const v32 = new F13();
    const v33 = v32.constructor;
    new v33();
    new F13();
    new v33(0.9466693748868897, f10);
    return 0;
}
f10(Date, f10);
f10(Date, f10());
gc();
