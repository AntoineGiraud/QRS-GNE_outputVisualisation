var zones_json = [
    {"name": "Zone1", "productions": {"HBnoIdea": 0.0, "HBW": 7600.0, "HBNW": 23040.0, "NHB": 6282.9}, "attractions": {"HBnoIdea": 0.0, "HBW": 5790.6, "HBNW": 14260.0, "NHB": 6282.9}, "vehiculeTripsByZone": {"Leaving": 13813.1, "IntraZonal": 6966.7, "Entering": 13842.4}},
    {"name": "Zone10", "productions": {"HBnoIdea": 0.0, "HBW": 16260.3, "HBNW": 45336.6, "NHB": 7946.9}, "attractions": {"HBnoIdea": 0.0, "HBW": 8127.0, "HBNW": 17335.7, "NHB": 7946.9}, "vehiculeTripsByZone": {"Leaving": 24087.1, "IntraZonal": 9927.8, "Entering": 24204.0}},
    {"name": "Zone11", "productions": {"HBnoIdea": 0.0, "HBW": 6489.0, "HBNW": 17545.5, "NHB": 8195.3}, "attractions": {"HBnoIdea": 0.0, "HBW": 5991.5, "HBNW": 20365.0, "NHB": 8195.3}, "vehiculeTripsByZone": {"Leaving": 16815.5, "IntraZonal": 4790.5, "Entering": 16815.6}},
    {"name": "Zone12", "productions": {"HBnoIdea": 0.0, "HBW": 3040.0, "HBNW": 9216.0, "NHB": 21742.8}, "attractions": {"HBnoIdea": 0.0, "HBW": 14306.6, "HBNW": 55760.4, "NHB": 21742.8}, "vehiculeTripsByZone": {"Leaving": 29277.5, "IntraZonal": 10684.3, "Entering": 29103.7}},
    {"name": "Zone13", "productions": {"HBnoIdea": 0.0, "HBW": 19392.0, "HBNW": 52992.0, "NHB": 21014.9}, "attractions": {"HBnoIdea": 0.0, "HBW": 18774.2, "HBNW": 49067.3, "NHB": 21014.9}, "vehiculeTripsByZone": {"Leaving": 37024.3, "IntraZonal": 23030.5, "Entering": 37032.8}},
    {"name": "Zone14", "productions": {"HBnoIdea": 0.0, "HBW": 22550.0, "HBNW": 61050.0, "NHB": 20147.5}, "attractions": {"HBnoIdea": 0.0, "HBW": 20052.5, "HBNW": 44852.4, "NHB": 20147.5}, "vehiculeTripsByZone": {"Leaving": 32459.4, "IntraZonal": 30255.8, "Entering": 32504.0}},
    {"name": "Zone15", "productions": {"HBnoIdea": 0.0, "HBW": 11275.0, "HBNW": 30525.0, "NHB": 17834.3}, "attractions": {"HBnoIdea": 0.0, "HBW": 16398.5, "HBNW": 41721.9, "NHB": 17834.3}, "vehiculeTripsByZone": {"Leaving": 25562.1, "IntraZonal": 18566.8, "Entering": 25502.2}},
    {"name": "Zone2", "productions": {"HBnoIdea": 0.0, "HBW": 4560.0, "HBNW": 13824.0, "NHB": 5059.6}, "attractions": {"HBnoIdea": 0.0, "HBW": 4970.5, "HBNW": 11383.7, "NHB": 5059.6}, "vehiculeTripsByZone": {"Leaving": 8653.8, "IntraZonal": 6055.3, "Entering": 8654.2}},
    {"name": "Zone3", "productions": {"HBnoIdea": 0.0, "HBW": 5026.8, "HBNW": 16642.4, "NHB": 4094.0}, "attractions": {"HBnoIdea": 0.0, "HBW": 3079.5, "HBNW": 9777.2, "NHB": 4094.0}, "vehiculeTripsByZone": {"Leaving": 11001.3, "IntraZonal": 2879.5, "Entering": 11029.0}},
    {"name": "Zone4", "productions": {"HBnoIdea": 0.0, "HBW": 5420.1, "HBNW": 15112.2, "NHB": 6155.4}, "attractions": {"HBnoIdea": 0.0, "HBW": 4574.7, "HBNW": 15285.2, "NHB": 6155.4}, "vehiculeTripsByZone": {"Leaving": 14333.7, "IntraZonal": 2857.1, "Entering": 14339.8}},
    {"name": "Zone5", "productions": {"HBnoIdea": 0.0, "HBW": 7226.8, "HBNW": 20149.6, "NHB": 4943.6}, "attractions": {"HBnoIdea": 0.0, "HBW": 4230.5, "HBNW": 11742.2, "NHB": 4943.6}, "vehiculeTripsByZone": {"Leaving": 14664.1, "IntraZonal": 2872.0, "Entering": 14703.1}},
    {"name": "Zone6", "productions": {"HBnoIdea": 0.0, "HBW": 3770.1, "HBNW": 12481.8, "NHB": 4990.3}, "attractions": {"HBnoIdea": 0.0, "HBW": 4057.8, "HBNW": 11868.1, "NHB": 4990.3}, "vehiculeTripsByZone": {"Leaving": 9600.0, "IntraZonal": 4066.1, "Entering": 9598.2}},
    {"name": "Zone7 - Universityy", "productions": {"HBnoIdea": 0.0, "HBW": 5760.0, "HBNW": 21600.0, "NHB": 5027.1}, "attractions": {"HBnoIdea": 0.0, "HBW": 3758.0, "HBNW": 12064.4, "NHB": 5027.1}, "vehiculeTripsByZone": {"Leaving": 14346.7, "IntraZonal": 2675.1, "Entering": 14381.1}},
    {"name": "Zone8", "productions": {"HBnoIdea": 0.0, "HBW": 1520.0, "HBNW": 4608.0, "NHB": 18655.3}, "attractions": {"HBnoIdea": 0.0, "HBW": 12936.5, "HBNW": 47366.1, "NHB": 18655.3}, "vehiculeTripsByZone": {"Leaving": 21760.7, "IntraZonal": 10752.6, "Entering": 21594.6}},
    {"name": "Zone9", "productions": {"HBnoIdea": 0.0, "HBW": 11913.0, "HBNW": 31920.0, "NHB": 5663.8}, "attractions": {"HBnoIdea": 0.0, "HBW": 4754.7, "HBNW": 13193.5, "NHB": 5663.8}, "vehiculeTripsByZone": {"Leaving": 19401.2, "IntraZonal": 4530.9, "Entering": 19495.7}}
]