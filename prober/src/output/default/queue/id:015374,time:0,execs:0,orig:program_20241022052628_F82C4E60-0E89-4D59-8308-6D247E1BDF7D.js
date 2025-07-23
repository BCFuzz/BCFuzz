const v0 = [38083,4294967297,55343,-65536,10,0,14184];
let v1 = -12n;
v1--;
function f3(a4, a5, a6, a7) {
    const v8 = a5 + v0;
    const v9 = a6++;
    v9 >>> v9;
    v1 === v8;
    return f3;
}
for (let v12 = 0; v12 < 5; v12++) {
    const v13 = f3();
    const v14 = v13();
    const v15 = v14.bind(v14, v14);
    v15.apply(v15, v0, v13, v14, v15);
}
gc();
