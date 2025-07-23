let v2 = 12;
v2++;
const v5 = ("-2077590946").constructor;
const v6 = v5.fromCharCode(v2, v5, 8, "-2077590946", v5, "undefined", v2);
function f7(a8) {
    const o9 = {
        "g": a8,
    };
    return o9;
}
const v12 = f7(f7(v6)).g;
Object.defineProperty(v12, "toJSON", { enumerable: true, value: v6 });
JSON.parse(JSON.stringify([v12]));
gc();
