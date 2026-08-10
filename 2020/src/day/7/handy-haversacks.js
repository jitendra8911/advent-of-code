const input = 'wavy turquoise bags contain no other bags.\n' +
    'vibrant beige bags contain 4 drab lime bags, 1 muted violet bag, 5 drab plum bags, 5 shiny silver bags.\n' +
    'plaid green bags contain 2 pale olive bags, 1 dark chartreuse bag, 1 vibrant olive bag, 1 pale bronze bag.\n' +
    'plaid fuchsia bags contain 5 dull teal bags, 4 dark beige bags, 4 shiny teal bags, 5 vibrant orange bags.\n' +
    'vibrant coral bags contain 1 dotted blue bag.\n' +
    'drab tan bags contain 5 drab maroon bags, 5 bright silver bags, 2 dim tan bags.\n' +
    'light gray bags contain 3 dotted crimson bags, 3 dull chartreuse bags, 1 light maroon bag.\n' +
    'mirrored tomato bags contain 5 clear orange bags, 2 striped violet bags.\n' +
    'pale brown bags contain 1 faded fuchsia bag, 2 wavy orange bags, 1 mirrored coral bag, 5 dotted brown bags.\n' +
    'muted maroon bags contain 5 drab gold bags, 2 vibrant aqua bags, 5 bright crimson bags.\n' +
    'light purple bags contain 4 dim teal bags, 3 vibrant bronze bags, 2 dark chartreuse bags, 1 shiny green bag.\n' +
    'muted white bags contain 3 wavy lime bags, 5 muted lavender bags, 1 pale salmon bag, 1 dotted red bag.\n' +
    'plaid yellow bags contain 2 plaid gold bags, 2 faded lavender bags, 2 faded fuchsia bags, 3 faded gold bags.\n' +
    'plaid white bags contain 1 dull cyan bag, 4 pale cyan bags, 1 clear red bag, 5 vibrant orange bags.\n' +
    'wavy teal bags contain 5 wavy violet bags, 5 shiny silver bags.\n' +
    'pale crimson bags contain 1 wavy white bag, 5 clear tomato bags, 2 dark plum bags, 3 bright turquoise bags.\n' +
    'posh green bags contain 2 muted black bags, 3 light magenta bags.\n' +
    'striped maroon bags contain 1 bright green bag, 4 dark coral bags.\n' +
    'pale red bags contain 5 faded turquoise bags, 4 plaid crimson bags, 5 dark aqua bags.\n' +
    'vibrant chartreuse bags contain 2 pale red bags.\n' +
    'faded fuchsia bags contain no other bags.\n' +
    'pale olive bags contain 3 striped blue bags, 5 faded magenta bags, 3 light white bags.\n' +
    'striped tomato bags contain 4 faded plum bags.\n' +
    'shiny cyan bags contain 1 clear tomato bag, 4 clear magenta bags, 3 plaid teal bags, 5 dotted indigo bags.\n' +
    'plaid silver bags contain 3 dotted beige bags.\n' +
    'posh teal bags contain 3 faded black bags, 2 vibrant lavender bags, 5 light lavender bags, 5 faded lime bags.\n' +
    'clear gray bags contain 5 pale black bags, 2 dull salmon bags.\n' +
    'bright white bags contain 2 shiny olive bags, 5 dim brown bags, 1 dull crimson bag.\n' +
    'striped gold bags contain 3 mirrored yellow bags, 1 posh brown bag, 5 clear cyan bags, 3 striped tan bags.\n' +
    'light black bags contain 2 light lavender bags, 2 dotted bronze bags.\n' +
    'vibrant orange bags contain 3 posh plum bags, 5 light tan bags, 5 dim gold bags, 4 vibrant aqua bags.\n' +
    'dark chartreuse bags contain 3 striped purple bags, 2 dull beige bags, 5 wavy brown bags.\n' +
    'mirrored magenta bags contain 4 drab purple bags, 4 dotted brown bags, 2 light fuchsia bags.\n' +
    'striped magenta bags contain 1 drab gray bag, 1 wavy yellow bag, 5 drab plum bags.\n' +
    'dotted teal bags contain 4 pale indigo bags.\n' +
    'plaid red bags contain 4 clear fuchsia bags, 2 vibrant brown bags.\n' +
    'dotted green bags contain 2 striped teal bags, 3 muted bronze bags, 4 light red bags.\n' +
    'vibrant purple bags contain 2 drab plum bags, 4 dim beige bags, 4 drab aqua bags.\n' +
    'light indigo bags contain 1 dotted plum bag.\n' +
    'wavy green bags contain 1 shiny aqua bag, 2 dark lavender bags.\n' +
    'faded gray bags contain 2 plaid green bags.\n' +
    'dull purple bags contain 4 dull salmon bags, 1 plaid chartreuse bag, 1 dull tan bag, 4 pale green bags.\n' +
    'posh yellow bags contain 2 dim teal bags.\n' +
    'pale orange bags contain 4 mirrored red bags, 2 dotted chartreuse bags, 2 light yellow bags, 3 posh red bags.\n' +
    'dark tomato bags contain 1 light magenta bag, 4 light black bags, 2 vibrant aqua bags.\n' +
    'light cyan bags contain 1 shiny red bag, 2 plaid green bags, 4 clear cyan bags, 5 wavy tomato bags.\n' +
    'pale lavender bags contain 2 pale gray bags, 3 dotted violet bags, 2 striped lavender bags, 5 drab magenta bags.\n' +
    'dim coral bags contain 4 bright black bags, 1 shiny tan bag, 1 faded chartreuse bag, 1 bright silver bag.\n' +
    'muted purple bags contain 2 wavy yellow bags.\n' +
    'pale chartreuse bags contain 3 dotted red bags, 4 striped salmon bags, 4 pale brown bags, 2 dull yellow bags.\n' +
    'light red bags contain 3 bright crimson bags.\n' +
    'bright green bags contain 2 plaid fuchsia bags, 5 light lavender bags, 3 dotted cyan bags.\n' +
    'plaid purple bags contain 4 wavy tan bags, 5 plaid teal bags, 5 dull teal bags, 1 shiny gold bag.\n' +
    'vibrant gray bags contain 1 dull beige bag.\n' +
    'dotted orange bags contain 2 light green bags, 5 dotted brown bags, 4 pale blue bags.\n' +
    'dull black bags contain 5 pale silver bags, 4 pale lavender bags.\n' +
    'dull blue bags contain 1 striped turquoise bag, 2 dotted red bags, 5 dark white bags.\n' +
    'clear turquoise bags contain 3 dim beige bags, 5 faded brown bags.\n' +
    'pale magenta bags contain 1 dark violet bag, 1 dark yellow bag, 2 wavy aqua bags, 5 light silver bags.\n' +
    'bright teal bags contain 1 dark beige bag, 1 pale gold bag, 1 dim magenta bag.\n' +
    'pale plum bags contain 3 vibrant yellow bags, 1 dotted beige bag.\n' +
    'dull lime bags contain 1 faded coral bag, 4 plaid gold bags, 3 drab white bags.\n' +
    'vibrant olive bags contain 1 plaid teal bag, 1 faded tan bag.\n' +
    'muted magenta bags contain 5 clear gold bags.\n' +
    'dull olive bags contain 4 clear cyan bags, 1 dotted tan bag.\n' +
    'dim orange bags contain 3 drab lime bags, 1 drab plum bag, 2 vibrant tomato bags, 1 plaid blue bag.\n' +
    'wavy crimson bags contain 2 plaid gold bags, 3 light olive bags, 4 vibrant fuchsia bags.\n' +
    'clear tan bags contain 3 dotted beige bags, 2 dark purple bags.\n' +
    'plaid bronze bags contain 1 mirrored violet bag.\n' +
    'muted brown bags contain 4 dotted indigo bags, 5 dull crimson bags.\n' +
    'dull fuchsia bags contain 2 dotted gold bags, 2 striped violet bags, 1 clear lime bag, 3 shiny fuchsia bags.\n' +
    'mirrored gold bags contain 2 mirrored purple bags, 4 plaid aqua bags.\n' +
    'vibrant turquoise bags contain 1 light maroon bag, 3 dim teal bags, 1 dull brown bag.\n' +
    'shiny green bags contain 2 plaid orange bags.\n' +
    'dark crimson bags contain 1 striped purple bag, 4 vibrant salmon bags.\n' +
    'bright gray bags contain 4 plaid blue bags, 1 faded lime bag, 4 pale salmon bags, 3 bright bronze bags.\n' +
    'wavy salmon bags contain 1 wavy coral bag, 3 bright blue bags.\n' +
    'faded blue bags contain 3 muted fuchsia bags, 1 plaid lavender bag, 3 posh brown bags.\n' +
    'posh tomato bags contain 4 dim gold bags, 2 shiny gold bags.\n' +
    'striped yellow bags contain 3 vibrant turquoise bags, 3 dim salmon bags, 4 vibrant yellow bags, 2 faded beige bags.\n' +
    'light beige bags contain 5 striped purple bags, 3 muted gold bags.\n' +
    'wavy indigo bags contain 1 muted chartreuse bag, 2 wavy purple bags, 2 mirrored coral bags, 4 muted teal bags.\n' +
    'striped tan bags contain 4 light fuchsia bags, 2 dim chartreuse bags, 3 vibrant black bags, 1 muted black bag.\n' +
    'pale fuchsia bags contain 5 vibrant aqua bags, 5 drab purple bags, 5 shiny olive bags, 5 drab indigo bags.\n' +
    'pale cyan bags contain 5 dull teal bags.\n' +
    'dull chartreuse bags contain 5 wavy brown bags.\n' +
    'bright coral bags contain 3 clear orange bags, 3 shiny brown bags, 4 pale teal bags.\n' +
    'light magenta bags contain 3 light white bags, 1 clear indigo bag, 3 vibrant salmon bags, 3 dark crimson bags.\n' +
    'dull bronze bags contain 5 dotted gold bags, 4 dark olive bags, 3 vibrant magenta bags.\n' +
    'light lime bags contain 4 vibrant cyan bags.\n' +
    'muted aqua bags contain 3 dotted red bags, 2 wavy blue bags, 3 vibrant orange bags.\n' +
    'light violet bags contain 3 light green bags.\n' +
    'dotted red bags contain 1 muted teal bag, 4 striped tan bags, 3 wavy teal bags.\n' +
    'pale purple bags contain 4 dotted cyan bags, 1 dim magenta bag.\n' +
    'dim beige bags contain 5 dotted yellow bags, 4 faded magenta bags, 1 muted beige bag, 2 pale bronze bags.\n' +
    'light bronze bags contain 5 faded bronze bags, 2 drab bronze bags, 5 dark gold bags, 2 light purple bags.\n' +
    'wavy violet bags contain 5 light white bags, 3 light tan bags.\n' +
    'vibrant aqua bags contain 3 wavy turquoise bags, 4 dull beige bags.\n' +
    'pale bronze bags contain 5 light lavender bags, 4 dull beige bags, 3 bright crimson bags.\n' +
    'bright salmon bags contain 5 mirrored bronze bags, 5 dull orange bags, 2 shiny salmon bags.\n' +
    'muted blue bags contain 3 shiny yellow bags, 5 light yellow bags, 5 vibrant gold bags, 2 dotted coral bags.\n' +
    'dotted silver bags contain 1 plaid fuchsia bag, 5 light beige bags, 4 drab lime bags.\n' +
    'mirrored black bags contain 2 dull salmon bags.\n' +
    'bright black bags contain 4 faded magenta bags.\n' +
    'bright beige bags contain 2 mirrored salmon bags.\n' +
    'bright indigo bags contain 4 clear brown bags, 3 bright green bags.\n' +
    'mirrored lavender bags contain 3 shiny tan bags, 4 dark purple bags, 2 striped tan bags.\n' +
    'light aqua bags contain 2 light magenta bags, 5 vibrant tan bags, 5 drab plum bags, 1 plaid tomato bag.\n' +
    'mirrored maroon bags contain 4 vibrant tomato bags.\n' +
    'posh turquoise bags contain 1 striped white bag, 3 dim lavender bags, 3 posh teal bags, 2 mirrored salmon bags.\n' +
    'shiny gray bags contain 1 vibrant beige bag, 3 light tan bags, 4 wavy teal bags.\n' +
    'wavy black bags contain 4 dark tomato bags, 3 dim gold bags, 4 dark beige bags.\n' +
    'drab silver bags contain 2 light green bags, 3 light gold bags, 4 drab plum bags, 1 dotted yellow bag.\n' +
    'pale violet bags contain 1 dull beige bag, 2 shiny teal bags, 1 light lavender bag, 3 mirrored red bags.\n' +
    'dark blue bags contain 1 dotted indigo bag, 1 clear tomato bag.\n' +
    'dull teal bags contain 5 vibrant salmon bags, 3 vibrant aqua bags, 5 wavy tan bags, 5 striped purple bags.\n' +
    'faded tomato bags contain 2 shiny chartreuse bags, 4 clear orange bags, 5 bright orange bags.\n' +
    'mirrored red bags contain 5 muted beige bags, 2 faded white bags.\n' +
    'mirrored lime bags contain 4 posh crimson bags, 5 pale turquoise bags, 3 wavy blue bags.\n' +
    'mirrored crimson bags contain 1 faded white bag, 2 dark crimson bags, 3 striped cyan bags.\n' +
    'light teal bags contain 3 clear indigo bags, 1 wavy tan bag, 4 dim gold bags.\n' +
    'wavy chartreuse bags contain 5 wavy plum bags, 2 shiny salmon bags, 3 clear olive bags.\n' +
    'shiny black bags contain 2 drab aqua bags, 4 dull brown bags, 5 wavy silver bags, 1 vibrant brown bag.\n' +
    'bright violet bags contain 2 striped magenta bags, 4 vibrant gray bags.\n' +
    'muted tomato bags contain 1 drab turquoise bag.\n' +
    'muted teal bags contain 3 dotted blue bags.\n' +
    'dim cyan bags contain 3 dotted blue bags, 1 vibrant coral bag.\n' +
    'striped fuchsia bags contain 1 shiny gold bag, 5 dark beige bags, 5 mirrored indigo bags.\n' +
    'clear bronze bags contain 3 striped orange bags, 2 vibrant tomato bags.\n' +
    'vibrant lavender bags contain 2 muted beige bags, 4 shiny teal bags, 4 dull beige bags.\n' +
    'light olive bags contain 5 shiny yellow bags, 1 vibrant cyan bag.\n' +
    'shiny fuchsia bags contain 4 dim brown bags, 2 dull chartreuse bags.\n' +
    'plaid turquoise bags contain 3 bright green bags, 4 light fuchsia bags, 2 light lavender bags.\n' +
    'shiny brown bags contain 5 mirrored plum bags.\n' +
    'pale white bags contain 4 dull magenta bags, 1 posh purple bag, 4 pale olive bags, 4 wavy olive bags.\n' +
    'pale yellow bags contain 1 bright blue bag.\n' +
    'dark salmon bags contain 3 wavy turquoise bags, 1 dotted plum bag, 3 faded white bags, 5 dim tan bags.\n' +
    'shiny crimson bags contain 5 faded coral bags.\n' +
    'pale green bags contain 2 posh beige bags, 5 dark silver bags.\n' +
    'dim gray bags contain 4 dull cyan bags, 2 muted salmon bags, 4 mirrored tan bags, 1 bright violet bag.\n' +
    'dim blue bags contain 4 light orange bags, 4 wavy beige bags.\n' +
    'mirrored cyan bags contain 3 pale cyan bags.\n' +
    'dark aqua bags contain 2 striped blue bags, 5 light white bags, 4 drab gray bags.\n' +
    'wavy tan bags contain no other bags.\n' +
    'light tan bags contain 1 clear aqua bag.\n' +
    'light silver bags contain 1 light green bag, 2 pale bronze bags, 1 bright crimson bag, 1 vibrant aqua bag.\n' +
    'plaid tan bags contain 5 posh silver bags, 1 shiny beige bag.\n' +
    'shiny white bags contain 1 pale olive bag.\n' +
    'dotted brown bags contain 1 bright silver bag, 5 light tan bags, 4 light coral bags.\n' +
    'shiny bronze bags contain 2 vibrant plum bags, 2 wavy teal bags, 1 bright red bag, 5 clear tomato bags.\n' +
    'striped violet bags contain 5 vibrant gray bags, 3 dark maroon bags, 4 dotted fuchsia bags, 4 plaid purple bags.\n' +
    'dull plum bags contain 4 dark gray bags, 1 wavy aqua bag, 2 muted aqua bags, 5 striped crimson bags.\n' +
    'posh blue bags contain 1 dotted bronze bag, 5 muted indigo bags, 2 light tan bags.\n' +
    'posh tan bags contain 4 shiny gold bags, 3 drab maroon bags.\n' +
    'striped aqua bags contain 4 muted bronze bags, 5 bright blue bags, 1 wavy tan bag.\n' +
    'shiny silver bags contain 1 light green bag.\n' +
    'dark white bags contain 4 drab purple bags.\n' +
    'dull green bags contain 5 wavy bronze bags, 5 faded white bags.\n' +
    'clear chartreuse bags contain 3 dark gray bags.\n' +
    'posh coral bags contain 2 shiny lime bags, 4 light blue bags, 3 muted bronze bags.\n' +
    'faded magenta bags contain 1 dull maroon bag, 4 shiny teal bags, 1 plaid teal bag.\n' +
    'drab brown bags contain 1 drab violet bag.\n' +
    'pale salmon bags contain 4 plaid gray bags, 2 wavy violet bags.\n' +
    'mirrored aqua bags contain 1 faded turquoise bag, 5 dull aqua bags.\n' +
    'striped gray bags contain 5 dark maroon bags, 3 shiny plum bags.\n' +
    'mirrored salmon bags contain 4 clear cyan bags, 2 vibrant olive bags, 2 striped silver bags, 3 muted lavender bags.\n' +
    'wavy purple bags contain 1 shiny beige bag.\n' +
    'plaid indigo bags contain 1 plaid plum bag.\n' +
    'plaid gray bags contain 5 pale blue bags, 3 shiny gold bags.\n' +
    'bright yellow bags contain 2 drab bronze bags, 3 drab teal bags.\n' +
    'drab red bags contain 4 drab indigo bags, 1 mirrored blue bag, 2 dull aqua bags, 4 light magenta bags.\n' +
    'dull white bags contain 2 muted black bags, 1 dim beige bag, 1 dark beige bag.\n' +
    'clear silver bags contain 5 muted bronze bags, 1 muted tan bag, 3 light aqua bags, 1 wavy fuchsia bag.\n' +
    'dark black bags contain 2 pale fuchsia bags, 5 pale brown bags, 5 drab black bags.\n' +
    'mirrored silver bags contain 4 drab plum bags, 3 shiny white bags, 5 muted crimson bags, 5 dull aqua bags.\n' +
    'dim tomato bags contain 3 drab red bags, 1 drab lime bag, 4 striped gray bags.\n' +
    'faded bronze bags contain 5 clear indigo bags, 2 dotted blue bags.\n' +
    'striped crimson bags contain 1 plaid tomato bag, 2 dull yellow bags, 3 plaid purple bags.\n' +
    'wavy olive bags contain 4 mirrored red bags, 4 drab indigo bags.\n' +
    'dotted turquoise bags contain 2 mirrored lavender bags, 4 light maroon bags, 2 pale teal bags, 1 mirrored crimson bag.\n' +
    'muted violet bags contain 5 shiny olive bags.\n' +
    'bright orange bags contain 4 pale tan bags, 1 striped fuchsia bag, 5 shiny olive bags.\n' +
    'striped turquoise bags contain 1 posh salmon bag, 5 shiny indigo bags, 4 wavy violet bags.\n' +
    'dull indigo bags contain 3 plaid plum bags, 4 faded plum bags, 3 dull violet bags.\n' +
    'posh black bags contain 4 clear brown bags, 4 vibrant cyan bags, 1 light white bag.\n' +
    'shiny orange bags contain 5 striped purple bags, 3 muted beige bags.\n' +
    'striped plum bags contain 5 dull salmon bags, 3 dull orange bags, 1 clear lime bag, 3 mirrored indigo bags.\n' +
    'clear white bags contain 4 wavy crimson bags, 3 plaid magenta bags.\n' +
    'pale tan bags contain 5 muted indigo bags.\n' +
    'dark red bags contain 3 bright magenta bags, 1 muted salmon bag, 4 vibrant gray bags, 5 clear green bags.\n' +
    'dark yellow bags contain 3 dim teal bags.\n' +
    'clear aqua bags contain no other bags.\n' +
    'vibrant white bags contain 2 drab yellow bags, 4 vibrant aqua bags, 2 plaid maroon bags.\n' +
    'posh lime bags contain 5 vibrant black bags.\n' +
    'clear teal bags contain 1 shiny olive bag, 5 bright aqua bags, 4 bright violet bags.\n' +
    'dotted indigo bags contain 2 muted fuchsia bags, 3 mirrored gray bags.\n' +
    'posh olive bags contain 5 clear maroon bags, 2 dim teal bags, 2 drab plum bags, 4 shiny olive bags.\n' +
    'dark coral bags contain 4 clear red bags.\n' +
    'dark olive bags contain 4 vibrant black bags.\n' +
    'faded olive bags contain 2 bright gray bags, 5 dull white bags.\n' +
    'dotted purple bags contain 1 faded brown bag, 5 dark purple bags.\n' +
    'faded plum bags contain 2 pale brown bags, 4 dark aqua bags.\n' +
    'bright plum bags contain 2 vibrant brown bags, 1 bright black bag, 1 dotted gold bag.\n' +
    'faded lavender bags contain 4 clear violet bags, 4 striped purple bags.\n' +
    'faded silver bags contain 4 dotted blue bags, 2 light purple bags, 1 bright chartreuse bag, 3 striped white bags.\n' +
    'bright cyan bags contain 5 dotted lime bags, 5 shiny gray bags, 1 faded orange bag, 5 clear indigo bags.\n' +
    'plaid tomato bags contain 1 clear violet bag, 3 muted beige bags.\n' +
    'wavy aqua bags contain 1 light tan bag.\n' +
    'dotted gold bags contain 5 mirrored indigo bags, 5 dull tan bags.\n' +
    'faded teal bags contain 5 plaid black bags, 2 clear turquoise bags.\n' +
    'striped white bags contain 2 dull aqua bags, 1 mirrored violet bag, 4 vibrant salmon bags.\n' +
    'mirrored violet bags contain 2 vibrant salmon bags, 1 clear brown bag.\n' +
    'drab magenta bags contain 3 muted lime bags, 2 bright orange bags.\n' +
    'pale teal bags contain 3 light black bags, 4 dim black bags, 2 muted gray bags.\n' +
    'dark teal bags contain 5 dark tomato bags, 4 dull teal bags, 5 striped white bags, 5 plaid aqua bags.\n' +
    'dim purple bags contain 5 wavy magenta bags, 2 muted fuchsia bags, 5 mirrored bronze bags.\n' +
    'clear violet bags contain 5 wavy turquoise bags, 5 light black bags, 1 mirrored indigo bag, 2 faded white bags.\n' +
    'dim indigo bags contain 3 dull teal bags.\n' +
    'dotted olive bags contain 4 dark red bags, 2 mirrored beige bags.\n' +
    'posh aqua bags contain 1 posh blue bag, 4 dotted black bags, 4 pale tomato bags.\n' +
    'clear orange bags contain 1 striped magenta bag, 3 wavy aqua bags.\n' +
    'plaid cyan bags contain 5 vibrant lavender bags, 2 light gold bags, 2 wavy orange bags, 4 bright turquoise bags.\n' +
    'mirrored green bags contain 4 plaid fuchsia bags.\n' +
    'dark silver bags contain 3 light coral bags.\n' +
    'wavy silver bags contain 5 plaid yellow bags, 5 pale orange bags.\n' +
    'plaid crimson bags contain 4 vibrant salmon bags, 4 vibrant blue bags, 1 light teal bag, 3 bright crimson bags.\n' +
    'mirrored bronze bags contain 1 dark coral bag, 2 clear orange bags, 4 plaid orange bags, 2 vibrant gray bags.\n' +
    'faded aqua bags contain 5 light white bags, 3 drab gray bags, 1 plaid beige bag.\n' +
    'drab yellow bags contain 1 dotted black bag, 2 dim silver bags.\n' +
    'dark beige bags contain 4 wavy tan bags, 5 light lavender bags, 5 dotted bronze bags.\n' +
    'clear green bags contain 5 shiny purple bags, 5 light teal bags, 5 pale bronze bags.\n' +
    'dotted lavender bags contain 4 wavy orange bags, 4 dull chartreuse bags.\n' +
    'bright chartreuse bags contain 2 dotted cyan bags, 3 pale olive bags, 4 vibrant salmon bags.\n' +
    'faded red bags contain 3 dull cyan bags, 3 drab indigo bags, 5 light green bags, 4 dark lime bags.\n' +
    'plaid brown bags contain 2 dotted salmon bags, 3 striped silver bags, 1 light blue bag.\n' +
    'dull beige bags contain no other bags.\n' +
    'dim violet bags contain 3 striped lavender bags, 5 dotted coral bags, 1 clear blue bag.\n' +
    'vibrant red bags contain 1 dark coral bag, 3 light gold bags.\n' +
    'faded violet bags contain 3 pale gold bags.\n' +
    'muted salmon bags contain 3 wavy turquoise bags.\n' +
    'vibrant gold bags contain 2 shiny teal bags.\n' +
    'dull coral bags contain 3 posh gold bags, 4 wavy olive bags.\n' +
    'mirrored fuchsia bags contain 5 wavy lime bags.\n' +
    'dotted plum bags contain 3 bright bronze bags, 3 light coral bags, 5 mirrored orange bags, 4 plaid gray bags.\n' +
    'dim fuchsia bags contain 4 light indigo bags, 5 faded red bags, 5 plaid orange bags.\n' +
    'dull brown bags contain 2 dim gold bags.\n' +
    'faded indigo bags contain 3 wavy olive bags, 1 shiny green bag.\n' +
    'pale coral bags contain 5 faded crimson bags.\n' +
    'light orange bags contain 3 bright gold bags, 1 striped magenta bag, 4 plaid lavender bags, 5 light green bags.\n' +
    'clear salmon bags contain 3 dim tan bags, 1 light lavender bag.\n' +
    'vibrant indigo bags contain 1 dark beige bag, 2 posh purple bags.\n' +
    'clear cyan bags contain 5 posh brown bags.\n' +
    'dull red bags contain 3 drab gold bags, 3 dark aqua bags, 5 dim maroon bags.\n' +
    'dim red bags contain 5 faded black bags, 2 shiny lime bags.\n' +
    'dark indigo bags contain 5 dull green bags, 2 striped white bags, 3 dotted indigo bags.\n' +
    'pale tomato bags contain 4 vibrant gold bags.\n' +
    'dim turquoise bags contain 4 plaid tomato bags, 2 plaid gray bags, 4 shiny violet bags.\n' +
    'dotted yellow bags contain 5 dotted plum bags, 3 muted beige bags, 4 light fuchsia bags, 1 wavy olive bag.\n' +
    'dim gold bags contain 3 muted beige bags.\n' +
    'mirrored orange bags contain 5 drab maroon bags, 4 dull teal bags, 1 faded tan bag, 2 dark aqua bags.\n' +
    'light chartreuse bags contain 4 vibrant gold bags, 5 dark silver bags, 3 pale purple bags.\n' +
    'posh silver bags contain 5 dotted silver bags, 4 dark chartreuse bags, 1 striped magenta bag.\n' +
    'vibrant black bags contain 5 muted red bags, 1 pale purple bag, 2 clear indigo bags, 4 faded magenta bags.\n' +
    'faded maroon bags contain 2 clear cyan bags, 4 wavy orange bags, 2 shiny blue bags.\n' +
    'bright lavender bags contain 5 dull chartreuse bags.\n' +
    'drab black bags contain 1 posh plum bag, 5 mirrored maroon bags, 3 dark yellow bags.\n' +
    'drab gray bags contain 4 clear violet bags, 3 mirrored red bags, 1 light silver bag, 1 wavy turquoise bag.\n' +
    'faded turquoise bags contain 2 light tan bags, 5 faded coral bags.\n' +
    'dark purple bags contain 5 pale cyan bags.\n' +
    'muted beige bags contain no other bags.\n' +
    'dull maroon bags contain 2 wavy turquoise bags, 5 light lavender bags, 5 muted beige bags.\n' +
    'bright tomato bags contain 3 plaid blue bags.\n' +
    'dim crimson bags contain 3 drab turquoise bags, 2 faded crimson bags, 2 plaid chartreuse bags.\n' +
    'clear magenta bags contain 3 light green bags, 5 dotted red bags, 1 mirrored indigo bag, 1 dim brown bag.\n' +
    'dotted aqua bags contain 5 clear crimson bags, 1 wavy orange bag.\n' +
    'dark fuchsia bags contain 1 dull maroon bag.\n' +
    'faded salmon bags contain 2 wavy yellow bags, 3 faded plum bags.\n' +
    'muted chartreuse bags contain 5 light gold bags, 1 bright bronze bag, 5 light beige bags, 4 light black bags.\n' +
    'muted lavender bags contain 3 mirrored coral bags.\n' +
    'drab fuchsia bags contain 3 plaid brown bags.\n' +
    'dim plum bags contain 4 vibrant brown bags, 3 plaid beige bags, 3 dark crimson bags, 4 bright teal bags.\n' +
    'shiny magenta bags contain 1 muted black bag.\n' +
    'wavy magenta bags contain 2 faded lavender bags, 1 bright gray bag, 3 pale olive bags.\n' +
    'mirrored plum bags contain 5 muted maroon bags.\n' +
    'wavy plum bags contain 5 dark crimson bags.\n' +
    'striped lavender bags contain 4 vibrant yellow bags, 2 vibrant lavender bags.\n' +
    'faded beige bags contain 4 pale indigo bags, 5 vibrant tomato bags.\n' +
    'shiny gold bags contain 4 drab gray bags, 4 light coral bags.\n' +
    'dotted beige bags contain 5 drab maroon bags, 1 shiny gold bag, 3 light lavender bags.\n' +
    'dull yellow bags contain 3 pale bronze bags, 1 bright silver bag.\n' +
    'muted green bags contain 3 faded red bags, 2 plaid green bags, 3 plaid black bags, 1 light yellow bag.\n' +
    'vibrant silver bags contain 5 striped purple bags, 3 shiny olive bags, 4 vibrant lavender bags.\n' +
    'dim green bags contain 4 vibrant gold bags, 5 muted maroon bags, 1 plaid aqua bag, 2 posh silver bags.\n' +
    'faded lime bags contain 2 shiny white bags.\n' +
    'bright bronze bags contain 5 muted gold bags, 3 light black bags.\n' +
    'shiny yellow bags contain 5 light green bags, 5 wavy brown bags.\n' +
    'dark cyan bags contain 5 light teal bags, 1 posh yellow bag, 3 shiny aqua bags.\n' +
    'striped blue bags contain 1 muted gold bag, 4 dull maroon bags, 3 clear red bags, 5 faded fuchsia bags.\n' +
    'dim tan bags contain 1 bright tan bag.\n' +
    'shiny red bags contain 3 plaid turquoise bags, 1 dotted cyan bag, 1 pale fuchsia bag.\n' +
    'vibrant brown bags contain 5 dim magenta bags, 4 drab white bags.\n' +
    'dull turquoise bags contain 2 bright orange bags, 4 bright gray bags, 3 dim chartreuse bags.\n' +
    'dark bronze bags contain 3 striped green bags, 2 wavy tan bags, 2 faded lime bags, 3 bright olive bags.\n' +
    'striped green bags contain 4 light black bags, 2 drab bronze bags, 4 dotted bronze bags, 3 plaid orange bags.\n' +
    'dark brown bags contain 5 drab indigo bags, 3 plaid white bags, 1 pale lime bag.\n' +
    'dotted black bags contain 4 dull beige bags, 4 drab lavender bags.\n' +
    'striped cyan bags contain 2 vibrant orange bags, 3 clear violet bags, 2 mirrored gray bags.\n' +
    'clear tomato bags contain 5 shiny gold bags, 1 dim chartreuse bag, 4 dark crimson bags, 5 shiny white bags.\n' +
    'light white bags contain 3 pale violet bags, 4 drab plum bags, 4 drab gray bags, 1 vibrant lavender bag.\n' +
    'plaid black bags contain 4 vibrant orange bags, 5 bright gray bags.\n' +
    'drab salmon bags contain 4 faded coral bags.\n' +
    'shiny maroon bags contain 3 pale black bags, 2 bright magenta bags.\n' +
    'striped black bags contain 1 plaid fuchsia bag, 4 plaid black bags, 1 mirrored beige bag.\n' +
    'muted bronze bags contain 5 faded red bags, 5 plaid green bags.\n' +
    'bright tan bags contain 1 wavy yellow bag, 5 light fuchsia bags, 5 plaid teal bags.\n' +
    'plaid gold bags contain 5 faded black bags, 1 vibrant black bag.\n' +
    'wavy tomato bags contain 5 plaid fuchsia bags, 2 mirrored violet bags, 3 dark yellow bags, 1 bright gold bag.\n' +
    'faded tan bags contain 5 vibrant salmon bags, 5 plaid teal bags, 4 clear aqua bags, 2 pale violet bags.\n' +
    'light crimson bags contain 3 mirrored tomato bags, 5 plaid green bags.\n' +
    'wavy bronze bags contain 1 light teal bag.\n' +
    'faded yellow bags contain 3 clear beige bags, 4 bright bronze bags.\n' +
    'muted gold bags contain 5 plaid teal bags, 2 faded fuchsia bags, 4 bright crimson bags.\n' +
    'shiny tan bags contain 5 dark salmon bags, 5 light red bags.\n' +
    'bright gold bags contain 2 faded chartreuse bags, 2 dim green bags, 3 striped cyan bags.\n' +
    'pale turquoise bags contain 1 pale tan bag, 5 dark violet bags.\n' +
    'wavy orange bags contain 5 plaid teal bags, 1 pale bronze bag, 4 wavy tan bags, 1 clear red bag.\n' +
    'dim silver bags contain 3 dark lime bags, 1 dotted beige bag.\n' +
    'faded cyan bags contain 2 dull maroon bags, 5 clear tan bags, 1 dull coral bag, 2 posh lavender bags.\n' +
    'dim white bags contain 1 dull maroon bag, 3 dull brown bags.\n' +
    'vibrant bronze bags contain 5 faded chartreuse bags.\n' +
    'dotted fuchsia bags contain 4 vibrant salmon bags, 2 faded white bags.\n' +
    'faded gold bags contain 2 dark maroon bags, 2 bright chartreuse bags, 1 dull brown bag.\n' +
    'dim brown bags contain 3 dull yellow bags, 4 faded chartreuse bags, 5 vibrant silver bags.\n' +
    'light yellow bags contain 2 striped silver bags.\n' +
    'striped coral bags contain 1 muted blue bag, 1 dim aqua bag, 4 posh red bags, 5 plaid lime bags.\n' +
    'dark magenta bags contain 2 pale violet bags, 2 vibrant tomato bags, 5 clear orange bags.\n' +
    'posh indigo bags contain 2 clear red bags, 4 clear violet bags, 2 shiny chartreuse bags, 5 dull white bags.\n' +
    'light tomato bags contain 4 clear indigo bags.\n' +
    'light plum bags contain 2 mirrored maroon bags.\n' +
    'drab violet bags contain 5 dark aqua bags, 1 vibrant magenta bag.\n' +
    'pale gray bags contain 1 striped lime bag, 4 clear bronze bags.\n' +
    'dark plum bags contain 2 dark olive bags.\n' +
    'plaid lavender bags contain 4 pale brown bags.\n' +
    'mirrored olive bags contain 1 faded coral bag.\n' +
    'drab green bags contain 2 dull silver bags, 2 clear purple bags, 3 posh violet bags, 2 light blue bags.\n' +
    'bright maroon bags contain 4 faded yellow bags, 4 dotted bronze bags, 2 dark brown bags.\n' +
    'striped purple bags contain 2 faded fuchsia bags, 5 posh plum bags.\n' +
    'wavy gray bags contain 4 dark violet bags, 4 plaid orange bags.\n' +
    'drab plum bags contain 3 light lavender bags, 1 striped blue bag, 5 bright crimson bags.\n' +
    'faded orange bags contain 4 light teal bags, 4 dim chartreuse bags, 2 vibrant yellow bags.\n' +
    'dim salmon bags contain 2 pale coral bags, 1 drab aqua bag.\n' +
    'muted silver bags contain 1 clear chartreuse bag, 2 clear tan bags, 5 dotted tan bags, 4 clear black bags.\n' +
    'muted yellow bags contain 3 wavy blue bags, 1 striped lavender bag.\n' +
    'wavy gold bags contain 5 faded gold bags, 1 shiny green bag, 1 mirrored cyan bag.\n' +
    'dull gold bags contain 1 striped green bag.\n' +
    'bright brown bags contain 4 drab plum bags, 4 pale violet bags, 5 vibrant blue bags.\n' +
    'bright crimson bags contain 2 wavy tan bags, 4 shiny teal bags.\n' +
    'mirrored gray bags contain 2 dull beige bags, 4 light white bags, 5 pale brown bags.\n' +
    'dull tan bags contain 4 dim magenta bags, 1 light teal bag.\n' +
    'mirrored yellow bags contain 1 drab lavender bag, 4 shiny gold bags, 3 drab turquoise bags, 2 light silver bags.\n' +
    'muted indigo bags contain 5 mirrored coral bags, 3 dark crimson bags.\n' +
    'dull aqua bags contain 4 drab lime bags, 3 shiny crimson bags, 1 drab salmon bag.\n' +
    'dim aqua bags contain 2 shiny lavender bags, 5 pale coral bags.\n' +
    'shiny chartreuse bags contain 1 clear maroon bag, 4 shiny blue bags.\n' +
    'dotted magenta bags contain 3 light olive bags.\n' +
    'faded green bags contain 4 faded beige bags, 5 dotted gold bags, 5 striped lavender bags, 5 wavy blue bags.\n' +
    'drab orange bags contain 3 muted fuchsia bags.\n' +
    'dim magenta bags contain 1 shiny orange bag.\n' +
    'shiny olive bags contain 2 wavy aqua bags.\n' +
    'dark orange bags contain 1 clear black bag, 1 faded gray bag.\n' +
    'light lavender bags contain no other bags.\n' +
    'bright turquoise bags contain 2 dull beige bags, 5 shiny teal bags, 5 posh brown bags, 5 dark beige bags.\n' +
    'faded purple bags contain 2 dark white bags, 2 pale salmon bags.\n' +
    'drab olive bags contain 1 dark silver bag, 4 plaid yellow bags, 3 drab gold bags, 2 mirrored yellow bags.\n' +
    'dull gray bags contain 3 vibrant turquoise bags, 5 faded chartreuse bags.\n' +
    'striped bronze bags contain 3 faded turquoise bags, 2 vibrant gray bags, 3 dotted beige bags, 3 dull beige bags.\n' +
    'wavy fuchsia bags contain 2 shiny purple bags, 2 plaid crimson bags, 1 dark cyan bag.\n' +
    'pale aqua bags contain 4 dotted tan bags, 1 dim yellow bag, 5 shiny lime bags.\n' +
    'pale silver bags contain 2 shiny brown bags.\n' +
    'shiny aqua bags contain 1 pale salmon bag, 5 faded chartreuse bags, 1 plaid aqua bag, 4 shiny silver bags.\n' +
    'posh brown bags contain 5 vibrant orange bags, 4 bright silver bags, 5 wavy orange bags, 3 dim chartreuse bags.\n' +
    'striped lime bags contain 5 drab violet bags, 4 light turquoise bags, 2 bright turquoise bags.\n' +
    'muted tan bags contain 2 striped purple bags, 4 posh yellow bags.\n' +
    'drab purple bags contain 2 clear red bags.\n' +
    'plaid magenta bags contain 2 pale blue bags, 5 plaid crimson bags.\n' +
    'mirrored tan bags contain 3 pale purple bags.\n' +
    'light blue bags contain 4 light tan bags.\n' +
    'clear black bags contain 2 pale blue bags, 4 dim gold bags, 2 vibrant gold bags.\n' +
    'light gold bags contain 1 wavy turquoise bag, 3 drab plum bags, 1 clear violet bag.\n' +
    'bright olive bags contain 3 light lavender bags, 1 faded tan bag, 3 shiny gold bags, 1 dotted cyan bag.\n' +
    'dark maroon bags contain 4 muted gold bags, 2 shiny yellow bags.\n' +
    'wavy lime bags contain 3 plaid green bags, 5 mirrored silver bags, 4 mirrored green bags, 3 dotted beige bags.\n' +
    'drab white bags contain 3 clear red bags, 3 bright silver bags, 4 posh red bags, 2 shiny blue bags.\n' +
    'clear lime bags contain 4 dotted orange bags.\n' +
    'vibrant maroon bags contain 2 dull orange bags, 5 vibrant crimson bags.\n' +
    'pale black bags contain 1 pale cyan bag, 5 dim tan bags, 4 shiny purple bags, 4 faded fuchsia bags.\n' +
    'vibrant tomato bags contain 2 mirrored orange bags.\n' +
    'dotted gray bags contain 3 dotted purple bags.\n' +
    'drab gold bags contain 4 shiny gold bags.\n' +
    'mirrored teal bags contain 3 shiny magenta bags, 3 mirrored beige bags, 3 dotted silver bags, 5 mirrored indigo bags.\n' +
    'posh lavender bags contain 2 wavy teal bags, 4 striped violet bags, 1 vibrant gold bag.\n' +
    'dark lavender bags contain 3 light blue bags, 2 muted beige bags, 3 clear magenta bags, 1 light tan bag.\n' +
    'muted cyan bags contain 4 dull gold bags, 1 dim yellow bag, 4 striped cyan bags, 2 dim gold bags.\n' +
    'dim maroon bags contain 5 shiny purple bags.\n' +
    'shiny purple bags contain 5 pale violet bags, 2 light fuchsia bags, 2 mirrored red bags.\n' +
    'vibrant lime bags contain 4 bright orange bags, 1 posh beige bag.\n' +
    'vibrant teal bags contain 2 posh turquoise bags, 3 pale tomato bags, 3 dark bronze bags.\n' +
    'posh fuchsia bags contain 3 striped plum bags, 2 drab aqua bags.\n' +
    'dotted violet bags contain 5 plaid black bags, 1 clear salmon bag, 2 dull chartreuse bags.\n' +
    'clear gold bags contain 2 dull violet bags, 3 muted white bags.\n' +
    'dull cyan bags contain 4 pale violet bags, 2 light gold bags, 4 dark tomato bags.\n' +
    'posh beige bags contain 5 mirrored cyan bags, 5 dotted red bags, 3 clear purple bags, 3 posh white bags.\n' +
    'dotted maroon bags contain 3 pale orange bags, 1 striped black bag, 4 faded fuchsia bags.\n' +
    'dotted tomato bags contain 5 striped magenta bags, 4 striped orange bags, 3 muted teal bags, 3 bright black bags.\n' +
    'drab teal bags contain 5 striped tan bags, 4 dull green bags, 5 muted coral bags, 1 clear red bag.\n' +
    'vibrant magenta bags contain 5 bright orange bags, 4 mirrored gray bags, 1 faded tan bag, 4 faded brown bags.\n' +
    'posh crimson bags contain 5 light lime bags, 1 faded brown bag, 2 posh red bags.\n' +
    'dull lavender bags contain 4 clear green bags, 5 wavy orange bags, 5 posh green bags, 3 plaid orange bags.\n' +
    'wavy yellow bags contain 2 light teal bags.\n' +
    'dotted bronze bags contain 3 clear red bags, 4 posh plum bags, 4 light lavender bags, 4 faded fuchsia bags.\n' +
    'dim olive bags contain 2 dotted chartreuse bags.\n' +
    'dark gray bags contain 3 shiny olive bags.\n' +
    'posh salmon bags contain 1 pale purple bag, 2 clear tomato bags, 4 shiny gold bags.\n' +
    'shiny coral bags contain 3 dark olive bags, 2 dull fuchsia bags, 1 dull gold bag.\n' +
    'vibrant green bags contain 2 light fuchsia bags, 5 vibrant violet bags, 3 dotted blue bags.\n' +
    'pale lime bags contain 4 vibrant gold bags, 5 dotted yellow bags.\n' +
    'vibrant yellow bags contain 5 clear violet bags, 1 dark maroon bag.\n' +
    'pale beige bags contain 4 faded red bags, 4 striped green bags.\n' +
    'dim bronze bags contain 5 posh chartreuse bags, 5 light white bags.\n' +
    'clear fuchsia bags contain 5 posh yellow bags, 4 faded fuchsia bags.\n' +
    'faded chartreuse bags contain 5 drab purple bags, 1 wavy olive bag, 3 light black bags, 1 dotted brown bag.\n' +
    'mirrored turquoise bags contain 1 faded fuchsia bag, 2 mirrored blue bags.\n' +
    'light maroon bags contain 4 dotted blue bags, 4 muted gold bags, 3 faded lavender bags.\n' +
    'muted crimson bags contain 5 posh bronze bags.\n' +
    'mirrored blue bags contain 1 faded lavender bag, 5 bright chartreuse bags, 4 dotted brown bags.\n' +
    'striped brown bags contain 2 clear cyan bags, 4 vibrant orange bags, 5 shiny tan bags.\n' +
    'muted orange bags contain 3 dotted black bags, 4 clear beige bags, 2 plaid beige bags, 1 mirrored coral bag.\n' +
    'clear beige bags contain 3 wavy tan bags, 5 dark aqua bags.\n' +
    'bright silver bags contain 3 striped purple bags.\n' +
    'muted plum bags contain 5 light purple bags, 1 light lavender bag, 2 drab maroon bags, 1 posh black bag.\n' +
    'vibrant salmon bags contain 1 shiny teal bag.\n' +
    'dotted chartreuse bags contain 4 vibrant gold bags.\n' +
    'shiny lime bags contain 3 dotted crimson bags, 3 striped crimson bags.\n' +
    'wavy brown bags contain 1 pale violet bag, 3 light beige bags, 2 wavy aqua bags, 4 dim teal bags.\n' +
    'clear yellow bags contain 3 dotted tan bags.\n' +
    'bright red bags contain 1 dim tomato bag, 5 clear tan bags, 2 posh red bags, 5 mirrored yellow bags.\n' +
    'drab tomato bags contain 1 drab yellow bag.\n' +
    'dull crimson bags contain 1 dotted brown bag, 2 bright gray bags, 4 dim tan bags.\n' +
    'shiny beige bags contain 2 plaid teal bags.\n' +
    'dotted coral bags contain 4 plaid teal bags, 2 pale turquoise bags, 4 dark lime bags, 2 pale purple bags.\n' +
    'shiny plum bags contain 5 dull coral bags, 1 shiny gold bag.\n' +
    'light coral bags contain 2 pale bronze bags, 1 clear aqua bag.\n' +
    'vibrant cyan bags contain 1 muted fuchsia bag, 4 pale tan bags, 1 shiny green bag, 1 dotted blue bag.\n' +
    'bright purple bags contain 4 faded white bags.\n' +
    'mirrored chartreuse bags contain 2 shiny orange bags.\n' +
    'light brown bags contain 4 striped violet bags, 4 striped purple bags, 3 wavy yellow bags, 2 drab blue bags.\n' +
    'clear brown bags contain 1 clear indigo bag, 2 dark coral bags.\n' +
    'vibrant fuchsia bags contain 4 dull tan bags, 4 vibrant bronze bags, 1 light white bag, 5 vibrant tomato bags.\n' +
    'clear crimson bags contain 5 muted tomato bags.\n' +
    'muted red bags contain 2 dull beige bags, 2 dark turquoise bags, 1 dark fuchsia bag.\n' +
    'dull salmon bags contain 2 bright tan bags, 5 faded white bags, 4 muted beige bags, 1 dull cyan bag.\n' +
    'drab lavender bags contain 1 dark chartreuse bag.\n' +
    'vibrant plum bags contain 1 dark violet bag, 2 mirrored red bags, 3 muted purple bags, 5 dull blue bags.\n' +
    'drab maroon bags contain 3 plaid teal bags, 4 muted beige bags, 4 posh gold bags, 5 mirrored coral bags.\n' +
    'posh magenta bags contain 4 wavy tomato bags, 3 wavy beige bags.\n' +
    'striped olive bags contain 3 shiny plum bags, 4 plaid gold bags.\n' +
    'vibrant crimson bags contain 2 dim chartreuse bags.\n' +
    'drab lime bags contain 1 vibrant aqua bag.\n' +
    'wavy maroon bags contain 2 dark tan bags, 4 faded brown bags, 4 dim silver bags, 1 muted lime bag.\n' +
    'dull tomato bags contain 2 dotted bronze bags, 5 vibrant maroon bags, 4 plaid tan bags.\n' +
    'dim teal bags contain 5 muted beige bags, 2 mirrored indigo bags, 4 vibrant lavender bags.\n' +
    'wavy white bags contain 1 muted white bag, 1 dim chartreuse bag.\n' +
    'bright lime bags contain 3 dull gold bags, 2 dull indigo bags, 4 drab teal bags.\n' +
    'plaid aqua bags contain 4 light lavender bags, 4 posh gold bags, 3 wavy violet bags, 5 muted chartreuse bags.\n' +
    'mirrored purple bags contain 3 dark lavender bags, 3 clear salmon bags, 1 plaid white bag, 1 striped violet bag.\n' +
    'plaid maroon bags contain 4 dotted red bags, 1 mirrored coral bag, 5 muted indigo bags, 1 clear turquoise bag.\n' +
    'dark turquoise bags contain 4 bright crimson bags, 2 dotted bronze bags, 2 pale violet bags, 5 wavy aqua bags.\n' +
    'dull silver bags contain 2 wavy olive bags, 5 shiny violet bags.\n' +
    'muted olive bags contain 5 plaid beige bags, 3 dark brown bags, 1 clear black bag, 4 faded red bags.\n' +
    'drab indigo bags contain 1 pale violet bag.\n' +
    'muted lime bags contain 5 striped violet bags, 2 plaid lavender bags.\n' +
    'drab blue bags contain 1 pale tomato bag.\n' +
    'drab bronze bags contain 3 vibrant blue bags, 1 vibrant bronze bag.\n' +
    'muted gray bags contain 4 dim chartreuse bags.\n' +
    'striped teal bags contain 4 dark coral bags.\n' +
    'light green bags contain 2 plaid teal bags, 5 pale bronze bags, 3 dull teal bags.\n' +
    'plaid salmon bags contain 3 bright chartreuse bags.\n' +
    'dotted blue bags contain 4 drab plum bags, 1 light tan bag.\n' +
    'dark violet bags contain 5 dark coral bags, 5 dotted lavender bags, 5 pale brown bags, 1 vibrant lavender bag.\n' +
    'pale gold bags contain 1 bright silver bag, 2 dark cyan bags, 1 dull tan bag, 1 plaid blue bag.\n' +
    'light turquoise bags contain 3 drab turquoise bags, 1 dull tan bag, 3 muted indigo bags, 5 dotted fuchsia bags.\n' +
    'plaid blue bags contain 3 pale violet bags, 4 dotted brown bags.\n' +
    'bright magenta bags contain 4 shiny brown bags, 4 wavy violet bags, 3 dark aqua bags, 2 bright turquoise bags.\n' +
    'clear maroon bags contain 4 posh plum bags.\n' +
    'posh red bags contain 5 plaid cyan bags, 4 clear orange bags.\n' +
    'posh purple bags contain 5 plaid cyan bags, 1 drab lavender bag, 3 pale purple bags, 4 light coral bags.\n' +
    'dim lime bags contain 2 striped beige bags, 2 dark blue bags.\n' +
    'shiny indigo bags contain 2 vibrant black bags, 2 wavy orange bags.\n' +
    'posh gold bags contain 5 dull beige bags, 1 shiny teal bag.\n' +
    'wavy beige bags contain 2 dark beige bags, 4 muted chartreuse bags, 2 dim lavender bags, 2 mirrored indigo bags.\n' +
    'dim lavender bags contain 2 vibrant aqua bags.\n' +
    'mirrored beige bags contain 2 posh red bags, 3 pale olive bags, 3 dull brown bags.\n' +
    'clear indigo bags contain 1 shiny teal bag, 1 mirrored indigo bag.\n' +
    'dim chartreuse bags contain 5 bright tan bags.\n' +
    'plaid coral bags contain 2 clear green bags.\n' +
    'wavy cyan bags contain 2 drab blue bags, 5 dotted coral bags, 3 mirrored beige bags.\n' +
    'dotted crimson bags contain 1 muted tan bag, 4 dull maroon bags, 2 striped crimson bags.\n' +
    'drab cyan bags contain 1 dull cyan bag, 3 pale cyan bags, 4 faded aqua bags, 4 clear tan bags.\n' +
    'wavy coral bags contain 4 wavy plum bags, 5 plaid beige bags, 5 pale tan bags.\n' +
    'pale maroon bags contain 5 pale tan bags.\n' +
    'shiny blue bags contain 3 light coral bags, 4 bright olive bags.\n' +
    'plaid orange bags contain 2 dim white bags, 3 shiny silver bags, 3 pale violet bags.\n' +
    'dark tan bags contain 2 vibrant olive bags, 3 plaid turquoise bags, 2 dull chartreuse bags, 4 dull teal bags.\n' +
    'posh cyan bags contain 5 posh orange bags, 5 shiny brown bags.\n' +
    'clear red bags contain no other bags.\n' +
    'light fuchsia bags contain 4 dark beige bags, 1 light black bag, 1 striped blue bag.\n' +
    'striped beige bags contain 2 bright silver bags, 2 faded indigo bags, 1 plaid turquoise bag, 3 shiny plum bags.\n' +
    'wavy lavender bags contain 4 posh black bags, 1 dotted teal bag, 4 drab purple bags.\n' +
    'dotted cyan bags contain 5 dull yellow bags, 5 light beige bags, 2 vibrant aqua bags, 5 dark beige bags.\n' +
    'drab crimson bags contain 5 dark magenta bags.\n' +
    'plaid olive bags contain 1 vibrant crimson bag, 5 dim bronze bags, 1 striped black bag, 1 drab brown bag.\n' +
    'dim yellow bags contain 3 plaid gray bags, 5 vibrant salmon bags, 4 vibrant olive bags.\n' +
    'striped indigo bags contain 3 mirrored coral bags, 2 vibrant bronze bags, 3 dull brown bags.\n' +
    'dark green bags contain 3 shiny teal bags, 5 pale chartreuse bags, 5 dull teal bags, 5 striped silver bags.\n' +
    'drab aqua bags contain 5 dark aqua bags, 5 dotted blue bags, 1 pale violet bag, 1 pale bronze bag.\n' +
    'striped orange bags contain 3 striped green bags, 4 muted beige bags, 2 clear aqua bags, 3 dark crimson bags.\n' +
    'striped silver bags contain 1 pale cyan bag, 5 drab gold bags, 3 bright turquoise bags, 4 light gold bags.\n' +
    'bright blue bags contain 4 light black bags, 1 plaid salmon bag.\n' +
    'striped red bags contain 1 vibrant plum bag, 5 dull blue bags, 1 dull olive bag.\n' +
    'posh white bags contain 3 drab bronze bags, 4 bright crimson bags.\n' +
    'drab turquoise bags contain 4 striped crimson bags.\n' +
    'clear lavender bags contain 4 faded magenta bags, 1 mirrored gray bag, 4 wavy yellow bags, 1 dotted cyan bag.\n' +
    'drab chartreuse bags contain 1 shiny gray bag.\n' +
    'clear purple bags contain 1 shiny brown bag, 2 bright gray bags, 5 clear salmon bags.\n' +
    'dull magenta bags contain 1 posh cyan bag, 3 muted indigo bags, 1 dim lavender bag.\n' +
    'posh chartreuse bags contain 4 wavy violet bags.\n' +
    'posh maroon bags contain 4 striped gray bags.\n' +
    'clear blue bags contain 3 faded lime bags, 2 pale purple bags.\n' +
    'dark gold bags contain 2 dull beige bags, 3 plaid blue bags.\n' +
    'muted coral bags contain 4 dark gold bags.\n' +
    'bright aqua bags contain 3 muted crimson bags.\n' +
    'dull orange bags contain 3 posh gold bags.\n' +
    'shiny turquoise bags contain 3 dark brown bags, 5 shiny red bags, 3 muted beige bags.\n' +
    'mirrored brown bags contain 2 light orange bags, 5 drab coral bags, 2 wavy lime bags.\n' +
    'striped chartreuse bags contain 1 dark lavender bag, 4 pale salmon bags, 4 dotted violet bags, 4 clear tomato bags.\n' +
    'shiny salmon bags contain 4 dim magenta bags.\n' +
    'bright fuchsia bags contain 4 muted chartreuse bags, 3 mirrored green bags.\n' +
    'shiny tomato bags contain 5 clear gray bags, 2 drab silver bags, 3 clear green bags.\n' +
    'muted turquoise bags contain 5 shiny orange bags, 1 mirrored tan bag.\n' +
    'vibrant tan bags contain 1 faded magenta bag, 5 drab plum bags.\n' +
    'posh gray bags contain 2 posh magenta bags.\n' +
    'dark lime bags contain 5 clear aqua bags, 3 posh plum bags.\n' +
    'plaid violet bags contain 2 light bronze bags, 1 light green bag, 1 striped gold bag.\n' +
    'vibrant blue bags contain 2 wavy yellow bags, 4 dim magenta bags, 1 drab maroon bag, 4 dotted brown bags.\n' +
    'faded brown bags contain 2 pale blue bags, 4 bright olive bags, 1 bright bronze bag.\n' +
    'striped salmon bags contain 4 light green bags, 4 wavy orange bags, 3 mirrored coral bags.\n' +
    'plaid lime bags contain 1 bright green bag, 2 light indigo bags.\n' +
    'plaid chartreuse bags contain 4 vibrant green bags, 5 dotted coral bags, 2 muted gray bags, 4 bright purple bags.\n' +
    'light salmon bags contain 5 vibrant maroon bags, 3 dark lime bags, 5 drab tan bags, 1 striped cyan bag.\n' +
    'muted fuchsia bags contain 4 light silver bags, 3 light teal bags, 3 muted gold bags.\n' +
    'clear plum bags contain 5 light turquoise bags.\n' +
    'posh orange bags contain 5 wavy tan bags, 4 dark turquoise bags.\n' +
    'dotted tan bags contain 2 plaid teal bags.\n' +
    'shiny teal bags contain no other bags.\n' +
    'posh violet bags contain 2 vibrant tomato bags, 4 bright orange bags, 3 dotted red bags, 5 pale silver bags.\n' +
    'dotted lime bags contain 5 wavy tan bags, 2 dark tomato bags, 5 mirrored gray bags, 2 light aqua bags.\n' +
    'posh plum bags contain no other bags.\n' +
    'mirrored white bags contain 4 clear gold bags, 1 dark teal bag.\n' +
    'pale indigo bags contain 4 shiny magenta bags, 1 shiny maroon bag.\n' +
    'drab beige bags contain 1 muted plum bag, 5 posh turquoise bags, 2 vibrant fuchsia bags.\n' +
    'faded black bags contain 5 wavy black bags.\n' +
    'plaid beige bags contain 2 posh purple bags, 4 pale olive bags, 3 striped green bags, 5 bright orange bags.\n' +
    'faded white bags contain 4 clear red bags, 4 faded fuchsia bags, 1 dull beige bag.\n' +
    'shiny violet bags contain 3 shiny green bags, 5 wavy brown bags.\n' +
    'wavy blue bags contain 2 light teal bags, 4 dull silver bags, 2 bright black bags, 4 dull tan bags.\n' +
    'wavy red bags contain 4 dark silver bags, 5 dotted chartreuse bags, 2 clear salmon bags, 2 striped tan bags.\n' +
    'shiny lavender bags contain 2 muted bronze bags.\n' +
    'faded coral bags contain 5 dotted chartreuse bags, 2 vibrant silver bags, 2 wavy black bags.\n' +
    'clear coral bags contain 4 muted fuchsia bags.\n' +
    'mirrored coral bags contain 1 vibrant lavender bag.\n' +
    'dim black bags contain 2 bright olive bags, 1 dull teal bag, 4 shiny purple bags.\n' +
    'pale blue bags contain 1 light black bag, 2 light white bags, 1 dull maroon bag, 5 plaid teal bags.\n' +
    'plaid plum bags contain 3 muted coral bags, 1 dim brown bag, 2 plaid aqua bags, 1 vibrant blue bag.\n' +
    'muted black bags contain 5 light blue bags, 3 clear salmon bags.\n' +
    'dotted white bags contain 3 shiny salmon bags, 1 faded maroon bag.\n' +
    'drab coral bags contain 3 striped gold bags, 4 shiny aqua bags, 5 wavy red bags.\n' +
    'dotted salmon bags contain 4 drab black bags, 2 light aqua bags.\n' +
    'mirrored indigo bags contain 3 wavy orange bags, 5 posh plum bags.\n' +
    'vibrant violet bags contain 1 striped lavender bag, 1 muted purple bag, 2 drab silver bags, 5 pale olive bags.\n' +
    'plaid teal bags contain 4 shiny teal bags, 2 wavy turquoise bags, 2 vibrant aqua bags.\n' +
    'dull violet bags contain 5 light coral bags, 1 vibrant tan bag.\n' +
    'faded crimson bags contain 3 dark chartreuse bags, 2 vibrant cyan bags, 3 mirrored cyan bags.\n' +
    'posh bronze bags contain 4 plaid lavender bags, 3 shiny gold bags, 5 mirrored coral bags, 2 shiny indigo bags.\n' +
    'clear olive bags contain 2 muted gray bags, 2 dark red bags, 5 clear brown bags, 5 bright silver bags.';

