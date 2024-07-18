//giving a variable
const chai = require("chai");

global.expect = chai.expect;
const jsdom = require("mocha-jsdom");

jsdom({});
document.addEventListener('DOMContentLoaded', () => {
    // Previous code ...
  
    const toggleButton = document.getElementById('toggle-search');
    let searchType = 'users';
  
    toggleButton.addEventListener('click', () => {
      if (searchType === 'users') {
        searchType = 'repos';
        searchInput.placeholder = 'Search GitHub Repos';
      } else {
        searchType = 'users';
        searchInput.placeholder = 'Search GitHub Users';
      }
    });
  
    form.addEventListener('submit', event => {
      event.preventDefault();
      const query = searchInput.value;
      if (searchType === 'users') {
        searchUsers(query);
      } else {
        searchRepos(query);
      }
    });
  
    function searchRepos(query) {
      fetch(`https://api.github.com/search/repositories?q=${query}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
      .then(response => response.json())
      .then(data => displayRepos(data.items))
      .catch(error => console.error('Error:', error));
    }
  });

  
