function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        for (let v2 = 0; v2 < 5; v2++) {
        }
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = this.propertyIsEnumerable;
            try { v9(); } catch (e) {}
        }
        const v11 = new F4(v1, "undefined", F4);
        v11.undefined = v11;
        "undefined" in v11;
    }
    return f0;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f0);
gc();
