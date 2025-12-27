export class Modal {
  _title;
  _body;
  _popup;
  _overlay;

  constructor() {
    this._title = "";
    this._body = "";
    this._overlay = "";
    this._popup = "";
  }

  hide() {
    this._popup.hide();
    this._overlay.hide();
  }

  show() {
    this._popup.show();
    this._overlay.show();
  }

  setTitle(title) {
    this._title = title ?? "";
  }

  setBody(body) {
    this._body = body ?? "";
  }

  buildModalUi() {
    this._overlay = $(`<div class="overlay"></div>`);
    this._popup = $(`
      <div class="popup">
        <h1 class="title">${this._title}</h1>
        <div>${this._body}</div>
      </div>
    `);

    $("body").append(this._overlay, this._popup);
  }
}
