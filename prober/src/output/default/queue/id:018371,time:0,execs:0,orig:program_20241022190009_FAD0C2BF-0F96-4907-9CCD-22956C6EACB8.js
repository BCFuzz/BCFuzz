function f0() {
}
function f1() {
    return f0;
}
function f5(a6) {
    const o12 = {
        ...a6,
        "b": "valueOf",
        toString(a8, a9) {
            delete a6?.length & a6;
            const t10 = "valueOf";
            t10.length %= a8;
            return "symbol";
        },
        __proto__: "symbol",
        "g": f0,
    };
    function f13(a14) {
        return o12;
    }
    class C15 extends f13 {
        #f;
    }
    return o12;
}
f5("valueOf");
f5("o");
const v18 = f5();
const o19 = {
};
o19.g = f5;
const o20 = {
};
o20.g = f5;
o20.h = "o";
const o21 = {
};
o21.g = f5;
o21.h = "o";
o21.a = v18;
const o22 = {
};
o22.g = f5;
o22.h = "o";
o22.b = f1;
const v23 = [];
[];
[];
const v27 = Math.ceil;
const v28 = v27.bind();
v28.length = v28;
Math.floor();
const v33 = v27 & 4.0;
const v34 = Math.cos();
const v35 = v33 >> v33;
("symbol")["toUpperCase"]();
try { o20["replaceAll"](v34, 4.0, v18, v23); } catch (e) {}
4.0 + "valueOf";
v35 & v35;
v35 || v27;
const v43 = v28.bind();
v43.length = v43;
gc();
