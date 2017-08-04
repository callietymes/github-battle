const axios = require('axios');

function getProfile(username){
    return axios.get('http://api.github.com.users/' + username)
        .then((user) => {
        return user.data;
        });
}

function getRepos(username) {
    return axios.get('http://api.github.com.users/' + username + '/repos&per_page=100')
}

function getStarCount(repos) {
    return repos.data.reduce((count, repos) => {
        return count + repos.startgazers_count;
    }, 0);
}

function calculateScore(profile, repos) {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return (followers * 3) + totalStars;
}

function handleError(error) {
    console.warn(error);
    return null;
}

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then((data) => {
        const profile = data[0];
        const repos = data[1];

        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    });
}

function sortPlayer(players) {
    return players.sort((a,b) => {
        return b.score - a.score;
    });
}

module.exports = {
    battle: function (players) {
        return promise.all(players.map(getUserData))
            .then(sortPlayer);
    },

    fetchPopularRepos: function (language) {
        const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
        return axios.get(encodedURI)
            .then(response => {
                return response.data.items;
            });
    }
};
