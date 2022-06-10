/* eslint-disable no-unreachable */
export const GET_COINS = 'GET_COINS';

// const API_URL = 'http://node.finexchanges.com/list-crypto/get';
const API_URL = 'https://server.bitqixnode.co.in/list-crypto/get';

export const getCoins = () => {
    try {
        // console.log('getCoins')
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
            });
            const json = await result.json();
            if (json) {
                // console.log(json)
                dispatch({
                    type: GET_COINS,
                    payload: json,
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

//  .then((response) => setData(response.data.data))
// .then((json) => setData(json))

// Axios.get('http://node.finexchanges.com/list-crypto/get')
//         .then((response) => setData(response.data.data))

//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);