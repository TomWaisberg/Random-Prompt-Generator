function load_sentence(){
    var verb_arr = ["a bored", "a high tech", "an amazing", "a famous", "a tired", "a crazy", "an angry", "an explosive", "a dangerous", 
    "a chaotic", "a monstrous", "an idealistic", "a beautiful", "a magical"];
    var verb2_arr = ["red", "blue", "green", "rainbow colored", "colourful", "black", "gothic", "sparkly", "shimmering", "cold", "hot", 
    "blazing", "freezing", "screaming", "flamboyant", "vibrant"];
    var noun_arr = ["superhero", "dog", "ghost", "man", "alien", "monster", "cat", "bird", "circle", "dodechahedron", "assasin", "entrepreneur", 
    "inventor", "genius", "slug", "programmer", "teacher", "student", "ceo", "sorcerer", "prince", "father"];

    a_verb = verb_arr[Math.floor(Math.random() * verb_arr.length)];
    a_noun = noun_arr[Math.floor(Math.random() * noun_arr.length)];

    var adjective_arr = ["do his chores", "learn to move", `find ${a_verb} ${a_noun}` ,`protect ${a_verb} ${a_noun}`, `learn how to be a ${a_noun}`,
    `fullfil ${a_verb} ${a_noun}'s request`, `fight off ${a_verb} ${a_noun}`, `kill ${a_verb} ${a_noun}`, `avenge ${a_verb} ${a_noun}'s death`];

    verb = verb_arr[Math.floor(Math.random() * verb_arr.length)];
    verb2 = verb2_arr[Math.floor(Math.random() * verb2_arr.length)];
    noun = noun_arr[Math.floor(Math.random() * noun_arr.length)];
    noun2 = noun_arr[Math.floor(Math.random() * noun_arr.length)];
    adjective = adjective_arr[Math.floor(Math.random() * adjective_arr.length)];

    sentence_templates = [`${verb}, ${verb2} ${noun} who has to ${adjective}`, `${verb}, ${verb2} ${noun} who can't ${adjective}`, 
    `${verb} ${noun} and a ${verb2} ${noun2} who have to ${adjective}`, `${verb} ${noun} and a ${verb2} ${noun2} who don't want to ${adjective}`]
    var full_sentence = sentence_templates[Math.floor(Math.random() * sentence_templates.length)];
    return full_sentence;
}
