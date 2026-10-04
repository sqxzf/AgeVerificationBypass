/**
 * @name AgeVerificationBypass
 * @author sqxzf
 * @version 1.0.0
 * @description Allows you to view NSFW channels without age verification.
 */

module.exports = class CustomWebpackInjector {
    constructor() {
        this.config = {
            info: {
                name: "Age Verification Bypass",
                authors: [{ name: "sqxzf" }],
                version: "1.0.0",
                description: "Allows you to view NSFW channels without age verification."
            }
        };
    }

    start() {
        try {
            webpackChunkdiscord_app.push([[Symbol()], {}, f => {
                try {
                    Object.values(f.c).some((e) => {
                        if (e.id == '174459') {
                            e.exports.default.extendSuperProperties({ "client_build_number": 600000 });
                        } else if (e.id == '734057') {
                            for (const c of Object.values(e.exports.A.loadAllGuildAndPrivateChannelsFromDisk())) {
                                c.nsfw_ = false;
                            }
                        }
                    });
                } catch {}
            }]);
        } catch (err) {
            console.error("Failed to execute Webpack patch:", err);
        }
        BdApi.UI.showToast("Applied bypass successfully!", { type: "success" });
    }

    stop() {
    }

    getSettingsPanel() {
        const panel = document.createElement("div");
        panel.style.padding = "20px";
        panel.style.color = "var(--text-normal)";

        const title = document.createElement("h3");
        title.innerText = "Custom Webpack Injector Settings";
        title.style.marginBottom = "15px";
        panel.appendChild(title);

        const reloadButton = document.createElement("button");
        reloadButton.innerText = "Reload Plugin";
        reloadButton.className = "button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeMedium-2bFIrx";
        reloadButton.style.padding = "10px 20px";
        reloadButton.style.cursor = "pointer";
        reloadButton.style.backgroundColor = "var(--button-bg)";
        reloadButton.style.color = "var(--button-text)";
        reloadButton.style.border = "none";
        reloadButton.style.borderRadius = "4px";

        reloadButton.onclick = () => {
            BdApi.Plugins.reload("CustomWebpackInjector");
        };

        panel.appendChild(reloadButton);
        return panel;
    }
};