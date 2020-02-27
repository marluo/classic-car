const CAR_DATA = [
    {
        id: 1,
        logo: "https://i.imgur.com/0bIIEAT.png",
        title: 'abarth',
        linkUrl: '/abarth',
        makerText: "Founded as a hillclimb and sports car racing team in 1950, Carlo Abarth's company expanded into producing tuning equipment and engines for various Fiats alongside its own racing models. Such was the cachet of the name that Fiat was glad to have its products branded with the Abarth badge. Its best-known and arguably most fun creations were the tiny and giant-killing Fiat 500 and 600 - based models. After a flirtation with Simca, Abarth was taken over by Fiat in 1971 and continued to denote performance models, although it became little more than a trim level during the 1990s and 2000s. In more recent years it has been relaunched as a separate division by Fiat.",
        items: [
            {
                id: 1,
                name: 'Fiat 750 Zagato',
                routeName: 'Fiat_750_Zagato',
                modelText: "Carlo Abarth's 750 Zagato GT first appeared at the Geneva Motor Show in 1956 and immediately caused a storm. The pretty little coupé and roadster were based on the Fiat 500's running gear, but powered by a tuned version of the Abarth 747cc engine in high-compression form, delivering 446hp. Later versions were available with a twin-cam head that made enough power to take the featherweight sports car to a top speed of 118mph and on the Mille Miglia in 1957. Highly prized.",
                imageUrl: 'https://i.imgur.com/LHmjpJ0.jpg',
                specifications: {
                    YearsProduced: "1957 - 1961",
                    Perfomance: "0-60mph: 15.8sec Top speed: 95mph",
                    PowerAndtorque: "44bhp/44lb ft",
                    Engine: "Normally aspirated 747cc four cylinder, petrol, carburettor, 8 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Separate chassis",
                    Transmission: "Four-speed manual",
                    Weight: "535 kg"  
                },
                PriceGuide: {
                    LaunchPrice: "£2,248",
                    Excellent: "£125,000",
                    Good: "£100,000",
                    Average: "£80,000",
                    Project: "£50,000"
                }
            },
            {
                id: 2,
                name: 'Fiat 850/1000',
                routeName: 'Fiat_850/1000',
                modelText: "The Abarth-converted Fiat 850 and 1000 were front-running European Group 2 Touring Cars, winning the championship on several occasions. Their combination of grip, performance and low price made them highly desirable club-level competition cars, with the fastest examples easily topping 115mph. They remain popular with racers - and, appropriately, they are far better suited to the track than they are the road. Expensive and desirable today, the 1000 Corsa is still the car to beat in the 1000cc category.",
                imageUrl: 'https://i.imgur.com/luWgKJd.jpg',
                specifications: {
                    YearsProduced: "1960 - 1970",
                    Perfomance: "0-60mph: 7.0sec (1000TC Corsa)   Top speed: 118mph",
                    PowerAndtorque: "112bhp/65lb ft",
                    Engine: "Normally aspirated 989cc four cylinders, petrol, carburettor, 8 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Five-speed manual",
                    Weight: "583 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not sold in UK",
                    Excellent: "£95,000",
                    Good: "£70,000",
                    Average: "£50,000",
                    Project: "£30,000"
                }
            },
            {
                id: 3,
                name: 'Simca 1300/2000 GT',
                routeName: 'Simca_1300/2000_GT',
                modelText: "French company Simca had close ties with Fiat, so when it was looking for a porty new model to improve its image it was only natural it should turn to Abarth. Starting with Simca 1000 as a base, Abarth conceived the pretty and extremely potent 1300 GT, which used a bespoke 136bhp twin-cam engine mounted in the tail and higly aerodynamic bodywork. The 1300 GT and its 1600 and 2000 successors (the latter producing 200bhp and reckoned to be capable of 168mph) scored many wins on the track, and are much prized.",
                imageUrl: 'https://i.imgur.com/HjMqhUm.png',
                specifications: {
                    YearsProduced: "1962 - 1965",
                    Perfomance: "0-60mph: 6.8sec (1300 GT) Top speed: 142mph",
                    PowerAndtorque: "136bhp/97lb ft",
                    Engine: "Normally aspirated 1288cc, four cylindres, petrol, carburettor, 8 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Six-speed manual",
                    Weight: "635 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not sold in UK",
                    Excellent: "£260,000 (£320,000)",
                    Good: "£200,000 (£240,000)",
                    Average: "£170,000 (£180,000)",
                    Project: "£85,000 (£110,000)"
                }
            },
            {
                id: 4,
                name: 'Fiat 595/595SS/695SS',
                routeName: 'Fiat_595',
                modelText: "Carlo Abarth cult his performance car teeth on the rear-engine Fiat 500, producing some of Italy's finest pocket rockets. Although based on one of the slowest cars you could buy, the Abarth was every inch a Mini Cooper rival during the 1960s, with the bored-out 695 version packing a 40bhp punch. Abarths feature extrovert styling and, on the right road, will give much more powerful cars a real run for their money. Very rare and relatively valuable in the UK, and well worth seeking out if you like your thrills served on the raw side.",
                imageUrl: 'https://i.imgur.com/wSqEXCY.jpg',
                specifications: {
                    YearsProduced: "1963 - 1971",
                    Perfomance: "0-60mph: N/A Top speed: N/A",
                    PowerAndtorque: "30bhp/33lb ft",
                    Engine: "Normally aspirated 593cc twin, petrol, carburettor, 4 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Four-speed manual",
                    Weight: "500 kg"
                },
                PriceGuide: {
                    LaunchPrice: "N/A in UK",
                    Excellent: "£50,000 (£60,000 for 695SS)",
                    Good: "£37,500 (£45,000)",
                    Average: "£27,500 (£35,000)",
                    Project: "£17,500 (£22,000)"
                }
            },
            {
                id: 5,
                name: 'Fiat 124 Rally Spider',
                routeName: 'Fiat_124_Spider',
                modelText: "Homologation special based on 1800-engined 124 Spider. there's extra power from twin Weber carbs and new exhaust manifold - the last ones even being offered with an optional 16 valve head and the stiffened shell was fitted with lightweight glass fibre bonnet and boot and alloy door skins. All got a rollcage and permanent hardtop. independent rear suspension improved handling and one won the 1972 European rally Championship. 1013 were built, but pure road-going examples are almost impossible to find these days.",
                imageUrl: 'https://i.imgur.com/JtCBJf8.jpg',
                specifications: {
                    YearsProduced: "1972 - 1975 (1013 in total)",
                    Perfomance: "0-60mph: 7.5sec Top speed: 118mph",
                    PowerAndtorque: "128bhp/117lb ft",
                    Engine: "Normally aspirated 175cc four cylinder, petrol, carburettor, 8 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Five-speed manual",
                    Weight: "939 kg"
                },
                PriceGuide: {
                    LaunchPrice: "N/A",
                    Excellent: "£90,000",
                    Good: "£65,000",
                    Average: "£47,500",
                    Project: "£26,000"
                }
            },
        ],
    },
    {
        id: 2,
        logo: 'https://i.imgur.com/yeJqZA9.png',
        title: 'ac',
        linkUrl: '/ac',
        makerText: "BRITAIN'S OLDEST independent car marque, AC – for Auto Carriers - built its first three-wheeled passenger vehicle in 1907. It gradually moved upmarket; four- wheeled vehicles appeared in 1913 and, after WW1, the company expanded into sports cars, It continued after the next war as a struggling specialist manufacturer, even going back to three-wheelers, until it hit paydirt with the Cobra in 1962, its Ace roadster fitted with Ford V8 engines by US racing god Carroll Shelby. The marque limped through the 1970s and '80s with models such as the ME3000 but still exists today - the current AC Cars, led by Alan Lubinsky, builds updated Cobras in South Africa with a 6.2-litre, GM-sourced V8.",
        items: [
            {
                id: 6,
                name: '2-litre',
                routeName: '2-litre',
                modelText: "After WW2 ended, AC resumed the building of low- volume quality cars with this gently sporting 2.0- litre saloon. A four-door was added to the range for 1953, by which time the already ageing triple-carb AC engine's output had risen from 74bhp to 85bhp. Bodies are aluminium over a wood frame and steel chassis; suspension also harks back to days past with solid axles and transverse leaf springs at each end of the car. At least the dampers are hydraulic: an AC first. Cable rear brakes are fitted to early cars, with an all-hydraulic system from 1951.",
                imageUrl: 'https://i.imgur.com/pXXm2wg.jpg',
                specifications: {
                    YearsProduced: "1947 - 1958 (1284 in total)",
                    Perfomance: "0-60mph: 19.9sec Top speed: 80mph",
                    PowerAndtorque: "74bhp/105lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engne RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "1222 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,277",
                    Excellent: "£15,000",
                    Good: "£10,000",
                    Average: "£4,500",
                    Project: "£2,000"
                }
            },
            {
                id: 7,
                name: '2-litre DHC/Buckland',
                routeName: '2-litre_Buckland',
                modelText: "Straightforward drophead version of the saloon was only in production a year, so few were built and all went for export - though most were still right-hand drive. You are more likely to come across one of the Buckland tourers, whose bodies were built by a coachbuilder of that name. These were a lot prettier, with more rounded lines and a fold-flat windscreen. Later examples also got cutaway doors for an even more sporting look, though mechanically they were identical to the saloons. Quite hard to find, but not usually that expensive when you do.",
                imageUrl: 'https://i.imgur.com/CMGnx0E.jpg',
                specifications: {
                    YearsProduced: "1949 - 1956",
                    Perfomance: "0-60mph: 19.9sec Top speed: 80mph",
                    PowerAndtorque: "74bhp/100lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "1320 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not known",
                    Excellent: "£30,000",
                    Good: "£18,500",
                    Average: "£12,000",
                    Project: "£6,000"
                }
            },
            {
                id: 8,
                name: 'Ace (AC engine)',
                routeName: 'Ace',
                modelText: "Designed to raise AC's post-war profile, and to tap into America's new-found enthusiasm for Brit sports cars. The simple but pretty aluminium body clothed a tube-frame chassis with all-independent suspension that gave excellent handling and stole a march over rivals like Jaguar - even if it was by transverse leaf springs. Finned aluminium drum brakes gradually gave way to discs around 1958. Only the engine disappointed. It was AC's own, but had been in production since the 1920s; output grew from 85bhp to 105bhp, but the car needed more.",
                imageUrl: 'https://i.imgur.com/looq0dZ.jpg',
                specifications: {
                    YearsProduced: "1951 - 1962 (223 in total)",
                    Perfomance: "0-60mph: 9.5sec Top speed: 112mph",
                    PowerAndtorque: "85bhp/110lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "762 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,439",
                    Excellent: "£220,000",
                    Good: "£165,000",
                    Average: "£120,000",
                    Project: "£70,000"
                }
            },
            {
                id: 9,
                name: 'Aceca-AC',
                routeName: 'Aceca_AC',
                modelText: "Introduced for 1955, the Aceca was a grand touring coupé version of the Ace, offering more luxury than the roadster that fully justified its extra cost. The basic chassis followed the lines of the Ace, but with heavier-duty main rails, an extra crossmember and rubber mountings for the differential to reduce the amount of road noise transmitted to the cabin. For similar reasons, glassfibre front and rear bulkheads were used. Rather than the tubes of the Ace, doors and tailgate were wood-framed in the traditional manner. Rarity helps keep values strong.",
                imageUrl: 'https://i.imgur.com/IV9ygAa.jpg',
                specifications: {
                    YearsProduced: "1954 - 1963 (151 in total)",
                    Perfomance: "0-60mph: 13.4sec Top speed: 102 mph",
                    PowerAndtorque: "85bhp/110lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "890 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,439",
                    Excellent: "£120,000",
                    Good: "£90,000",
                    Average: "£60,000",
                    Project: "£40,000"
                }
            },
            {
                id: 10,
                name: 'Ace-Bristol',
                routeName: 'Ace_Bristol',
                modelText: "From 1956, all those who had criticised the Ace for its lack of power got an answer (though it was to be the first of many): Bristol's six-cylinder unit of similar capacity was bought in. Of slightly newer and more sophisticated design, most were supplied in 128bhp spec, though a few were delivered with 125 or even 105bhp. The better Bristol gearbox was also used, with overdrive a popular option. They were sold at a price premium alongside other Aces and one was driven to the 1959 Le Mans 24 Hours, winning the 2.0-litre class and finishing seventh overall.",
                imageUrl: 'https://i.imgur.com/4DFBEZf.jpg',
                specifications: {
                    YearsProduced: "1956 - 1962 (463 in total)",
                    Perfomance: "0-60mph: 9.1sec Top speed: 118mph",
                    PowerAndtorque: "125bhp/123lb ft",
                    Engine: "Normally aspirated 1971cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "894 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£2,011",
                    Excellent: "£270,000",
                    Good: "£215,000",
                    Average: "£165,000",
                    Project: "£100,000"
                }
            },
            {
                id: 11,
                name: 'Aceca-Bristol',
                routeName: 'Aceca_Bristol',
                modelText: "In line with the Ace, a Bristol-engined version of the Aceca was added from 1956. Though markedly more expensive than the AC-engined car, it was a much better performer and outsold the lesser car, with 169 leaving the factory. As with all Acecas, you get details such as two rows of four louvres in the bonnet, burr walnut instrument surrounds and glovebox lid, and hinged rear side windows to aid ventilation. Though the car was directly related to the Ace, and had a similar nose and grille, no body panels are the same on both cars. Values on the up.",
                imageUrl: 'https://i.imgur.com/LKOnPZx.jpg',
                specifications: {
                    YearsProduced: "1956 - 1963 (169 in total)",
                    Perfomance: "0-60mph: 10.3sec Top speed: 115mph",
                    PowerAndtorque: "105bhp/123lb ft",
                    Engine: "Normally aspirated 1971cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "895 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,722",
                    Excellent: "£150,000",
                    Good: "£120,000",
                    Average: "£80,000",
                    Project: "£40,000"
                }
            },
            {
                id: 12,
                name: 'Greyhound',
                modelText: "Stylish and dignified four-seat big brother to the Aceca, also panelled in aluminium and fitted with all the same engine choices, though in reality most ordered used the Bristol straight-six, either in 2.0- or 2.2-litre form. No more than three are thought to have received the Zephyr 2.6. Despite a change to coil springs for independent suspension, handling isn't a match for the Aceca and, although only a quarter as many were built as the smaller car, they have never set the market alight in the same way and can be bought for about half as much.",
                imageUrl: 'https://i.imgur.com/0lmIDlk.jpg',
                specifications: {
                    YearsProduced: "1959 - 1963 (83 in total)",
                    Perfomance: "0-60mph: 12.7sec Top speed: 104mphmph",
                    PowerAndtorque: "125bhp/132lb ft",
                    Engine: "Normally aspirated 1971cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "991 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£2,891",
                    Excellent: "£60,000",
                    Good: "£48,000",
                    Average: "£35,000",
                    Project: "£16,000"
                }
            },
            {
                id: 13,
                name: 'Ace RS 2.6',
                modelText: "Introduced in 1961 and originally a Ruddspeed conversion - hence the 'RS' - this used the cheap and cheerful 2.6-litre six-cylinder engine from a Mkll Ford Zephyr. Depending on which state of tune the customer ordered, output could be up to 170bhp (Stage 3, with aluminium head and triple Webers). Even in that most potent form it was still cheaper then the Bristol-engined Ace. Now up to Ace-Bristol prices, only 37 were built and they're recognised by a new nose and grille that would soon adorn Cobras - along with a further eight Aceca coupés.",
                imageUrl: 'https://i.imgur.com/BJWUAhF.jpg',
                specifications: {
                    YearsProduced: "1961 - 1963 (37 in total)",
                    Perfomance: "0-60mph: N/A Top speed: 120mph",
                    PowerAndtorque: "100bhp/133lb ft",
                    Engine: "Normally aspirated 2553cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "813 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not known",
                    Excellent: "£250,000",
                    Good: "£200,000",
                    Average: "£150,000",
                    Project: "£85,000"
                }
            },
            {
                id: 14,
                name: 'Cobra 260/289',
                modelText: "Carroll Shelby's big idea outsold the Ace it was based on, with most sold in the US and none in the UK until 1964. The first 75 used 4.2-litre Ford V8s; those and the next 51 4.7 versions had cam-and-peg steering; after that it was much improved rack-and- pinion. Standard smallblock Cobras have flat faces to their flared arches, though there were 27 AC 289s (no Cobra in name) built from mid-1966 with the big- arched Cobra 427 bodyshell and coil-sprung chassis. Note: the mk2 289 can now fetch as much as a 427, as it is eligible for all historic events.",
                imageUrl: 'https://i.imgur.com/6Ni9XY5.jpg',
                specifications: {
                    YearsProduced: "1961 - 1965 (673 in total)",
                    Perfomance: "0-60mph: 5.5sec Top speed: 138mph",
                    PowerAndtorque: "271bhp/269lb ft",
                    Engine: "Normally aspirated 4727cc V8, petrol, carburettor, 16 valvee",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£2,454",
                    Excellent: "£600,000 (add 40% for 289 mk2)",
                    Good: "£420,000",
                    Average: "£280,000",
                    Project: "£170,000"
                }
            },
            {
                id: 15,
                name: 'Cobra 427',
                modelText: "A complete reworking of the Cobra's chassis was required for the installation of Ford's 'big block 7.0- litre V8s, most of which were the 427ci in various states of tune, though some were sold with smaller- bore/longer-stroke 428ci engines. Chassis tubes were larger, with more crossmembers, and suspension was unequal-length wishbones with coil springs. The body changed, with bulging rear wings to cover much larger tyres, plus aggressively flared front wings. The 31 427 S/C (Semi Competition) models are particularly sought after and valuable.",
                imageUrl: 'https://i.imgur.com/6Ni9XY5.jpg',
                specifications: {
                    YearsProduced: "1965 - 1967 (413 in total)",
                    Perfomance: "0-60mph: 4.2sec Top speed: 165mph",
                    PowerAndtorque: "410bhp/480lb ft",
                    Engine: "Normally aspirated 6997cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "N/A"
                },
                PriceGuide: {
                    LaunchPrice: "Not known",
                    Excellent: "£850,000",
                    Good: "£600,000",
                    Average: "£450,000",
                    Project: "N/A"
                }
            },
            {
                id: 16,
                name: '428/428 Convertible',
                modelText: "Convertible Heavy-hitter from Thames Ditton uses a six-inch- extended Cobra chassis clothed in bodywork - steel this time - by Frua from Turin. Passing resemblance to Frua's Maserati Mistral, but only handles and door-glass frames are shared. Engine is the 7.0- litre Ford Galaxie V8 used in some Cobras, but the 428 was still no bargain. The cost of the bodies and shipping chassis to and from Italy meant prices were 20% higher than for Astons and Jensens. The AC wasn't special enough to justify that and only 51 coupés and 29 Convertibles were sold in six years.",
                imageUrl: 'https://i.imgur.com/XE8XG4X.jpg',
                specifications: {
                    YearsProduced: "1967 - 1973 (80 in total)",
                    Perfomance: "0-60mph: 5.4sec Top speed: 145mph",
                    PowerAndtorque: "345bhp/462lb ft",
                    Engine: "Normally aspirated 7010cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Three-speed automatic",
                    Weight: "1483 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£4,250",
                    Excellent: "£120,000 (add 50% for Convertible)",
                    Good: "£75,000",
                    Average: "£47,500",
                    Project: "£35,000"
                }
            },
            {
                id: 18,
                name: '3000 ME',
                modelText: "An attempt to lift sales by building something more affordable saw AC mid-mounting a Ford V6 transversely over a custom-made transmission. That was one problem: the engine's heavy weight and less-than-sporting output meant only 120mph. Delays in reaching production meant the 3000ME was pitched against the similarly-priced Lotus Esprit. Those volume sales never materialised, with only around 100 built, including a short-lived revival in 1984-85 when licensed to a Scottish factory. Good survival rate and a keen following.",
                imageUrl: 'https://i.imgur.com/cRXuhoX.jpg',
                specifications: {
                    YearsProduced: "1979 - 1985 (100 aprox in total)",
                    Perfomance: "0-60mph: 8.5sec Top speed: 120mph",
                    PowerAndtorque: "138bhp/192lb ft",
                    Engine: "Normally aspirated 2994cc V6, petrol, carburettor, 12 valves",
                    Drivetrain: "Mid-engine RWD",
                    Structure: "Glassfibre body / backbone chassis",
                    Transmission: "Five-speed manual",
                    Weight: "1128 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£12,432",
                    Excellent: "£15,000",
                    Good: "£12,000",
                    Average: "£8,000",
                    Project: "£4,250"
                }
            },
            {
                id: 19,
                name: 'Cobra MkIV',
                modelText: "The arrival of the Cobra MKIV heralded a new era for AC. The Hurlock family passed on the rights of the marque to Brian Angliss, who had been building Autokraft Cobra replicas for years, using much of the original '60s tooling. When they became ACs, these cars were lauded for their high levels of build quality and retention of the original's spirit. Most cars have subsequently had their '80s-era dashboards replaced by '60s replicas, and are good value considering the spiralling values of '60s examples. Add 50% for rare 'Lightweight' version.",
                imageUrl: 'https://i.imgur.com/nVDGi3v.jpg',
                specifications: {
                    YearsProduced: "1983 - 1989 (450 approx in total)",
                    Perfomance: "0-60mph: 5.3sec Top speed: 134mph",
                    PowerAndtorque: "320bhp/385lb ft",
                    Engine: "4942cc V8, petrol, electronic fuel injection, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Five-speed manual",
                    Weight: "N/A"
                },
                PriceGuide: {
                    LaunchPrice: "£25,000",
                    Excellent: "£100,000",
                    Good: "£72,500",
                    Average: "£57,500",
                    Project: "£40,000"
                }
            }
        ]
    },
    // {
    //     id: 4,
    //     logo: 'https://i.imgur.com/9Api2I7.png',
    //     title: 'allard',
    //     linkUrl: '/allard',
    //     makerText: "SYDNEY ALLARD founded the marque that bore his name in 1936, with his first car being based on a Ford V8. The first bespoke Allards came along in 1945, still with Ford V8 engines but now with very distinctive long-nosed bodies. Always competition-orientated, Allards remained rather idiosyncratic and dramatic-looking until the 1950s when a series of roadsters - the K3, Palm Beach and JR - came out, sporting four- and six-cylinder engines as well as V8s. Demand plummeted as rivals produced cheaper, faster, better- looking alternatives. The firm ended up modifying Ford Anglias until 1966 when a fire destroyed the factory. Sydney Allard died at home the same night.",
    //     items: [
    //         {
    //             id: 50,
    //             name: 'L/M',
    //             modelText: "If you enjoy your Allard-shaped kicks with the kids in the back seats then Allard L and M are just the ticket. Effectively just a K1 with a six-inch wheelbase stretch (to 112in) and a pair of occasional seats in the rear, the additional model in the Allard line-up proved surprisingly popular. The M added some civilities such as coil-sprung suspension (from 1949) and a column gearchange. Although most UK cars were fitted with Ford Pilot engines, many were shipped overseas without a powertrain, leaving the owner to chose a suitable local engine.",
    //             imageUrl: 'https://i.imgur.com/VMlDFHG.jpg',
    //             specifications: {
    //                 YearsProduced: "1946 - 1950 (191/500 in total)",
    //                 Perfomance: "0-60: 15.2sec Top speed: 82mph",
    //                 PowerAndtorque: "85bhp/N/A",
    //                 Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 (side) valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Separate chassis",
    //                 Transmission: "Three-speed manual",
    //                 Weight: "1396 kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£1,151",
    //                 Excellent: "£55,000",
    //                 Good: "£40,000",
    //                 Average: "£24,000",
    //                 Project: "£14,000"
    //             }
    //         },
    //         {
    //             id: 51,
    //             name: 'K1/K2',
    //             modelText: "Allard's first post-war sports car was a leap forward. Although it looked ungainly (a subsequent family trait) it was a great car to drive, proving very effective in competition. The technical make-up might have been simple, with a box-section frame, transverse leaf springs and a steel body, but careful chassis development was the key. The fitment of a powerful V8 engine (from the Ford Pilot) delivered plenty of effortless performance. The end result was a charismatic English sports car that has a loyal following to this day. Add c10% for K2.",
    //             imageUrl: 'https://i.imgur.com/6cILJpq.jpg',
    //             specifications: {
    //                 YearsProduced: "1946 - 1951 (151/119 in total)",
    //                 Perfomance: "0-60mph: 13.6sec Top speed: 102mph",
    //                 PowerAndtorque: "85bhp/150lb ft",
    //                 Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Separate chassis",
    //                 Transmission: "Three-speed manual",
    //                 Weight: "1118 kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£1,277",
    //                 Excellent: "£100,000",
    //                 Good: "£70,000",
    //                 Average: "£45,000",
    //                 Project: "£30,000"
    //             }
    //         }, 
    //         {
    //             id: 52,
    //             name: 'P1',
    //             modelText: "Derived from the M 'drophead coupé', the Allard P1 was a hard-topped two-door saloon that broke with tradition for the marque. Although marketed as something of a gentleman's carriage, the P1 couldn't disguise its competition roots, making it an appealing proposition for enthusiastic drivers. Sydney Allard drove one to victory in the 1952 Monte Carlo Rally, making him the only person in the history of the event to win the event in a car bearing his own name. Today, the P1 continues to be well regarded by enthusiasts. Prices on the rise.",
    //             imageUrl: 'https://i.imgur.com/yBDzWN5.jpg',
    //             specifications: {
    //                 YearsProduced: "1949 - 1951 (559 in total)",
    //                 Perfomance: "0-60mph: 15.2sec Top speed: 85mph",
    //                 PowerAndtorque: "85bhp/150lb ft",
    //                 Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Separate chassis",
    //                 Transmission: "Three-speed manual",
    //                 Weight: "1372 kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£1,277",
    //                 Excellent: "£35,000",
    //                 Good: "£26,000",
    //                 Average: "£18,000",
    //                 Project: "£9,000"
    //             }
    //         }, 
    //         {
    //             id: 53,
    //             name: 'J2/J2X',
    //             modelText: "The most celebrated of all the Allards and, despite their rarity, the most likely to come onto the market. In the UK, the J2 came with either the 3.6-litre V8 from the Ford Pilot or a 4.4-litre Mercury unit. In the US, enthusiastic owners fitted a whole range of V8 powerplants. Suspension was more sophisticated than the earlier cars', ensuring excellent handling, and the J2 enjoyed a successful racing career on both sides of the Atlantic. In 1952, Allard introduced the J2X, with the engine pushed further forward, partly to allow more legroom (hence X for extended).",
    //             imageUrl: 'https://i.imgur.com/VRHJ1oE.jpg',
    //             specifications: {
    //                 YearsProduced: "1950 - 1954 (1173 in total - 90 J2, 83 J2X)",
    //                 Perfomance: "0-60mph: 8.6sec Top speed: 111mph",
    //                 PowerAndtorque: "120bhp/221lb ft",
    //                 Engine: "Normally aspirated 4375cc V8, petrol, carburettor, 16 valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Separated chassis",
    //                 Transmission: "Three-speed manual",
    //                 Weight: "914 kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£1,277",
    //                 Excellent: "£275,000",
    //                 Good: "£230,000",
    //                 Average: "£160,000",
    //                 Project: "£100,00"
    //             }
    //         },
    //         {
    //             id: 54,
    //             name: 'K3',
    //             modelText: "Altogether more sophisticated than its earlier relatives, the K3 was Allard's attempt at appealing to more sophisticated buyers with luxuries such as a one-piece bonnet and wide bench seat that was supposed to accommodate the entire family. This being Allard's supposedly softer option, Americans were the target. Problem was, Stateside buyers were looking for the exact opposite in their English sports cars, and so the K3's market failure was disappointing. But it was a pretty car, especially by Allard's standards. Values have been climbing.",
    //             imageUrl: 'https://i.imgur.com/GKgJ4jQ.jpg',
    //             specifications: {
    //                 YearsProduced: "1952 - 1955 (62 in total)",
    //                 Perfomance: "0-60mph: N/A",
    //                 PowerAndtorque: "85bhp/150lb ft",
    //                 Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Separated chassis",
    //                 Transmission: "Three-speed manual",
    //                 Weight: "1181 kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£1,713",
    //                 Excellent: "£110,000",
    //                 Good: "£75,000",
    //                 Average: "£55,000",
    //                 Project: "£35,000"
    //             }
    //         },
    //     ],
    // },
    // {
    //     id: 3,
    //     logo: 'https://i.imgur.com/33Y0AbG.png',
    //     title: 'Alfa-Romeo',
    //     linkUrl: '/alfa-romeo',
    //     makerText: "WHAT STARTED life as Anonima Lombardo Fabbrica Automobili (ALFA) in 1910 in a factory bought from Darracq was taken over by Nicolo Romeo in 1915. Thus began one of the great marques in motoring history. Its original glory days were the 1930s, when Alfa Romeos were among the best cars money could buy. Post-war survival drove them downmarket, but the spirit remained with fine ranges of coupés and spiders to complement the saloons. Sadly that wasn't enough and when financial losses piled too high in the '80s, Fiat headed off a bid from Ford to take control in 1987. In recent times the marque has seen a resurgence with cars like the 8C supercar and the rapid Giulia sports saloon.",
    //     items: [
    //         {
    //             id: 55,
    //             name: 'Giulietta Sprint',
    //             modelText: "Unusually it was the coupé version of the Giulietta line that appeared first. The floorpan would prove adaptable, as the sheer number of variations that subsequently appeared bears testimony to, but for many this remains the most desirable of the mainstream factory cars. The Bertone-styled coupé was treated to a'range of exciting twin-cams; even the original 1290cc version packed a respectable 65bhp. Later Veloce and SS models boasted outputs up to 100bhp. Expect to pay a large premium for Veloce models, especially on a 750-series car.",
    //             imageUrl: 'https://i.imgur.com/A75XOMq.jpg',
    //             specifications: {
    //                 YearsProduced: "1954 - 1962 (27,142 in total)",
    //                 Perfomance: "0-60: 13.0sec Top speed: 101mph",
    //                 PowerAndtorque: "80bhp/72lb ft",
    //                 Engine: "Normally aspirated 1290cc four cylinder, petrol, carburettor, 8 valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Monocoque",
    //                 Transmission: "Four-speed manual",
    //                 Weight: "860 kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£2,261",
    //                 Excellent: "£50,000",
    //                 Good: "£35,000",
    //                 Average: "£25,000",
    //                 Project: "£10,000"
    //             }
    //         },
    //         {
    //             id: 56,
    //             name: 'Guilietta Spider',
    //             modelText: "The Spider was designed by Pininfarina and was an object lesson in Italian style and understatement. It's still great to drive in all forms, and remains in demand today. As with the rest of the family, rust was land is) a serious factor in its survival rate, and the condition of the bodywork and chassis are of paramount importance. They have few mechanical issues, and just about all the mechanical parts are readily available off-the-shelf, so they're not difficult to run. Again, you pay a premium for Veloce models, say specialists Classic Alfa.",
    //             imageUrl: 'https://i.imgur.com/2laovYI.jpg',
    //             specifications: {
    //                 YearsProduced: "1955 - 1962 (17,096 in total)",
    //                 Perfomance: "0-60: 11.8sec Top speed: 113mph",
    //                 PowerAndtorque: "80bhp/72lb ft",
    //                 Engine: "Normally aspirated 1290cc four cylinder, petrol, carburettor, 8 valves",
    //                 Drivetrain: "Front-engine RWD",
    //                 Structure: "Monocoque",
    //                 Transmission: "Four-speed manual",
    //                 Weight: " kg"
    //             },
    //             PriceGuide: {
    //                 LaunchPrice: "£2,116",
    //                 Excellent: "£55,000",
    //                 Good: "£40,000",
    //                 Average: "£25,000",
    //                 Project: "£12,000"
    //             }
    //         },
    //         // {
    //         //     id: 57,
    //         //     name: 'Giulietta berlinda',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 58,
    //         //     name: 'Giulietta Sprint Speciale',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 59,
    //         //     name: '2000/2600 Spider',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },
    //         // {
    //         //     id: 55,
    //         //     name: '',
    //         //     modelText: "",
    //         //     imageUrl: '',
    //         //     specifications: {
    //         //         YearsProduced: "",
    //         //         Perfomance: "0-60: sec Top speed: mph",
    //         //         PowerAndtorque: "",
    //         //         Engine: "",
    //         //         Drivetrain: "",
    //         //         Structure: "",
    //         //         Transmission: "",
    //         //         Weight: " kg"
    //         //     },
    //         //     PriceGuide: {
    //         //         LaunchPrice: "£",
    //         //         Excellent: "£,000",
    //         //         Good: "£,000",
    //         //         Average: "£,000",
    //         //         Project: "£,000"
    //         //     }
    //         // },

    //     ]
    // }
];

export default CAR_DATA;
