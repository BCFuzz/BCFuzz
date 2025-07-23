class C3 {
    ["10"] = "10";
    set e(a5) {
        let v6 = 10;
        for (; v6--;) {
            super[super[v6]] = "10";
        }
        C3.length = 1;
        this[C3];
        C3?.[10];
        super.b = C3;
    }
    static #f;
}
const v12 = new C3();
new C3();
const v14 = new C3();
C3[v14] = v14;
const o15 = {
};
o15.c = "10";
const o16 = {
};
o16.c = "10";
o16.e = v14;
const o17 = {
};
o17.c = "10";
o17.e = v14;
o17.b = v12;
const o18 = {
};
o18.c = "10";
o18.e = v14;
o18.b = 5;
["10"];
const v20 = [v12,"10",5,"10",v12];
[5,v20];
function f22() {
    const o23 = {
        "construct": f22,
        "set": f22,
    };
    new Proxy(v20, o23);
    return 5;
}
function f29() {
    const v33 = Math.random();
    const v34 = ~-4294967295;
    v34 && -4294967295;
    const o37 = {
        ..."2147483649",
        [-5.0]: -5.0,
        "f": 5,
        [v33]: Math,
        6: f22,
        2147483647: f29,
        "d": -5.0,
    };
    const o39 = {
    };
    new Proxy(f29, o39);
    new Uint8Array(4096);
    new Float32Array(187);
    new BigUint64Array(706);
    async function* f51(a52, a53, a54) {
    }
    for (let v55 = 0; v55 < 100; v55++) {
        f51(v55, v33, v55);
        delete o37[2];
        Symbol.unscopables;
    }
    return v34;
}
for (let v60 = 0; v60 < 10; v60++) {
    f29();
}
gc();
