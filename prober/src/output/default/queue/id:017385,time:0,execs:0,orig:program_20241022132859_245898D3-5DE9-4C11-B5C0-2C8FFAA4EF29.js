function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            class C15 {
            }
            const v16 = C15.bind(i9, F0);
            v16.prototype = "2E9W";
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            Reflect.construct(F17, [a3,a3,a3,a3], v16);
            for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
            }
        })()) {
    }
}
new F0();
gc();
