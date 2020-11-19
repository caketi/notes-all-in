/* yup, network calls mostly. But also input output, such as getting the GPS location or microphone input.
In these situations it's critical to use either promises or async/await. 
Ahh ok, yea waiting for the user to authorize the use of the microphone is an example that makes perfect sense to me! Thank you!
*/

/*o give you a real example to help wrap your head around it.
Twitter is async.
Your feed is always out of date. And twitter gets new posts for you in the background (async).
I'm pretty sure the feed even updated automatically in the past (but now a button appears instead).
*/

/**Promises are useful anywhere you have an expensive/time-consuming process. Api calls, resizing an image or running a complex calculation. They make sure that the rest of you programm can keep running while te expesive process "runs in the back"! :) */

/*API calls, DB queries... Any task that may take some time to complete.
Take a look at parallel execution. 
It explains asynchronous operations and how to control them.*/
// 嗯~ o(*￣▽￣*)o时间是个关键
const userEl = document.querySelector('.user');
const userImg = document.querySelector('.userImg');
const baseEndPoint = 'https://api.github.com';
const userEndPoint = `${baseEndPoint}/users`;

const displayUser = async (username) => {
    userEl.textContent = 'loading...';
    const response = await fetch(`${userEndPoint}/${username}`);
    const data = await response.json();
    console.log(data);
    userEl.textContent = `UserName: ${data.name} || Blog:${data.blog}`;
    userImg.src = `${data.avatar_url}`;


    // If no user is found 
    if (data.message === 'Not Found') {
        userEl.textContent  = `Username: ${username} does not exist`;
        userImg.remove();
    }
};

const handleError = (err) => {
    console.log('Error:');
    console.log(err);
    userEl.textContent = `Something went wrong ${err}`;
};

displayUser('devindford').catch(handleError);