const input2 = 'shiny gold bags contain 2 dark red bags.\n' +
    'dark red bags contain 2 dark orange bags.\n' +
    'dark orange bags contain 2 dark yellow bags.\n' +
    'dark yellow bags contain 2 dark green bags.\n' +
    'dark green bags contain 2 dark blue bags.\n' +
    'dark blue bags contain 2 dark violet bags.\n' +
    'dark violet bags contain no other bags.';

const part1Solution = (input) => {
    const map = parseInput(input);

    const dp = {};
    let count = 0;
    const keys = Object.keys(map);
    const requiredBag = 'shiny gold';
    for (let i = 0 ; i < keys.length; i++) {
        if (map[keys[i]].includes(requiredBag) || doesBagContainRequiredBag(map, keys[i], requiredBag, dp)) {
            count++;
        }
    }


    console.log('count ', count);

};

const part2Solution = (input) => {
    const map = parseInputForSolution2(input);
    let totalBags = 0;
    const dp = {};
    const requiredBag = 'shiny gold';
    const containedBags = map[requiredBag];
    for (let i = 0; i < containedBags.length; i++) {
        totalBags += containedBags[i]['quant'] + (containedBags[i]['quant'] * countTotalBags(map, containedBags[i]['containedBag'], dp));
    }

    return totalBags;
};

