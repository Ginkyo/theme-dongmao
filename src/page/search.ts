import { documentFunction, dongmao } from "../main";

export default class Search {
  /**
   * 注册搜索框点击事件
   */
  @documentFunction()
  public registerSearchForm() {
    const searchElement = document.querySelector(".search-form-inner") as HTMLElement;
    if (!(searchElement && searchElement instanceof HTMLFormElement)) {
      return;
    }

    searchElement.addEventListener("submit", (event) => {
      if (!dongmao.$pjax) {
        return;
      }
      event.preventDefault();
      const form = event.target;
      if (!(form && form instanceof HTMLFormElement)) {
        return;
      }
      const action = form.action;
      const keyword = form.keyword;
      dongmao.$pjax.loadUrl(`${action}?${keyword.name}=${keyword.value}`);
      dongmao.$pjax.refresh();
    });
  }
}
