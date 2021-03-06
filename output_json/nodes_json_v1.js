var nodes_json = [
    {"id": 61, "nom": "Zone15", "coords": [613, 405], "params": [48.0, 1.4, 8750.0, 3000.0, 5000.0, 6.0, 11930.6867009944], "type": 2},
    {"id": 12, "nom": "Zone3", "coords": [306, 200], "params": [18.0, 2.0, 2000.0, 500.0, 4000.0, 9.0, 1560.02830921519], "type": 2},
    {"id": 59, "nom": "Zone14", "coords": [480, 555], "params": [50.0, 1.6, 7500.0, 1500.0, 10000.0, 5.0, 21013.0388849432], "type": 2},
    {"id": 73, "nom": "Zone12", "coords": [488, 671], "params": [25.0, 2.0, 15000.0, 500.0, 2000.0, 10.0, 6188.74303089488], "type": 2},
    {"id": 6, "nom": "Zone6", "coords": [434, 196], "params": [20.0, 2.0, 2500.0, 500.0, 3000.0, 10.0, 1632.0058371804], "type": 2},
    {"id": 49, "nom": "Zone5", "coords": [307, 492], "params": [28.0, 1.9, 2500.0, 2000.0, 4000.0, 9.0, 1792.79322398793], "type": 2},
    {"id": 17, "nom": "Zone4", "coords": [335, 346], "params": [30.0, 1.8, 3750.0, 1500.0, 3000.0, 7.0, 1879.40446333451], "type": 2},
    {"id": 29, "nom": "Zone10", "coords": [482, 293], "params": [30.0, 1.5, 2500.0, 3000.0, 9000.0, 5.0, 6507.61780894887], "type": 2},
    {"id": 34, "nom": "Zone11", "coords": [563, 331], "params": [45.0, 1.5, 5000.0, 1000.0, 3000.0, 3.0, 3816.76589133522], "type": 2},
    {"id": 54, "nom": "Zone13", "coords": [452, 449], "params": [60.0, 1.5, 10000.0, 2000.0, 8000.0, 4.0, 17269.7353515625], "type": 2},
    {"id": 7, "nom": "Zone8", "coords": [672, 109], "params": [25.0, 2.0, 12500.0, 500.0, 1000.0, 10.0, 5144.83249733666], "type": 2},
    {"id": 10, "nom": "Zone1", "coords": [178, 211], "params": [25.0, 2.0, 2500.0, 1000.0, 5000.0, 10.0, 2987.80988103693], "type": 2},
    {"id": 65, "nom": "Zone9", "coords": [714, 503], "params": [35.0, 2.0, 2500.0, 1500.0, 6000.0, 10.0, 2605.82939009233], "type": 2},
    {"id": 47, "nom": "Zone2", "coords": [195, 494], "params": [25.0, 2.0, 2000.0, 1000.0, 3000.0, 7.0, 2755.83709161932], "type": 2},
    {"id": 39, "nom": "Zone7 - Universityy", "coords": [775, 258], "params": [10.0, 0.2, 2500.0, 1500.0, 6000.0, 10.0, 1726.07757013494], "type": 2},
    {"id": 46, "nom": "Noeud46", "coords": [852, 375], "params": [], "type": 4},
    {"id": 30, "nom": "Noeud30", "coords": [568, 312], "params": [], "type": 4},
    {"id": 28, "nom": "Noeud28", "coords": [549, 279], "params": [], "type": 4},
    {"id": 5, "nom": "Noeud5", "coords": [576, 173], "params": [], "type": 4},
    {"id": 35, "nom": "Noeud35", "coords": [568, 356], "params": [], "type": 4},
    {"id": 26, "nom": "Noeud26", "coords": [405, 251], "params": [], "type": 4},
    {"id": 62, "nom": "Noeud62", "coords": [683, 419], "params": [], "type": 4},
    {"id": 1, "nom": "Noeud1", "coords": [151, 68], "params": [], "type": 4},
    {"id": 11, "nom": "Noeud11", "coords": [68, 232], "params": [], "type": 4},
    {"id": 18, "nom": "Noeud18", "coords": [396, 363], "params": [], "type": 4},
    {"id": 31, "nom": "Noeud31", "coords": [402, 313], "params": [], "type": 4},
    {"id": 71, "nom": "Noeud71", "coords": [413, 611], "params": [], "type": 4},
    {"id": 14, "nom": "Noeud14", "coords": [238, 280], "params": [], "type": 4},
    {"id": 60, "nom": "Noeud60", "coords": [591, 594], "params": [], "type": 4},
    {"id": 13, "nom": "Noeud13", "coords": [328, 258], "params": [], "type": 4},
    {"id": 16, "nom": "Noeud16", "coords": [375, 311], "params": [], "type": 4},
    {"id": 21, "nom": "Noeud21", "coords": [280, 398], "params": [], "type": 4},
    {"id": 64, "nom": "Noeud64", "coords": [648, 491], "params": [], "type": 4},
    {"id": 52, "nom": "Noeud52", "coords": [345, 565], "params": [], "type": 4},
    {"id": 45, "nom": "Noeud45", "coords": [880, 319], "params": [], "type": 4},
    {"id": 44, "nom": "Noeud44", "coords": [766, 393], "params": [], "type": 4},
    {"id": 23, "nom": "Noeud23", "coords": [485, 233], "params": [], "type": 4},
    {"id": 20, "nom": "Noeud20", "coords": [385, 395], "params": [], "type": 4},
    {"id": 50, "nom": "Noeud50", "coords": [215, 493], "params": [], "type": 4},
    {"id": 63, "nom": "Noeud63", "coords": [651, 437], "params": [], "type": 4},
    {"id": 37, "nom": "Noeud37", "coords": [513, 378], "params": [], "type": 4},
    {"id": 40, "nom": "Noeud40", "coords": [605, 268], "params": [], "type": 4},
    {"id": 4, "nom": "gare", "coords": [331, 196], "params": [], "type": 4},
    {"id": 42, "nom": "Noeud42", "coords": [776, 353], "params": [], "type": 4},
    {"id": 27, "nom": "Noeud27", "coords": [414, 268], "params": [], "type": 4},
    {"id": 51, "nom": "Noeud51", "coords": [276, 529], "params": [], "type": 4},
    {"id": 57, "nom": "Noeud57", "coords": [564, 502], "params": [], "type": 4},
    {"id": 22, "nom": "Noeud22", "coords": [501, 213], "params": [], "type": 4},
    {"id": 32, "nom": "Noeud32", "coords": [594, 322], "params": [], "type": 4},
    {"id": 66, "nom": "Noeud66", "coords": [696, 545], "params": [], "type": 4},
    {"id": 70, "nom": "Noeud70", "coords": [399, 699], "params": [], "type": 4},
    {"id": 15, "nom": "Noeud15", "coords": [281, 292], "params": [], "type": 4},
    {"id": 53, "nom": "Noeud53", "coords": [379, 591], "params": [], "type": 4},
    {"id": 67, "nom": "Noeud67", "coords": [626, 555], "params": [], "type": 4},
    {"id": 33, "nom": "Noeud33", "coords": [457, 324], "params": [], "type": 4},
    {"id": 58, "nom": "Noeud58", "coords": [502, 514], "params": [], "type": 4},
    {"id": 38, "nom": "Noeud38", "coords": [409, 395], "params": [], "type": 4},
    {"id": 68, "nom": "Noeud68", "coords": [264, 626], "params": [], "type": 4},
    {"id": 19, "nom": "Noeud19", "coords": [216, 394], "params": [], "type": 4},
    {"id": 36, "nom": "Noeud36", "coords": [497, 361], "params": [], "type": 4},
    {"id": 41, "nom": "Noeud41", "coords": [696, 329], "params": [], "type": 4},
    {"id": 72, "nom": "Noeud72", "coords": [483, 622], "params": [], "type": 4},
    {"id": 55, "nom": "Noeud55", "coords": [553, 468], "params": [], "type": 4},
    {"id": 25, "nom": "Noeud25", "coords": [493, 242], "params": [], "type": 4},
    {"id": 43, "nom": "Noeud43", "coords": [672, 358], "params": [], "type": 4},
    {"id": 56, "nom": "Noeud56", "coords": [446, 487], "params": [], "type": 4},
    {"id": 3, "nom": "Noeud3", "coords": [264, 128], "params": [], "type": 4},
    {"id": 75, "nom": "Noeud75", "coords": [616, 657], "params": [], "type": 4},
    {"id": 74, "nom": "Noeud74", "coords": [518, 709], "params": [], "type": 4},
    {"id": 2, "nom": "Noeud2", "coords": [278, 98], "params": [], "type": 4},
    {"id": 24, "nom": "Noeud24", "coords": [521, 233], "params": [], "type": 4},
    {"id": 69, "nom": "Noeud69", "coords": [331, 627], "params": [], "type": 4},
    {"id": 8, "nom": "Noeud8", "coords": [702, 178], "params": [], "type": 4},
    {"id": 48, "nom": "Noeud48", "coords": [370, 459], "params": [], "type": 4},
    {"id": 9, "nom": "Noeud9", "coords": [889, 138], "params": [], "type": 4}
]
