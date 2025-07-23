for (let v0 = 0; v0 < 25; v0++) {
    const v3 = "p" + [v0,v0,v0];
    for (let v4 = 0; v4 < 5; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            class C7 {
            }
            const v8 = new C7();
            v8.toLocaleString();
            for (const v11 of v3.link()) {
                v11 in v8;
            }
        }
        new F5();
    }
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    }
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
    for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
    }
}
gc();
