const API_KEY = '20179181-b536d7b2e359c0533f6f56cb7';
const baseUrl = 'https://pixabay.com/api/';

const fetchOn = (query, pageNumber, pageCapacity = 12) => {
  const url = `${baseUrl}/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageCapacity} `;

  return fetch(url)
    .then((response, reject) => {
      if (response.status !== 200) {
        console.log('Server response by non 200 status');
        return;
      } else return response.json();
    })
    .then(({ hits }) => {
      return hits;
    })
    .catch(error => console.log('Server Error'));
};

export default fetchOn;
