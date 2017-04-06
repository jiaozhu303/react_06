import axios from 'axios';

/**
 *
 * @param userName 用户名
 * @returns {AxiosPromise}  用户信息
 */
function getUserInfo(userName) {
    return axios.get(`https://api.github.com/users/${userName}`)
}

/**
 *
 * @param userName
 * @returns {AxiosPromise} 返回仓库信息
 */
function getRepos(userName) {
    return axios.get(`https://api.github.com/users/${userName}/repos`)
}

function getAll(userName) {
    return axios.all([getUserInfo(userName), getRepos(userName)])
        .then(arr => {
            const data = {
                userInfo: arr[0].data,
                userRepos: arr[1].data
            };
            return data;
        });
}

export default getAll;