const doesBagContainRequiredBag = (map, key, requiredBag, dp) => {
    if (!map[key]) {
        return false;
    }
    if (map[key] && map[key].length === 0) {
        return false;
    } else if (dp[key]) {
        return true;
    } else if (map[key].includes(requiredBag)) {
        dp[key] = 1;
        return true;
    }

    const containedBags = map[key];
    for (let i = 0; i < containedBags.length; i++) {
        if (containedBags[i] === requiredBag || doesBagContainRequiredBag(map, containedBags[i], requiredBag, dp)) {
            dp[key] = 1;
            return true;
        }

    }

    return false;
};

const countTotalBags = (map, key, dp) => {
    if (map[key].length === 0) {
        dp[key] = 1;
        return 0;
    } else if (dp[key]) {
        return dp[key];
    }
    let count = 0;
    for (let i = 0; i < map[key].length; i++) {
        const quant = map[key][i]['quant'];
        count += quant + (quant * countTotalBags(map, map[key][i]['containedBag'], dp));
    }

    dp[key] = count;

    return count;
};

const parseInput = (input) => {
    const rules = input.split('\n');
    const map = {};

    for (let i = 0; i < rules.length; i++) {
        const bags = rules[i].split(/\scontain\s/);
        const key = bags[0].replace(/\sbags?/,'');
        const containedBags = bags[1].split(',');
        const val = [];
        for (let j = 0; j < containedBags.length; j++) {
            if (containedBags[j] === 'no other bags.') {
                continue;
            }
            val.push(containedBags[j].replace(/.?\d\s|\sbags?|\./g,''))
        }
        map[key] = val;
    }

    return map;
};

const parseInputForSolution2 = (input) => {
    const rules = input.split('\n');
    const map = {};

    for (let i = 0; i < rules.length; i++) {
        const bags = rules[i].split(/\scontain\s/);
        const key = bags[0].replace(/\sbags?/,'');
        const containedBags = bags[1].split(',');
        const val = [];
        for (let j = 0; j < containedBags.length; j++) {
            if (containedBags[j] === 'no other bags.') {
                continue;
            }
            const quant = parseInt(containedBags[j].match(/\d+/)[0]);
            const containedBag = containedBags[j].replace(/.?\d\s|\sbags?|\./g,'');
            val.push({quant, containedBag})
        }
        map[key] = val;
    }

    return map;
};

//console.log(part1Solution(input));

console.log(part2Solution((input)));