const v3 = new Uint32Array(1000);
for (const v4 in v3) {
    function f5(a6, a7, a8, a9) {
        function f11(a12, a13) {
            const v14 = a12.toString(a7, 1000, a12);
            try { v14.search(0.5903056866567364); } catch (e) {}
            return arguments;
        }
        f11(f5);
        f11(arguments);
        return f11;
    }
    f5();
}
gc();
