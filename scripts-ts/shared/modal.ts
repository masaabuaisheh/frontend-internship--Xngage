export class Modal {
  private title: string;
  private body: string;
  private popup!: JQuery<HTMLElement>;
  private overlay!: JQuery<HTMLElement>;
  private isBuilt: boolean = false;

  constructor() {
    this.title = "";
    this.body = "";
  }

  public setTitle(title: string | null): void {
    this.title = title || "";
  }

  public setBody(body: string | null): void {
    this.body = body || "";
  }

  public buildModalUi(): void {
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

  public show(): void {
    if (!this.isBuilt) {
      return;
    }

    this.popup.show();
    this.overlay.show();
  }

  public hide(): void {
    if (!this.isBuilt) {
      return;
    }

    this.popup.hide();
    this.overlay.hide();
  }
}
