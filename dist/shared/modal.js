export class Modal {
    constructor() {
        this.isBuilt = false;
        this.title = "";
        this.body = "";
    }
    setTitle(title) {
        this.title = title || "";
    }
    setBody(body) {
        this.body = body || "";
    }
    buildModalUi() {
        this.overlay = $(`<div class="overlay"></div>`);
        this.popup = $(`
      <div class="popup">
        <h1 class="title">${this.title}</h1>
        <div>${this.body}</div>
      </div>
    `);
        $("body").append(this.overlay, this.popup);
        this.isBuilt = true;
    }
    show() {
        if (!this.isBuilt) {
            return;
        }
        this.popup.show();
        this.overlay.show();
    }
    hide() {
        if (!this.isBuilt) {
            return;
        }
        this.popup.hide();
        this.overlay.hide();
    }
}
