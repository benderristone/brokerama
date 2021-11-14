const ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'pages',
        repo: 'https://github.com/benderristone/brokerama/', // Update to point to your repository
        user: {
            name: 'Samuele', // update to use your name
            email: 'bender.ristone@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
