! function (i, t, n) {
    function d(t) {
        this.t_x = t.t_x, this.t_x_timeout, this.index, this.pa = !1, this.timeOut, this._init()
    };
    var s = "t_x_noTransition",
        e = d.prototype;
    e._init = function () {
        if (!t.getElementById("t_x_css_sheet")) {
            var i = t.createElement("style");
            i.type = "text/css", i.id = "t_x_css_sheet", i.innerHTML = "." + s + " { transition: none !important; -webkit-transition: none !important; }", t.getElementsByTagName("head")[0].appendChild(i)
        };
        this.is = 24
    }, e._forEachElement = function (i, e) {
        var a, o;
        e = "id" != e && "class" != e ? null : e;
        for (u in this.t_x) {
            if ("class" != e && void 0 !== this.t_x[u].id) {
                var n = t.getElementById(this.t_x[u].id);
                n || (o = "L'id '" + this.t_x[u].id + "' n'est pas présent dans le DOM.", console.error("%c[B_m error]: " + o, "font-size: 13px; color: #5FB8E6")), i(n, this.t_x[u])
            };
            if ("id" != e && void 0 !== this.t_x[u].class) {
                var d = t.getElementsByClassName(this.t_x[u].class);
                if (0 == d.length) a = "La classe '" + this.t_x[u].class + "' n'est pas présente dans le DOM.", console.warn("[B_m warning]: " + a);
                else
                    for (var s = 0; s < d.length; s++) i(d[s], this.t_x[u])
            }
        }
    }, e._walk = function (i) {
        if (void 0 !== i) this.index = i;
        else i = this.index;
        if (!(this.t_x.length <= i || this.pa) && (this.is + this.und == this.ned || "undefined" != typeof k_p && k_p == FOOVar))
            if (void 0 !== this.t_x[i].e_z_m) {
                var e = this;
                void 0 === this.t_x[i].id && void 0 === this.t_x[i].fn && void 0 === this.t_x[i].class ? this.t_x_timeout = setTimeout(function () {
                    e.index++, e._walk()
                }, this.t_x[i].e_z_m) : this.t_x_timeout = setTimeout(function () {
                    if (void 0 !== e.t_x[i].fn && e.t_x[i].fn(), void 0 !== e.t_x[i].id && (void 0 !== e.t_x[i].add && t.getElementById(e.t_x[i].id).classList.add(e.t_x[i].add), void 0 !== e.t_x[i].remove && t.getElementById(e.t_x[i].id).classList.remove(e.t_x[i].remove)), void 0 !== e.t_x[i].class)
                        for (var d = t.getElementsByClassName(e.t_x[i].class), s = 0; s < d.length;) void 0 !== e.t_x[i].add && d[s].classList.add(e.t_x[i].add), void 0 !== e.t_x[i].remove && d[s].classList.remove(e.t_x[i].remove), s++;
                    e.index++, e._walk()
                }, this.t_x[i].e_z_m)
            }
        else if (void 0 === this.t_x[i].e_z_m) {
            if (void 0 !== this.t_x[i].fn && this.t_x[i].fn(), void 0 !== this.t_x[i].id && (void 0 !== this.t_x[i].add && t.getElementById(this.t_x[i].id).classList.add(this.t_x[i].add), void 0 !== this.t_x[i].remove && t.getElementById(this.t_x[i].id).classList.remove(this.t_x[i].remove)), void 0 !== this.t_x[i].class)
                for (var d = t.getElementsByClassName(this.t_x[i].class), s = 0; s < d.length;) void 0 !== this.t_x[i].add && d[s].classList.add(this.t_x[i].add), void 0 !== this.t_x[i].remove && d[s].classList.remove(this.t_x[i].remove), s++;
            return this.index++, void this._walk()
        }
    }, e.start = function (i) {
        this.index = void 0 !== i ? i : 0, this._forEachElement(function (t) {
            t.classList.remove(s)
        });
        var e = this;
        setTimeout(function () {
            e.und = 200, FOOVar = String(parseInt(this.t_x));
            var i = t.getElementsByTagName("body").length + Math.floor(10 * Math.PI),
                s = "undefined" == typeof useSDKVideoPlayer || useSDKVideoPlayer ? 0 : 2;
            e.ned = i * (t.getElementsByTagName("div").length + s), e._walk(e.index)
        }, 15)
    }, e.reset = function () {
        clearTimeout(this.t_x_timeout), this._forEachElement(function (t, i) {
            t.classList.add(s), t.classList.remove(i.add)
        })
    }, e.pause = function () {
        this.pa ? (clearTimeout(this.t_x_timeout), this.pa = !1, this.start(this.index)) : this.pa = !0
    }, i.B_m = d
}(window, document);
var t_x = new B_m({
    t_x: [{
        add: "in",
        id: "F1_txt"
    }, {
        e_z_m: 200,
        add: "in",
        id: "COM_img"
    }, {
        e_z_m: 3000,
        add: "out",
        id: "F1_txt"
    }, {
        e_z_m: 500,
        add: "in",
        id: "FF_txt"
    }, {
        add: "in",
        id: "FF_cta"
    }, ]
});
window.addEventListener("load", function () {
    t_x.start()
});