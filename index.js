(() => {
    "use strict";
    var v = {};
    v.d = (l, e) => {
        for (var t in e) v.o(e, t) && !v.o(l, t) && Object.defineProperty(l, t, { enumerable: !0, get: e[t] })
    }, v.o = (l, e) => Object.prototype.hasOwnProperty.call(l, e), v.r = l => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 })
    };
    var F = {};
    v.r(F), v.d(F, { default: () => j });
    const y = require("siyuan");

    // 定义全局 i18n 变量和设置函数
    let i18n;
    const setI18n = (i18nObj) => {
        i18n = i18nObj;
    };

    class j extends y.Plugin {
        onload() {
            // 设置 i18n
            setI18n(this.i18n);
            
            this.protyleSlash = [];
            
            // 为 bq1 到 bq13 生成对应的 slash 命令
            for (let i = 1; i <= 13; i++) {
                this.protyleSlash.push({
                    filter: [`bq${i}`, `引述${i}`, `blockquote${i}`, `ys${i}`],
                    html: `<div class="b3-list-item__first"><span class="color__square color__square--list" style="background-color: var(--b3-font-background${i})"> </span><span class="b3-list-item__text">${i18n.button.ysys}${i}</span><span class="b3-list-item__meta">bq${i} 🎨</span></div>`,
                    id: `insertStyleBlock${i}`,
                    callback: (p) => {
                        const k = window.Lute.NewNodeID();
                        const T = window.Lute.NewNodeID();
                        const D = `style="background-color: var(--b3-font-background${i}); --b3-parent-background: var(--b3-font-background${i});"`;
                        
                        p.insert(`<div data-node-id="${k}" data-type="NodeBlockquote" class="bq" updated="${k.split("-")[0]}" ${D}><div data-node-id="${T}" updated="${T.split("-")[0]}" data-type="NodeParagraph" class="p"><div contenteditable="true" spellcheck="false"></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div>`, true);
                    }
                });
            }
            
            // 添加特殊功能的 slash 命令
            const specialCommands = [
                {
                    filter: ["bqi", "信息块", "xinxikuai", "ysi"],
                    html: `<div class="b3-list-item__first"><span class="color__square color__square--list" style="color: var(--b3-card-info-color);background-color: var(--b3-card-info-background);"> </span><span class="b3-list-item__text">${i18n.button.ysysi}</span><span class="b3-list-item__meta">bqi ℹ</span></div>`,
                    id: "insertInfoBlock",
                    style: "background-color: var(--b3-card-info-background); color: var(--b3-card-info-color); --b3-parent-background: var(--b3-card-info-background);"
                },
                {
                    filter: ["bqw", "警告块", "jinggaokuai", "ysw"],
                    html: `<div class="b3-list-item__first"><span class="color__square color__square--list" style="color: var(--b3-card-warning-color);background-color: var(--b3-card-warning-background);"> </span><span class="b3-list-item__text">${i18n.button.ysysw}</span><span class="b3-list-item__meta">bqw ⚠️</span></div>`,
                    id: "insertWarningBlock",
                    style: "background-color: var(--b3-card-warning-background); color: var(--b3-card-warning-color); --b3-parent-background: var(--b3-card-warning-background);"
                },
                {
                    filter: ["bqe", "错误块", "cuowukuai", "yse"],
                    html: `<div class="b3-list-item__first"><span class="color__square color__square--list" style="color: var(--b3-card-error-color);background-color: var(--b3-card-error-background);"> </span><span class="b3-list-item__text">${i18n.button.ysyse}</span><span class="b3-list-item__meta">bqe ❌</span></div>`,
                    id: "insertErrorBlock",
                    style: "background-color: var(--b3-card-error-background); color: var(--b3-card-error-color); --b3-parent-background: var(--b3-card-error-background);"
                },
                {
                    filter: ["bqs", "成功块", "chenggongkuai", "yss"],
                    html: `<div class="b3-list-item__first"><span class="color__square color__square--list" style="color: var(--b3-card-success-color);background-color: var(--b3-card-success-background);"> </span><span class="b3-list-item__text">${i18n.button.ysyss}</span><span class="b3-list-item__meta">bqs ✅</span></div>`,
                    id: "insertSuccessBlock",
                    style: "background-color: var(--b3-card-success-background); color: var(--b3-card-success-color); --b3-parent-background: var(--b3-card-success-background);"
                }
            ];
            
            // 为每个特殊命令添加到 slash 列表
            specialCommands.forEach(cmd => {
                this.protyleSlash.push({
                    filter: cmd.filter,
                    html: cmd.html,
                    id: cmd.id,
                    callback: (p) => {
                        const k = window.Lute.NewNodeID();
                        const T = window.Lute.NewNodeID();
                        const D = `style="${cmd.style}"`;
                        
                        p.insert(`<div data-node-id="${k}" data-type="NodeBlockquote" class="bq" updated="${k.split("-")[0]}" ${D}><div data-node-id="${T}" updated="${T.split("-")[0]}" data-type="NodeParagraph" class="p"><div contenteditable="true" spellcheck="false"></div><div class="protyle-attr" contenteditable="false">​</div></div><div class="protyle-attr" contenteditable="false">​</div></div>`, true);
                    }
                });
            });
        }
    }
    module.exports = F;
})();