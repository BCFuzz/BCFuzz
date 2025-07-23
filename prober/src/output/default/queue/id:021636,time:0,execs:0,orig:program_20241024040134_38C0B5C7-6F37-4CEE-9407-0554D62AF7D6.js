function f0() {
    const o1 = {
    };
    let v2 = 4294967297;
    let v3 = `
        ({"byteOffset":v3,"length":v2,} = o1);
        /\u{12345}/myvis;
    `;
    eval(v3);
    return f0;
}
f0();
new f0();
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
