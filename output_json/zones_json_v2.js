var zones_json = [
    {"name": "Zone1", "vehiculeTripsByZone": {"Entering": 13842.4, "IntraZonal": 6966.7, "Leaving": 13813.1}, "attractions": {"HBnoIdea": 0.0, "HBNW": 14260.0, "NHB": 6282.9, "HBW": 5790.6}, "productions": {"HBnoIdea": 0.0, "HBNW": 23040.0, "NHB": 6282.9, "HBW": 7600.0}},
    {"name": "Zone10", "vehiculeTripsByZone": {"Entering": 24204.0, "IntraZonal": 9927.8, "Leaving": 24087.1}, "attractions": {"HBnoIdea": 0.0, "HBNW": 17335.7, "NHB": 7946.9, "HBW": 8127.0}, "productions": {"HBnoIdea": 0.0, "HBNW": 45336.6, "NHB": 7946.9, "HBW": 16260.3}},
    {"name": "Zone11", "vehiculeTripsByZone": {"Entering": 16815.6, "IntraZonal": 4790.5, "Leaving": 16815.5}, "attractions": {"HBnoIdea": 0.0, "HBNW": 20365.0, "NHB": 8195.3, "HBW": 5991.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 17545.5, "NHB": 8195.3, "HBW": 6489.0}},
    {"name": "Zone12", "vehiculeTripsByZone": {"Entering": 29103.7, "IntraZonal": 10684.3, "Leaving": 29277.5}, "attractions": {"HBnoIdea": 0.0, "HBNW": 55760.4, "NHB": 21742.8, "HBW": 14306.6}, "productions": {"HBnoIdea": 0.0, "HBNW": 9216.0, "NHB": 21742.8, "HBW": 3040.0}},
    {"name": "Zone13", "vehiculeTripsByZone": {"Entering": 37032.8, "IntraZonal": 23030.5, "Leaving": 37024.3}, "attractions": {"HBnoIdea": 0.0, "HBNW": 49067.3, "NHB": 21014.9, "HBW": 18774.2}, "productions": {"HBnoIdea": 0.0, "HBNW": 52992.0, "NHB": 21014.9, "HBW": 19392.0}},
    {"name": "Zone14", "vehiculeTripsByZone": {"Entering": 32504.0, "IntraZonal": 30255.8, "Leaving": 32459.4}, "attractions": {"HBnoIdea": 0.0, "HBNW": 44852.4, "NHB": 20147.5, "HBW": 20052.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 61050.0, "NHB": 20147.5, "HBW": 22550.0}},
    {"name": "Zone15", "vehiculeTripsByZone": {"Entering": 25502.2, "IntraZonal": 18566.8, "Leaving": 25562.1}, "attractions": {"HBnoIdea": 0.0, "HBNW": 41721.9, "NHB": 17834.3, "HBW": 16398.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 30525.0, "NHB": 17834.3, "HBW": 11275.0}},
    {"name": "Zone2", "vehiculeTripsByZone": {"Entering": 8654.2, "IntraZonal": 6055.3, "Leaving": 8653.8}, "attractions": {"HBnoIdea": 0.0, "HBNW": 11383.7, "NHB": 5059.6, "HBW": 4970.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 13824.0, "NHB": 5059.6, "HBW": 4560.0}},
    {"name": "Zone3", "vehiculeTripsByZone": {"Entering": 11029.0, "IntraZonal": 2879.5, "Leaving": 11001.3}, "attractions": {"HBnoIdea": 0.0, "HBNW": 9777.2, "NHB": 4094.0, "HBW": 3079.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 16642.4, "NHB": 4094.0, "HBW": 5026.8}},
    {"name": "Zone4", "vehiculeTripsByZone": {"Entering": 14339.8, "IntraZonal": 2857.1, "Leaving": 14333.7}, "attractions": {"HBnoIdea": 0.0, "HBNW": 15285.2, "NHB": 6155.4, "HBW": 4574.7}, "productions": {"HBnoIdea": 0.0, "HBNW": 15112.2, "NHB": 6155.4, "HBW": 5420.1}},
    {"name": "Zone5", "vehiculeTripsByZone": {"Entering": 14703.1, "IntraZonal": 2872.0, "Leaving": 14664.1}, "attractions": {"HBnoIdea": 0.0, "HBNW": 11742.2, "NHB": 4943.6, "HBW": 4230.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 20149.6, "NHB": 4943.6, "HBW": 7226.8}},
    {"name": "Zone6", "vehiculeTripsByZone": {"Entering": 9598.2, "IntraZonal": 4066.1, "Leaving": 9600.0}, "attractions": {"HBnoIdea": 0.0, "HBNW": 11868.1, "NHB": 4990.3, "HBW": 4057.8}, "productions": {"HBnoIdea": 0.0, "HBNW": 12481.8, "NHB": 4990.3, "HBW": 3770.1}},
    {"name": "Zone7 - Universityy", "vehiculeTripsByZone": {"Entering": 14381.1, "IntraZonal": 2675.1, "Leaving": 14346.7}, "attractions": {"HBnoIdea": 0.0, "HBNW": 12064.4, "NHB": 5027.1, "HBW": 3758.0}, "productions": {"HBnoIdea": 0.0, "HBNW": 21600.0, "NHB": 5027.1, "HBW": 5760.0}},
    {"name": "Zone8", "vehiculeTripsByZone": {"Entering": 21594.6, "IntraZonal": 10752.6, "Leaving": 21760.7}, "attractions": {"HBnoIdea": 0.0, "HBNW": 47366.1, "NHB": 18655.3, "HBW": 12936.5}, "productions": {"HBnoIdea": 0.0, "HBNW": 4608.0, "NHB": 18655.3, "HBW": 1520.0}},
    {"name": "Zone9", "vehiculeTripsByZone": {"Entering": 19495.7, "IntraZonal": 4530.9, "Leaving": 19401.2}, "attractions": {"HBnoIdea": 0.0, "HBNW": 13193.5, "NHB": 5663.8, "HBW": 4754.7}, "productions": {"HBnoIdea": 0.0, "HBNW": 31920.0, "NHB": 5663.8, "HBW": 11913.0}}
]