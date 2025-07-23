function F0() {
    if (!new.target) { throw 'must be called with new'; }
    ("").fontsize("", "", "", this, this);
}
new F0();
gc();
