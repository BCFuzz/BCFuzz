const v3 = ("4096").toLocaleLowerCase().padEnd(8);
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        const v12 = ([4294967295,-1,-2,127,-1024,-1073741824,268435440]).__proto__;
        for (let v13 = 0; v13 < 25; v13++) {
            const v15 = "p" + v13;
            v3 in v12;
            v12[v15] = v13;
        }
        i7--;
    })()) {
}
for (let i22 = -3, i23 = 10; i22 < i23; i23--) {
}
gc();
