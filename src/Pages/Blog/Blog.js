import React from 'react';

const Blog = () => {
    return (
        <div className='mx-3 my-3'>
            <div>
                <h4 className='font-bold text-2xl'>1. what is 'cors'?</h4>
                <p className='px-8'>
                    Cross-origin resource sharing (CORS) is a browser mechanism that allows a web page to use assets and data from other pages or domains.
                    Most sites need to use resources and images to run their scripts. These embedded assets present a security risk as the assets could contain viruses or allow server access to a hacker.
                </p>
            </div><br />
            <div>
                <h4 className='font-bold text-2xl'>2. Why are you using `firebase`? What other options do you have to implement authentication?</h4>
                <p className='px-8'>
                    Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application.
                    Many times, we receive queries to develop the application using firebase, but then we do a complete analysis of the requirement and suggest them the correct solution. The overall objective of the blog is to advise people on when they can choose firebase for their app and when it’s not a good choice to use it.

                    Firebase Alternatives:<br></br>
                    Auth0, STYTCH, Ory, Okta.
                </p>
            </div><br />
            <div>
                <h4 className='font-bold text-2xl'>3. How does the private route work?</h4>
                <p className='px-8'>
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                </p>
            </div><br />
            <div>
                <h4 className='font-bold text-2xl'>4. What is Node? How does Node work?</h4>
                <p className='px-8'>
                    Node is completely event-driven. Basically the server consists of one thread processing one event after another.
                    A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.
                    So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js
                </p>
            </div>
        </div>
    );
};

export default Blog;