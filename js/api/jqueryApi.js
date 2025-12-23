export function fetchRecentNews() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://newsdata.io/api/1/latest?apikey=pub_6617835c881e40668057769932b6c20e&q=ecommerce",
      type: "GET",
      success: (data) => resolve(data.results),
      error: (err) => reject(err),
    });
  });
}

//  News Search
export function fetchNewsQuery(query) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://newsdata.io/api/1/latest?apikey=pub_8777d81f07194323b6a7a289400a7cd3&q=ecommerce+${query}`,
      type: "GET",
      success: (data) => {
        resolve(data.results);
      },
      error: (err) => reject(err),
    });
  });
}

/**
 function fetchRecentNews() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://newsdata.io/api/1/latest?apikey=pub_8777d81f07194323b6a7a289400a7cd3&q=ecommerce",
      type: "GET",
      success: (data) => resolve(data.results),
      error: (err) => reject(err),
    });
  });
}
 */
