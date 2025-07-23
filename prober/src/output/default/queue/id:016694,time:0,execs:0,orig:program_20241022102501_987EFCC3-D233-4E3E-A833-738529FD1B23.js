for (let v0 = 0; v0 < 100; v0++) {
    const v1 = [v0];
    function f2() {
        function f3(a4, a5) {
            return f3;
        }
        return f3;
    }
    function f6(a7) {
        return a7;
    }
    Object.defineProperty(v1, "toString", { get: f2, set: f6 });
    const v8 = [-14,2147483649,-65536,2131113613,65535,14,536870912,97932412,268435441,15238];
    const v9 = [-8,-603008847,-4294967297,-256,6,-4294967296,-36856,34718,338837676];
    function f10(a11, a12) {
        a11.toString();
        const o14 = {
            __proto__: v9,
        };
        return o14;
    }
    f10(v1);
    const v17 = f10(f10(v8));
    v17[2] = v17;
    v17.flatMap(f10);
}
gc();
