let v0 = 12;
const v2 = ("number").constructor;
function f3(a4) {
    return v0--;
}
v2.valueOf = f3;
const v6 = v2.fromCharCode(v0, v2);
function f7(a8) {
    const o9 = {
        [a8]: v6,
        "g": a8,
    };
    return o9;
}
JSON.parse(JSON.stringify([f7(f7("number")).g]));
gc();
