(window.webpackJsonp = window.webpackJsonp || []).push([
    [254], {
        1634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "WidgetBookingSettingsT4V2", (function() {
                return c
            }));
            var o = n(6),
                d = n(2),
                r = n.n(d),
                w = n(438);
            class c extends w.b {}
            var y = o.componentFactory.create({
                name: "BookingT4V2",
                props: {
                    widgetId: r.a.ofType().optional,
                    widget: r.a.ofType().required,
                    widgetKey: r.a.ofType().optional,
                    widgetIndex: r.a.ofType().default(0),
                    settings: r.a.ofType().required,
                    isEnabledAnimation: r.a.ofType().default(!1)
                },
                computed: {
                    DynamicComponent: () => () => ({
                        component: n.e(68).then(n.bind(null, 1494))
                    })
                },
                render(e) {
                    return e(this.DynamicComponent, {
                        attrs: {
                            id: this.widgetId,
                            "data-widget-key": this.widgetKey
                        },
                        props: {
                            widget: this.widget,
                            widgetIndex: this.widgetIndex,
                            settings: this.settings,
                            isEnabledAnimation: this.isEnabledAnimation
                        }
                    })
                }
            });
            t.default = y
        }
    }
]);