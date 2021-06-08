import { API_KEY } from './ApiKey';

const BASE_URL = 'https://pixabay.com/api/';

const fetchOn = async (query, pageNumber, pageCapacity = 12) => {
  const url = `${BASE_URL}/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageCapacity} `;

  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      console.log('Server response by non 200 status');
      return;
    } else return response.json();
  } catch (error) {
    return console.log('Server Error. Something gone wrong.', error);
  }
};

export default fetchOn;

/*
const fetchOn = (query, pageNumber, pageCapacity = 12) => {
  const url = `${BASE_URL}/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageCapacity} `;

  return fetch(url)
    .then(response => {
      if (response.status !== 200) {
        console.log('Server response by non 200 status');
        return;
      } else return response.json();
    })
    .then(({ totalHits, hits }) => {
      return { hits, totalHits };
    })
    .catch(error => console.log('Server Error. Something gone wrong.', error));
};
*/
