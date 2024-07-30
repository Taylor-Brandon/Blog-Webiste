const { Comment } = require('../models');

const commentData = [
    {
        id: 1, 
        title: 'Mandolorian Season 3',
        description: 'Loved the last season! 10/10 worth the watch!',
        user_id: 2,
    },
    {
        id: 2,
        title: 'Rewatching Skywalker Series',
        description: 'Started watching skywalker series, so nostaligic!',
        user_id: 4,
    },
    {
        id: 3,
        title: 'Leia Jedi Training',
        description: 'Wish we had gotten more of Leia in her jedi era :(',
        user_id: 5,
    },
    {
        id: 4,
        title: 'Mando',
        description: 'When is thee next season on mando comming out?!',
        user_id: 4,
    },
    {
        id: 5, 
        title: 'Ahsoka Series',
        description: 'I cannot tell you how happy I was to see Anankin again when I watched this',
        user_id: 7,
    },
    {
        id: 6, 
        title: 'Sith Lords',
        description: 'Wait, why do all of the sith lord names start with darth???',
        user_id: 5,
    },
    {
        id: 7,
        title: 'Trip next Spring',
        description: 'Just booked my Disney World trip for next spring! I have never been, but I cannot wait!!!',
        user_id: 3,
    },
    {
        id: 8, 
        title: 'Halloween Costumes',
        description: 'Any ideas for a custom this upcomming halloween. I am thinking maybe Ben Solo??? Not sure',
        user_id: 1,
    },
    {
        id: 9,
        title: 'Light Sabers',
        description: 'Anyone know where I can find a quality light saber. I feel like the ones on Amazon suck!',
        user_id: 6,
    },
    {
        id: 10,
        title: 'Lego Sets',
        description: 'I have some lego sets I am looking to sell. Anyone interested??',
        user_id: 5,
    },
    {
        id: 11,
        title: 'Pedro Pascal',
        description: 'Can we have a conversation about Pedro Pascal as Mando. I was talking to a friend the other day who thinks he should be recasted. I simply cant see anyone else playing him!',
        user_id: 5,
    },
    {
        id: 12,
        title: 'Remakes',
        description: 'I will literally sell my soul for disney to remake episodes 4-6',
        user_id: 3,
    },
    {
        id: 13, 
        title: 'Adding Christen Haydensen',
        description: 'I love how they added Chsiten Haydensen to episode 3, but why does he look so young still. I heard someone say its because thats when he was still good, but idk',
        user_id: 2,
    },
    {
        id: 14, 
        title: 'Obiwan Series',
        description: 'Have they renewed obiwan for season 2 or was that a limited series?',
        user_id: 1,
    },
    {
        id: 15, 
        title: 'Episode 3',
        description: 'Favorite Star Wars movie of all time, but I hated why Anakin did to Padme',
        user_id: 1,
    },
    {
        id: 16, 
        title: 'Lego Star wars',
        description: 'Just redownloaded lego star wars the other day. I miss the old one, its just not the same ',
        user_id: 6,
    },
    {
        id: 17,
        title: 'Palpatine',
        description: 'Why did palpatine kinda have a point though...',
        user_id: 4,
    },
    {
        id: 18,
        title: 'Palpatine Fight Episode 3',
        description: 'Mace Windu shouldve won, but im pretty sure he was still alive after ????',
        user_id: 2,
    },
    {
        id: 19,
        title: 'Clone Wars',
        description: 'They should make a live action clone wars movie. I miss christian haydensen',
        user_id: 5,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;