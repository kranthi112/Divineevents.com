(window.webpackJsonp = window.webpackJsonp || []).push([
    [213], {
        1596: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(10),
                o = r(302),
                l = r(3),
                c = r(0),
                d = r(8),
                m = r(62),
                h = r(311),
                y = c.ec.Page,
                f = function() {
                    var e = Object(n.a)((function*(e, t, r, n) {
                        try {
                            var o = new c.ob({
                                id: r,
                                siteId: t
                            });
                            return r || (o.slug = null, o.pageType = c.fc.Home), yield e.get(o)
                        } catch (e) {
                            throw e
                        }
                    }));
                    return function(t, r, n, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = Object(n.a)((function*(e, t, r) {
                        try {
                            var {
                                pageId: n
                            } = (null == t ? void 0 : t.homePageSettings) || {}, o = function() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new c.U,
                                    {
                                        homePageSettings: r,
                                        enabledApps: n = {}
                                    } = t,
                                    o = (null == r ? void 0 : r.pageTemplateType) || y;
                                return o !== c.ec.BlogPageList || null !== (e = n[c.a.Blog]) && void 0 !== e && e.isEnabled ? o : y
                            }(t) || y;
                            return {
                                page: yield f(e, r, n, o), pageTemplateType: o
                            }
                        } catch (e) {
                            throw e
                        }
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }();
            class v {
                constructor() {
                    this.site = new c.U, this.pageTemplateType = c.ec.Page
                }
            }
            t.default = o.a.extend({
                name: "Home",
                data: () => new v,
                head() {
                    return {
                        bodyAttrs: {
                            class: (e = this.pageTemplateType, e === c.ec.BlogPageList ? ["kmb-blog-template-default"] : ["kmb-general-template-default"])
                        }
                    };
                    var e
                },
                asyncData: e => Object(n.a)((function*() {
                    var {
                        $api: t,
                        $site: r,
                        $cookies: n,
                        $lcz: o,
                        store: l,
                        error: c
                    } = e;
                    try {
                        var h = l.getters.getSite(n, r) || {},
                            y = Object(m.a)({
                                store: l,
                                $cookies: n
                            }, null == r ? void 0 : r.id),
                            {
                                page: f,
                                pageTemplateType: v
                            } = yield T(t, h, y);
                        return l.dispatch("setPage", f), {
                            site: h,
                            page: f,
                            pageTemplateType: v
                        }
                    } catch (e) {
                        return null === d.a || void 0 === d.a || d.a.errorLog({
                            error_name: e.name,
                            message: e.message,
                            stack: e.stack,
                            source_dir: "pages/",
                            source_file: "index.tsx"
                        }), c({
                            statusCode: 404,
                            message: null == o ? void 0 : o.t("messages.pageNotFound")
                        })
                    }
                }))(),
                beforeDestroy() {
                    this.page = null
                },
                render(e) {
                    if (!Object(l.W)(this.page)) return e(h.a, {
                        attrs: {
                            site: this.site,
                            page: this.page
                        }
                    })
                }
            })
        },
        311: function(e, t, r) {
            "use strict";
            var n = r(6),
                o = r(2),
                l = r.n(o),
                c = r(340),
                d = r.n(c),
                m = r(5),
                h = r.n(m),
                y = r(76),
                f = r(16),
                T = r(12),
                v = r(8),
                w = r(337);
            class k {
                constructor() {
                    this.timer = null
                }
            }
            var O = n.componentFactory.mixin(f.D).create({
                name: "WebSitePageTemplate",
                props: {
                    site: l.a.ofType().optional,
                    page: l.a.ofType().required
                },
                data: () => new k,
                head() {
                    var {
                        title: title,
                        meta: meta
                    } = Object(T.J)(this.page);
                    return {
                        title: title,
                        meta: meta
                    }
                },
                mounted() {
                    this.onInitAOS()
                },
                beforeDestroy() {
                    clearTimeout(this.timer)
                },
                methods: {
                    onInitAOS() {
                        try {
                            this.isEnabledAnimation && d.a && (this.timer = setTimeout((() => {
                                d.a.init({
                                    easing: "ease-in-cubic",
                                    duration: 600
                                })
                            }), 1e3), this.$nuxt.$once("triggerScroll", (() => {
                                this.$nextTick((() => {
                                    d.a.refresh()
                                }))
                            })))
                        } catch (e) {
                            null === v.a || void 0 === v.a || v.a.errorLog({
                                error_name: e.name,
                                message: e.message,
                                stack: e.stack,
                                additional_info: "Error importing AOS",
                                source_dir: "components/Builder/TemplatesWebSitePageTemplate/",
                                source_file: "index.tsx"
                            })
                        }
                    }
                },
                render(e) {
                    if (this.page) return e("div", {
                        class: h()(Object(T.j)(this.page)),
                        attrs: {
                            "data-page-template-type": this.page.pageTemplateType
                        }
                    }, [Object(T.K)(e, w.a, this.page, this.currentSite, y.a)]);
                    null === v.a || void 0 === v.a || v.a.warnLog({
                        message: "Page is unavailable!",
                        source_dir: "components/Builder/Templates/WebSitePageCategoryTemplate/",
                        source_file: "index.tsx"
                    })
                }
            });
            t.a = O
        }
    }
]);