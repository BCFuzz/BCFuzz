const v0 = [-2.0,-1.0,0.19795010264126411,1.2076363296656204e+308,229318.16947127413,1.3439790166549788,1000000.0,1000000.0,-166.13863760403774,Infinity];
for (const v1 of v0) {
    let v2 = -128;
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F3(v0);
    for (let v7 = 0; v7 < 100; v7++) {
        const v9 = new Map();
        const v10 = v9.values();
        class C11 {
        }
        class C12 extends C11 {
        }
        for (let v13 = 0; v13 < 5; v13++) {
            let v14 = v2++;
            v10.f = delete v6[v14--];
        }
    }
}
gc();
