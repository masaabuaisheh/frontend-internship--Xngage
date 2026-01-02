export function get(url) {
    return $.ajax({
        url,
        method: "GET",
    });
}
