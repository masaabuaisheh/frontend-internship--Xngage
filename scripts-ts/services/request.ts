export function get<T = any>(url: string): JQuery.jqXHR<T> {
  return $.ajax({
    url,
    method: "GET",
  });
}
