let v0 = 12;
const v2 = ("number").constructor;
function f3(a4) {
    let v5 = v0--;
    v5++;
    return v5;
}
v2.valueOf = f3;
const v7 = v2.fromCharCode(v0, v2);
function f8(a9) {
    const o10 = {
        [a9]: v7,
        "g": a9,
    };
    return o10;
}
JSON.parse(JSON.stringify([f8(f8()).g]));
gc();
