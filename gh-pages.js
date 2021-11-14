import {publish} from "gh-pages";

publish(
    'public', // path to public directory
    {
        branch: 'pages',
        repo: 'https://github.com/benderristone/brokerama/', // Update to point to your repository
        user: {
            name: 'Marc', // update to use your name
            email: 'bender.ristone@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
