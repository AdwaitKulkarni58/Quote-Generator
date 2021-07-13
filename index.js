var quotes = ['Sometimes, being with your best friend, is all the therapy you need.',
    'Keep the ones that heard you when you never said a word.',
    'I would rather walk with a friend in the dark, than alone in the light.',
    'A true friend accepts who you are, but also helps you become who you should be.',
    'A friend knows the song in my heart and sings it to me when my memory fails.',
    'Sometimes you meet a person and you just click—you’re comfortable with them, like you’ve known them your whole life, and you don’t have to pretend to be anyone or anything.',
    'Because of you, I laugh a little harder, cry a little less, and smile a lot more.',
    'That’s when I realized what a true friend was. Someone who would always love you—the imperfect you, the confused you, the wrong you—because that is what people are supposed to do.',
    'What draws people to be friends is that they see the same truth. They share it.',
    'True friends are like diamonds—bright, beautiful, valuable, and always in style.',
    'A good friend knows all your stories. A best friend helped you create them.',
    'A friend is someone who makes it easy to believe in yourself.',
    'There’s nothing better than a friend, unless it is a friend with chocolate.',
    'Rare as is true love, true friendship is rarer.',
    'Some people arrive and make such a beautiful impact on your life, you can barely remember what life was like without them.',
    'When you can’t look on the bright side, I will sit with you in the dark.',
    'Many people will walk in and out of your life, but only true friends will leave footprints in your heart.',
    'In the cookie of life friends are the chocolate chips.',
    'Good friends are like stars, you don’t always see them, but you know they’re always there.',
    'We’ve been friends for so long I can’t remember which one of us is the bad influence.',
    'One of the most beautiful qualities of true friendship is to understand and to be understood.',
    'A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face.',
    'Best friends are the people you can do anything and nothing with and still have the best time.',
    'How beautiful it is to find someone who asks for nothing but your company.',
    'I knew when I met you an adventure was going to happen.',
    'I get by with a little help from my friends.',
    'Friendship is the wine of life.',
    'Friendship is born at that moment when one person says to another: "What! You too? I thought I was the only one."',
    'If ever there is a tomorrow when we’re not together, there is something you must always remember. You are braver than you believe, stronger than you seem and smarter than you think. But the most important thing is, even if we are apart, I’ll always be with you.',
    'Friendship is always a sweet responsibility, never an opportunity.',
    'Friendship is another word for love.',
    'It’s the friends you can call up at 4 a.m. that matter.',
    'The only way to have a friend is to be one.',
    'A friend is what the heart needs all the time.',
    'The greatest gift of life is friendship, and I have received it.',
    'A friend is someone who gives you total freedom to be yourself.',
    'Truly great friends are hard to find, difficult to leave and impossible to forget.',
    'Things are never quite as scary when you’ve got a best friend.',
    'A friend is someone who knows all about you and still loves you.',
    'Friends are medicine for a wounded heart, and vitamins for a hopeful soul.',
    'Life is nothing without friendship.',
    'A true friend never gets in your way unless you happen to be going down.',
    'We were together. I forget the rest.',
    'I will not let you go into the unknown alone.',
    'The great thing about new friends is that they bring new energy to your soul.',
    'Sometimes being a friend means mastering the art of timing. There is a time for silence. A time to let go and allow people to hurl themselves into their own destiny. And a time to prepare to pick up the pieces when it’s all over.',
    'True friendship is when two friends can walk in opposite directions, yet remain side by side.',
    'Close friends are truly life’s treasures. Sometimes they know us better than we know ourselves. With gentle honesty, they are there to guide and support us, to share our laughter and our tears. Their presence reminds us that we are never really alone.',
    'Nobody can avoid falling in love. They might want to deny it, but friendship is probably the most common form of love.',
    'Find a group of people who challenge and inspire you; spend a lot of time with them, and it will change your life.',
    'Friendship isn’t a big thing—it’s a million little things.',
    'You can always tell when two people are best friends because they’re always having way more fun than it makes sense for them to be having.',
    'Nothing makes the earth seem so spacious as to have friends at a distance, they make the latitudes and longitudes.',
    'Friendship is the hardest thing in the world to explain. It’s not something you learn in school. But if you haven’t learned the meaning of friendship, you really haven’t learned anything.',
    'Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.',
    'The most beautiful discovery true friends make is that they can grow separately without growing apart.',
    'Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.',
    'Life is partly what we make it, and partly what it is made by the friends we choose.',
    'They may forget what you said, but they will never forget how you made them feel.',
    'Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life.',
    'For beautiful eyes, look for the good in others, for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.',
    'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
    'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
    'A real friend is one who walks in when the rest of the world walks out.',
    'A friend is someone who understands your past, believes in your future, and accepts you just the way you are.',
    'Growing apart doesn’t change the fact that for a long time we grew side by side, our roots will always be tangled. I’m glad for that.',
    'Let us be grateful to the people who make us happy, they are the charming gardeners who make our souls blossom.',
    'Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.',
    'In the sweetness of friendship let there be laughter, for in the dew of little things the heart finds its morning and is refreshed.',
    'It’s not what we have in life, but who we have in our life that matters.',
    'To the world you may be just one person, but to one person you may be the world.',
    'A friend is one who overlooks your broken fence and admires the flowers in your garden.',
    'A friend who understands your tears is much more valuable than a lot of friends who only know your smile.',
    'We weren’t sisters [or brothers] by birth, but we knew from the start…fate brought us together to be sisters [or brothers] by heart.',
    'A friend is one of the best things you can be and the greatest things you can have.',
    'Best friends are the people in your life who make you laugh louder, smile brighter and live better.',
    'Time doesn’t take away from friendship, nor does separation.',
    'When the world is so complicated, the simple gift of friendship is within all of our hands.']

function generateQuote() {
    var num = Math.floor(Math.random() * quotes.length);
    document.querySelector(".display").innerHTML = quotes[num];
}