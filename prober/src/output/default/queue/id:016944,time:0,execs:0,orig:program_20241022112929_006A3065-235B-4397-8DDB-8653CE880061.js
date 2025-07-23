for (let v0 = 0; v0 < 100; v0++) {
    function f1() {
        const o9 = {
            n(a3) {
                const v4 = [-65536,6,65536,1,10000,-26723,428625435,529679226,-13];
                const v5 = [-12,-10,536870912,-692699150,9223372036854775807];
                let v6;
                try { v6 = v5.flatMap(a3, f1); } catch (e) {}
                v4["slice"]();
                return v6;
            },
        };
        o9.n();
    }
    f1();
}
gc();
