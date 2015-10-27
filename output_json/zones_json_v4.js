var zones_json = [
    {"name": "Zone1", "vehiculeTripsByZone": {"Entering": 31471.9, "Leaving": 31396.0, "IntraZonal": 8224.2}, "attractions": {"NHB": 11615.3, "HBnoIdea": 0.0, "HBW": 10162.0, "HBNW": 26337.1}, "productions": {"NHB": 11615.3, "HBnoIdea": 0.0, "HBW": 15200.0, "HBNW": 46080.0}},
    {"name": "Zone10", "vehiculeTripsByZone": {"Entering": 54432.1, "Leaving": 54199.6, "IntraZonal": 14637.1}, "attractions": {"NHB": 16608.8, "HBnoIdea": 0.0, "HBW": 16135.7, "HBNW": 35961.5}, "productions": {"NHB": 16608.8, "HBnoIdea": 0.0, "HBW": 32520.6, "HBNW": 90673.2}},
    {"name": "Zone11", "vehiculeTripsByZone": {"Entering": 32943.4, "Leaving": 32930.1, "IntraZonal": 7553.9}, "attractions": {"NHB": 14653.1, "HBnoIdea": 0.0, "HBW": 11307.2, "HBNW": 35832.2}, "productions": {"NHB": 14653.1, "HBnoIdea": 0.0, "HBW": 12978.0, "HBNW": 35091.0}},
    {"name": "Zone12", "vehiculeTripsByZone": {"Entering": 54047.7, "Leaving": 54314.7, "IntraZonal": 11653.7}, "attractions": {"NHB": 34773.2, "HBnoIdea": 0.0, "HBW": 23249.7, "HBNW": 89731.6}, "productions": {"NHB": 34773.2, "HBnoIdea": 0.0, "HBW": 6080.0, "HBNW": 18432.0}},
    {"name": "Zone13", "vehiculeTripsByZone": {"Entering": 80704.1, "Leaving": 80686.9, "IntraZonal": 37330.4}, "attractions": {"NHB": 40877.2, "HBnoIdea": 0.0, "HBW": 39187.3, "HBNW": 92951.2}, "productions": {"NHB": 40877.2, "HBnoIdea": 0.0, "HBW": 38784.0, "HBNW": 105984.0}},
    {"name": "Zone14", "vehiculeTripsByZone": {"Entering": 54018.8, "Leaving": 54050.2, "IntraZonal": 20634.5}, "attractions": {"NHB": 27379.1, "HBnoIdea": 0.0, "HBW": 25700.7, "HBNW": 63414.8}, "productions": {"NHB": 27379.1, "HBnoIdea": 0.0, "HBW": 22550.0, "HBNW": 61050.0}},
    {"name": "Zone15", "vehiculeTripsByZone": {"Entering": 45356.9, "Leaving": 45500.8, "IntraZonal": 11056.6}, "attractions": {"NHB": 24777.0, "HBnoIdea": 0.0, "HBW": 22330.2, "HBNW": 60064.7}, "productions": {"NHB": 24777.0, "HBnoIdea": 0.0, "HBW": 11275.0, "HBNW": 30525.0}},
    {"name": "Zone2", "vehiculeTripsByZone": {"Entering": 20936.9, "Leaving": 20914.5, "IntraZonal": 5946.2}, "attractions": {"NHB": 8713.1, "HBnoIdea": 0.0, "HBW": 8005.7, "HBNW": 19789.0}, "productions": {"NHB": 8713.1, "HBnoIdea": 0.0, "HBW": 9120.0, "HBNW": 27648.0}},
    {"name": "Zone3", "vehiculeTripsByZone": {"Entering": 23476.7, "Leaving": 23406.8, "IntraZonal": 2657.6}, "attractions": {"NHB": 7340.2, "HBnoIdea": 0.0, "HBW": 4962.4, "HBNW": 17585.5}, "productions": {"NHB": 7340.2, "HBnoIdea": 0.0, "HBW": 10053.6, "HBNW": 33284.8}},
    {"name": "Zone4", "vehiculeTripsByZone": {"Entering": 28086.8, "Leaving": 28049.3, "IntraZonal": 2760.2}, "attractions": {"NHB": 10339.1, "HBnoIdea": 0.0, "HBW": 7319.6, "HBNW": 25774.3}, "productions": {"NHB": 10339.1, "HBnoIdea": 0.0, "HBW": 10840.2, "HBNW": 30224.4}},
    {"name": "Zone5", "vehiculeTripsByZone": {"Entering": 29898.1, "Leaving": 29801.5, "IntraZonal": 3053.0}, "attractions": {"NHB": 8808.6, "HBnoIdea": 0.0, "HBW": 6966.4, "HBNW": 20947.8}, "productions": {"NHB": 8808.6, "HBnoIdea": 0.0, "HBW": 14453.6, "HBNW": 40299.2}},
    {"name": "Zone6", "vehiculeTripsByZone": {"Entering": 21245.3, "Leaving": 21212.9, "IntraZonal": 1737.9}, "attractions": {"NHB": 7553.0, "HBnoIdea": 0.0, "HBW": 4986.8, "HBNW": 18644.7}, "productions": {"NHB": 7553.0, "HBnoIdea": 0.0, "HBW": 7540.2, "HBNW": 24963.6}},
    {"name": "Zone7 - Universityy", "vehiculeTripsByZone": {"Entering": 29989.7, "Leaving": 29918.7, "IntraZonal": 3930.0}, "attractions": {"NHB": 9954.7, "HBnoIdea": 0.0, "HBW": 7147.9, "HBNW": 23499.0}, "productions": {"NHB": 9954.7, "HBnoIdea": 0.0, "HBW": 11520.0, "HBNW": 43200.0}},
    {"name": "Zone8", "vehiculeTripsByZone": {"Entering": 40496.2, "Leaving": 40785.4, "IntraZonal": 15425.8}, "attractions": {"NHB": 31186.4, "HBnoIdea": 0.0, "HBW": 23289.1, "HBNW": 78606.0}, "productions": {"NHB": 31186.4, "HBnoIdea": 0.0, "HBW": 3040.0, "HBNW": 9216.0}},
    {"name": "Zone9", "vehiculeTripsByZone": {"Entering": 25894.1, "Leaving": 25831.6, "IntraZonal": 2618.3}, "attractions": {"NHB": 8161.7, "HBnoIdea": 0.0, "HBW": 7117.3, "HBNW": 19451.8}, "productions": {"NHB": 8161.7, "HBnoIdea": 0.0, "HBW": 11913.0, "HBNW": 31920.0}}
]