function UserPage(name) {
    // this.createElement = function(name) {
        loginPageSection.style.display = 'none';
        userPageSection.style.display = 'none';
        
        const container = tagCreator('div', userPageSection, 'class', 'container');
        const logoutContainer = tagCreator('div', container, 'class', 'log-out', 'type', 'submit');
        const logOut = tagCreator('button', logoutContainer, 'class', 'log-out','value', 'Log out');
        logOut.innerHTML = 'Log out';
        const userInfo = tagCreator('div', container, 'class', 'user-info'),
              avatarContainer = tagCreator('div', userInfo, 'class', 'avatar-container');
            //   avatar = tagCreator('img', container, 'class', 'avatar');
        const loggedName =  tagCreator('span', userInfo, 'class', 'user-page-name');
              loggedName.innerHTML = name;
        const savedRecipe = tagCreator('div', container, 'class', 'saved-recipe'),
              savedRecipeIcon = tagCreator('span', savedRecipe, 'class', 'user-page-icon');
              savedRecipeIcon.innerHTML = '&#9733;';
        const myPosts= tagCreator('div', container, 'class', 'my-posts'),
              myPostsIcon = tagCreator('span', myPosts, 'class', 'user-page-icon');
              myPostsIcon.innerHTML = '&#9997;';
    function deletData() {
        loginPageSection.style.display = 'flex';
        userPageSection.style.display = 'none';
        delete localStorage['user-name','user-password', 'repeat-password', 'user-email'];
    }
            
    logOut.onclick = deletData;
        
    // }
}

const myPage = new UserPage();