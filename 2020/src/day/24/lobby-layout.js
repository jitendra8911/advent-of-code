const testInput = 'sesenwnenenewseeswwswswwnenewsewsw\n' +
    'neeenesenwnwwswnenewnwwsewnenwseswesw\n' +
    'seswneswswsenwwnwse\n' +
    'nwnwneseeswswnenewneswwnewseswneseene\n' +
    'swweswneswnenwsewnwneneseenw\n' +
    'eesenwseswswnenwswnwnwsewwnwsene\n' +
    'sewnenenenesenwsewnenwwwse\n' +
    'wenwwweseeeweswwwnwwe\n' +
    'wsweesenenewnwwnwsenewsenwwsesesenwne\n' +
    'neeswseenwwswnwswswnw\n' +
    'nenwswwsewswnenenewsenwsenwnesesenew\n' +
    'enewnwewneswsewnwswenweswnenwsenwsw\n' +
    'sweneswneswneneenwnewenewwneswswnese\n' +
    'swwesenesewenwneswnwwneseswwne\n' +
    'enesenwswwswneneswsenwnewswseenwsese\n' +
    'wnwnesenesenenwwnenwsewesewsesesew\n' +
    'nenewswnwewswnenesenwnesewesw\n' +
    'eneswnwswnwsenenwnwnwwseeswneewsenese\n' +
    'neswnwewnwnwseenwseesewsenwsweewe\n' +
    'wseweeenwnesenwwwswnew';

const realInput = 'seeseesweenwseseseeneneseseseseseswse\n' +
    'nwseswswswnwnwsesweswswwsewwneswswswnw\n' +
    'wwnwewswwwnwwwwwenwwsewnwww\n' +
    'neswnewsenwneswneneeswswwneenene\n' +
    'wwsenwwwesenewswswnwwwwswewwwnw\n' +
    'nwwwswnweswseswweswneeswwwwwww\n' +
    'seseswswswswswswswwseswneseswnwseesw\n' +
    'swswwseseswswswswswswswswwenwnwwswwsw\n' +
    'swnwnenewnwenwswsewnenwnweeswneneswsw\n' +
    'swwnenwwwnwnwnwseseewnewwwenwew\n' +
    'nwnenenwnwnenenwnwnewnenwnwnwnwsenwsene\n' +
    'swswswswswswswswswswseswswne\n' +
    'wswwnwsewsewnewnwnwwnewnwnenwnwnw\n' +
    'swenwnenwnwnesenwnenenwnwnwnwnwnwnenwwne\n' +
    'nwwnwnwnwwnwnwnwnesewseswewnweswnwnw\n' +
    'swseswswsenesesewseswswseneswsenweswsesw\n' +
    'wnwnwnwnwsenwnwenenwwnenwneswnwnwwsew\n' +
    'nwnenenenewseneneneenwseenwweswnesw\n' +
    'eseeseneweewesesewesesesewenee\n' +
    'swnweseswwseseseswswsesweswswnwnwsweswse\n' +
    'enwneseeswneseeseeeenesesewsewee\n' +
    'seseswesesenwesenwseswneseseseseseswe\n' +
    'esewswseseseseseswseseesesesesenesewse\n' +
    'neseseseewseseseseseewesewseeesee\n' +
    'nwnwnesenwnwswwnwnwnenwswwnenesweeee\n' +
    'wnwnenenwnwnwnenwnwwsenwnwsenwnwswnenw\n' +
    'neswswswswswswwnesweswswswnwseewswwsw\n' +
    'senwwnewnwnwsenwwwwnenwnwswnenwnenwswnw\n' +
    'seswneneweeweenweneenenenwseee\n' +
    'nenwnwwswwnwswenenwseeenwnwswwnwnwsew\n' +
    'nenwnwewswnwsenewwnwnwswwnwnwwnwse\n' +
    'nwsenweswnwwnwnwneenewnwnwwnwnwnwsw\n' +
    'eseneweseeseeeseseeeewesesesee\n' +
    'nwneseeeweneswnwesweeneneeenenese\n' +
    'wswswswwswwswswneswswnwseswwswswwsw\n' +
    'senwnweeswenweenwenwseneeseswseee\n' +
    'wnenwnwnenwnenwnenwnenwnwe\n' +
    'seswwenwneswwsewswnwseenwnwesenew\n' +
    'neeneeseeneenwneeeneneesenwenene\n' +
    'nenweswnwswswseeswswneeswnewenwwwsw\n' +
    'nenenewnenweswneneswsenwnewnee\n' +
    'nwswsweswenwswswswswseswswwswseeswswse\n' +
    'nweeswswnenwnwenenewnwswswnenene\n' +
    'swnwnenesweenwnenenenwnenwnwnwnenewne\n' +
    'sweswswswswnewswswswswnewswswwswswsw\n' +
    'nwnwnwwewsenwnwnwnwwnwnwwnwnwnwwnw\n' +
    'senenwnenenenesenwnwnwnenenenewswwnwsw\n' +
    'sewnwsweswwwwwwewnwwsewwwnesw\n' +
    'eeeseeneenenwswswenwee\n' +
    'nwseseeeenwseseeswseseese\n' +
    'wwneseneneneneneneseneneneneneenenene\n' +
    'eeeweeseeeeeeesweeeseene\n' +
    'eeeneneeneweneseeneneeenenenewe\n' +
    'wnwsewwwwwwwwnewwnww\n' +
    'nwnwswnwnenwnwneswnwsenwnwsenw\n' +
    'newewseswsenwseswsesenwsesesenwseneswse\n' +
    'weesewseeeeeseeseeeeswesenwe\n' +
    'nwnwnwwwsenwnwnwwnewnwsewwnwnwwnwse\n' +
    'senwseseeseeeeeseseseesesesenw\n' +
    'enenenenenenenenenenwneneneneswneswnenwnw\n' +
    'wswswwwnwnewswwsewwseeweneesww\n' +
    'sewwnewnwwwwwwwwsewwwwnwww\n' +
    'enweeneeeeeneesweeneneeneswsenw\n' +
    'swswswswswswswswsweswswswswwswswswnene\n' +
    'wewwnwnwswwnenwswnwneswnwnweenwnwsee\n' +
    'nwnenenenwnenenwnesweneneneseneewswnew\n' +
    'nwwswnwswewseneewswnwnwenenwwww\n' +
    'wswwnenewesenwwswwsewnenewswwwww\n' +
    'wwwwnwwwwwewwnesewwwwwsww\n' +
    'senwwwseesesenwseseseneseseseesenwswsw\n' +
    'sewseseseseswswsenwseseswnwsesesenesesw\n' +
    'neswneneneneeneenenwneneneeneee\n' +
    'eneenwnenewenwsweswnenwesee\n' +
    'swnewnwnwnwneewsewnwenwnwwwewswwse\n' +
    'eeeeeeeeeeeeeeesenwwse\n' +
    'swswswwswswwwnesewwswnewswwwnewsw\n' +
    'nwwwwswwswwwswnewswwee\n' +
    'neseswnwseswswnwseswswseseswswswseenwse\n' +
    'wseewwwwwsewwwwnewwwwnwne\n' +
    'nenwnwswnwnweenwnwnwnwnwnwnwwnwnwnwnw\n' +
    'wewwnwwwnwnwesewnwwnwnwwnwnwwnw\n' +
    'nwnewwwwnwswwnwnwnwewwnwnwwsenwwnw\n' +
    'eewneeeeeeeneeee\n' +
    'wseseseswseenesenwwsesesesesesenesesese\n' +
    'eeeeeweeeeeneenene\n' +
    'newswneeneeneneenenesenesweswnenee\n' +
    'seswewesenesenenesewsenwwswese\n' +
    'nwswnwnwnwnwwnwneenwe\n' +
    'nenwnwnwnenwnwsenwnwnwnwnwwnwnwnwnwnwse\n' +
    'neneneeswswenenenenwnenwwseswswenw\n' +
    'eeenwsenwnwseseesweeeseswewe\n' +
    'nwwsenwnwnwsenwnwnwnwsenwwwnwnewnwnenw\n' +
    'neseeeeenwneeeneeseenweneeee\n' +
    'nwnwwnwnwwewnewnwwnwnwsenwsenwwsww\n' +
    'nenwnwnwenwwseneswwnwnwnesenwenenwnwwnw\n' +
    'swsweneeeenweeseseeeeeeneenwsw\n' +
    'nenwnwnwseswsenwnwnwnwnwnwnenwwnwnwnwnwnw\n' +
    'senwwseenwwsewnenwwnenwnesewnwnwsee\n' +
    'nenenwneneeneneneswsenenenewnenene\n' +
    'nwswneewenwwneseweneneseneseswsesww\n' +
    'nwnewswesenwseswswneswswwswnwswwswsesw\n' +
    'wnwnwnwwsenwwwwwwwnewnewnwnwwnwse\n' +
    'wewswsewswnwwswswwwnwsewwnewsww\n' +
    'nenwnesenwnewnwnenwnwnenenwnenwswnenwnwene\n' +
    'swswwseswswswswswnwnewswswswwswswsww\n' +
    'nwnwswswnenenwnwsenenwnwnwwnenenwnenenwnw\n' +
    'seswswseswswseeswswswswseswseswnwesww\n' +
    'senewwswwewnewswsenewseenewsww\n' +
    'swnwseewnwnwswwnweseeseeewseneeee\n' +
    'enwnesenenenwneswneneswwnesenwnenwnewnwne\n' +
    'wwwwwwenwwwwwwsewwwwww\n' +
    'eweswnwnwseswwweswwneewnesewnenew\n' +
    'swseswswswseseswswneswswswswseswswswnwswe\n' +
    'seswswwsenwswenesw\n' +
    'nenwneenwnwswnenenwnenwnwnenwwnwnwnenwe\n' +
    'eewewneneweneeswneeseew\n' +
    'nwswneswwswsewswswwswewwswswwseswswne\n' +
    'sewsesesesenweseseweeswseseenw\n' +
    'nwswseswneseewwswswswneswenwswnwwsw\n' +
    'swseseswseseeswseswwwswseseseneesesenwse\n' +
    'wswsewwswwsewneeswwnwewwwwww\n' +
    'nwswseeswswseswnwnwnweneswswswswswwwsesw\n' +
    'swweseseseswneswswswseseswsesesenwswswsw\n' +
    'nwnwnwnwnwnewsenwnwnwsenewwwnwnwnwnw\n' +
    'enewseeewnwswnwseswnenwnwneenenesenene\n' +
    'wneswswswnwneesenwneeenesw\n' +
    'wswwwswnewswswwnewswswswsewwww\n' +
    'swnwseswseseenewswnwneneseneswsweswwsw\n' +
    'eeeeeeeweseneweswseenwseseswe\n' +
    'seswseseseseseseswwswswesese\n' +
    'eseeseseesenwseesesesese\n' +
    'swneswnwesesweseseswswsewswswsesenwse\n' +
    'newwnesewsewewwenwwsw\n' +
    'nenesenenenenwneseneneneneenewne\n' +
    'neswnesenwneneneewnenenenenenenenenene\n' +
    'eneeseeweseseseeseee\n' +
    'swswwwswnwnweswwse\n' +
    'neseenwnesenwnesenwsesewsesewsweeseese\n' +
    'enenenenenwnwnwnenesenwnwswnwnwnene\n' +
    'wwwewswewnewnwwwwwwwwsww\n' +
    'nwnwnwwsewnwnwnwwwsenewnenwwwnwnw\n' +
    'sweeseneeeeeweswewenwseesenenw\n' +
    'weswwnwnwwwsewwwwwewwwwnw\n' +
    'eeseneeesesweee\n' +
    'enweseneweeswneseseswswneesenesw\n' +
    'nwnwnenwnwswnwneenwneewnwse\n' +
    'nwnwsenwseenwseseeswewsweeseeenwe\n' +
    'swneswseswenwneswswsenwswswseswswswneenwsw\n' +
    'sewswnwwnwnewnwwswswewnewnewwnw\n' +
    'nenenweswswswswswswsenenwswswseswewswsw\n' +
    'sesenenwnwnenesenesewwnenenwnenenwsew\n' +
    'sesesewseseseeseseseseesesenesesesewse\n' +
    'neneneneneswnenenenenenwnenenenwneswne\n' +
    'wwsweswswweneseseswswsenwewneew\n' +
    'eeeneeneneeenweeeeeseeneswe\n' +
    'nwswswswnewswswwweswswwswnewsewswsw\n' +
    'nwnwwnwnewnwsenwnwnwwenwnwswwnwnwnwnw\n' +
    'sesenweenwseneeeseeseswswsenesesesw\n' +
    'wwswwwnwwwnwwwwwwwnwwnwnwsee\n' +
    'wwseswsweseneswseswswswswswswsweswnenw\n' +
    'wneeeesweneenenewenenese\n' +
    'swswenwnwswnwenwnenenwnwswnenwnenwsenw\n' +
    'wwswwewnwnwswewnwsewseseswnwnenew\n' +
    'nwnwwnwnwwwnwnwew\n' +
    'swnesweswnewwswnwsweswsenwswswswseene\n' +
    'seseswswwsenwnenwnenenwnwnwnwnenwsesenenw\n' +
    'swswwsweswwswwwswswweewswwwnw\n' +
    'eneeneeeeeeeswseeeeeswnwswe\n' +
    'nwwwwnesewwnwwnwnwnwnwse\n' +
    'neswseswswswseseswswsenwewnwswswnwswswe\n' +
    'seswswswswnweswswsweseswsewswswseswsw\n' +
    'swsesenwseseseswsenesew\n' +
    'swnwnwnwnwnwnwnenwnwenwnwwnwwnwsenwnwnw\n' +
    'seneseswswswseseeswseseswnwswsesesesww\n' +
    'wwwnwnwnwnwwnewnwnwwsenwnwnwnw\n' +
    'wsesenwsweneneseswnewswnewseneesww\n' +
    'eeneneneeneseneeeeeswnwneneeene\n' +
    'eneewswnesewneeeeneneneeenenenee\n' +
    'neeeswnwewneewneswswseswwseneewenw\n' +
    'enwswswsenewsewwswwnwwwswsewww\n' +
    'swswnweenwnwwnwnwnwwnwnwenwwnwswnenw\n' +
    'sweeseeenwneeseeeeeseseseesee\n' +
    'neneenwnenwnenwseenenenewnwswnwsww\n' +
    'nwneneneenenwnenwnwsenwnenwnwnwnwwnwswnwne\n' +
    'nwnwnwnwnwnwwnwnwwnwnwenwwnwnwwswse\n' +
    'swsewsesenwnwseswseesw\n' +
    'seneeneneneneneneneswneeneneeweenee\n' +
    'senwseswnwswwnwneswwseswswwswswswsesw\n' +
    'nenwnwnenenesenewnenwsenesesenenenwnene\n' +
    'wwnwwwewwswseswwwswwneewwwsw\n' +
    'sesesweseseswseswswseeseseseswnwsenwsese\n' +
    'nenewneneneneneswnenenwnesenenenenenenene\n' +
    'wnwnwwnwwnwwenwwnwwwwnww\n' +
    'wnwnwenenwnwneswnwsenwwnwwwwnwww\n' +
    'sweneeneewswnwnwsenenenewweswseew\n' +
    'wswenwnwnwnwnwnwnwnwnwnwnenwwnwnwnwnw\n' +
    'eeneeswnwswswseneesweeenweeenenenw\n' +
    'eswsweeeeneeeeeeneenweeee\n' +
    'wswwneenwsewsewswnwseneswewneewsw\n' +
    'nwenenenwswwswsenwnwnwneswwnwnwwnwnw\n' +
    'sesesesesesesesesesesesesenwsese\n' +
    'eseesweseewseseseeneseseseeeesew\n' +
    'seswnenenenenenenwsenewwnesenenenenene\n' +
    'neenwsweeeenwsewnewseeweeeene\n' +
    'sewenewwwwsewneneseneswseseeesese\n' +
    'seswswseswswswseswswseweeswweswnwswse\n' +
    'swwseseeeeeeeenesesewnwneeesese\n' +
    'eseneeeswswwnwwnesewneswwenwsenw\n' +
    'seenwnweeeeseeesweseeeeeeswse\n' +
    'seneseseseseseseswnesenesesewsew\n' +
    'nenenenewswneneneswsenenenewseeneneswne\n' +
    'sesenesesenewwesenwnwseseswswswseesenw\n' +
    'sewseseeswsenwwnweseneeseseeeswenwe\n' +
    'sewneseweseeeeseseseseseeseeesese\n' +
    'nwnenwnwneneswnwnenenesenenenwwnwnenenwne\n' +
    'senenwnwneewnwseeenwswswwnwnw\n' +
    'wwswwnwwsweseswwwnwsweswwswswsw\n' +
    'sewswswswwneseswseneswnwsweseswwseswsee\n' +
    'esesweseseeswsenenwseseeeseseewsesese\n' +
    'wwwwwsewwwwwwswwwnw\n' +
    'enenwswneneswnewneneseneenenenwswenene\n' +
    'sweseenwneneenwwswneneneneneneeene\n' +
    'nwsenweesenwseenewseseseswenwewse\n' +
    'nwswnwnwnwnwnwnwnwnwnwnwnwnwsenwnwe\n' +
    'nwnwnwnwswesenwnwnwnenenwnenenwnenenenw\n' +
    'swswswewswswswswnwswswswswswwweswswse\n' +
    'wneseswseseseswseneeseesenewnwnwnesw\n' +
    'eswnewnenwswenewneneneenenwneneseswne\n' +
    'nwswweseseeesenwseseenesesewneseesw\n' +
    'neswswesweeeesweneneeswenenwnwsewe\n' +
    'nwnenwnweeeseneseseswesenwenesweneenw\n' +
    'esweneeneeeeeneeeeeeweee\n' +
    'neeneswnewnesewewesenwnenesenenwnene\n' +
    'wwnwwwwwwnwnwseesenwnenwwnwwnw\n' +
    'eswwwnwseneewswswseneswwnwwnwenwne\n' +
    'swswswswwnenewswswswswswwswswneswswsw\n' +
    'swnwswswswseswswswseswswsw\n' +
    'seseesesesesenwseseeseseseesesewe\n' +
    'seswneseswsesweswseseseseswsewswswswsw\n' +
    'swswswnwsenwswsesenwnwnwswseswsesweswse\n' +
    'swseswswseweseswswsesw\n' +
    'nenesenenenenenenenewweneneseenenenene\n' +
    'swseswnwwswsewnewsenwneswswswweww\n' +
    'neeeeweeeeeee\n' +
    'seseseswswsenwseseseseseseswse\n' +
    'enenenwnenenenenenewnwsenwnwswswenesw\n' +
    'nwneseseesweseseeeeswenwseswnwsesesw\n' +
    'wwnwwwseneswwswwswewwwwwwwsw\n' +
    'nwnwswseenwnwenwswswnwnenwneenwwneswese\n' +
    'sewnwwnwnwsesewnewwwwwwewwsww\n' +
    'nwswweswswwswsweeswswseswnwwsww\n' +
    'wewwsewwwwwwwsenwwwwwnwnwwne\n' +
    'swswswswwnwswswswswswnwsweseswswswsww\n' +
    'wnwwnwswnwwnwewwneswswwwenwww\n' +
    'newnenenwwneneswnenwnenweneesenwnwnene\n' +
    'wneswsweswneeneswneneweneeenenee\n' +
    'senwesesenwseseswswseseseseseseseswsese\n' +
    'wwwswswenewsenweswwwswwwnewswnw\n' +
    'nwswswswwswwnwneenwenwewewenwswne\n' +
    'seseseswseenwseswenwneseeweeseeee\n' +
    'ewseseseseseeeeeeseeseeseseenw\n' +
    'neswneneenwnenenenenenenenenewnw\n' +
    'swswwwwwwnewswwsenewnenewwwwsw\n' +
    'swweswswswnewwnwwswwswwenw\n' +
    'senenwwnwnwnwnwesenwnenwswnwnwnwswnwnwwnw\n' +
    'nwnewswwwwnenwnewnwsenenwwwnwnwswsw\n' +
    'nesweeesenwsweeeeesenweenwnee\n' +
    'swwwwewnwwswwseswwweneewwnw\n' +
    'nenwnwenwnwnenwwwsenwsewnwnwwnesw\n' +
    'wseseseseneswnenenwsesesesenwswsese\n' +
    'eenenewneneenweneeswnee\n' +
    'wwwseewwnwnwnwwwwnwnwwsenwswnwnw\n' +
    'newnenweswswnwneseswnenwseneseswnwnee\n' +
    'seneseswseseswswesenwswswswswsese\n' +
    'seesewenwnenwnenewsw\n' +
    'nenenenwnwneswnwnwwsenenwnwnenwnw\n' +
    'neeeeeneneneswwnese\n' +
    'weneneeeswseneeweeneeneeeseeee\n' +
    'seswswnesesesweseswwseswswnwswswseseswsw\n' +
    'eeeseesenenweweneweeenwewwsw\n' +
    'enwnwseseseeewnwsweswnenenwneswew\n' +
    'wnweneenwsenesweneeeeneeneenesee\n' +
    'neswsenwnesenwswwswsenwwsewwwsewne\n' +
    'sewwwwnwsewwnewwwwewwwwww\n' +
    'swswseswswswseseswenwsesw\n' +
    'eeseeneeeenweweeeeeseseeee\n' +
    'nwnenwnwwenwwsewwwnwnwnwwwsewwnw\n' +
    'eneswwneneneneneneneneneseeneneenwne\n' +
    'nenenwewneneneeneswswnenenenesenenene\n' +
    'wnwsweswswswnwnwswenwseseseeswswswnwse\n' +
    'sewnwwnwwnwnwsewnwwnwsewwnwnwwnew\n' +
    'sweswwnwswswwewswnewnwnwsewswesesw\n' +
    'seewnewwwnwnewswwwnwwwwsenwww\n' +
    'swswswneswswswswwswswswseenwswswsweswse\n' +
    'wnesenenenesweseewwneenwnwsweene\n' +
    'senwseswswseswseseseswseseseseswswswnwse\n' +
    'wsenweseseseswneneseswseseseneeswese\n' +
    'esenwsewweseesewseeeswnwesesese\n' +
    'wwswseneswwswwwswswww\n' +
    'seeeewseeseeeneseenesweesesenw\n' +
    'nwnwwwnwnwnwnwnwwnwweswwnwnwwwee\n' +
    'neseeswsenwwseseeeeweneeweseee\n' +
    'nwnenenenenenenenenwswnenenw\n' +
    'nwnwwnweswnwnwnweseenwswnwnwnweswnwwne\n' +
    'newneeneneneswwnwnesenenenewsenenesene\n' +
    'wwswsenewsewwnenwwwewweswewnw\n' +
    'swwneeswwsewnwwwwswwwnewwwwsww\n' +
    'nenenenewneseneeenesewwneswenenwse\n' +
    'nwnwneswnwenwnenwneenenwnewnesenwnwnww\n' +
    'wnwsweswnwsweneeenenenwneeseenwesw\n' +
    'swnewsweswswwswwneswswswsewswswwww\n' +
    'nwnwnwwnwenwswnwwswwwnweenwswnwnw\n' +
    'wwsenwwwnwesenwnwnenwnwwwsweswnww\n' +
    'swwnwenwnwnwnenwnwswnwnwenwnwswnwnwwnenw\n' +
    'seneseneseswswwseswswenwswswswseswneswnwe\n' +
    'seseesenwseswseseswsesesesesenw\n' +
    'swneswnwwnwswwwseswsesww\n' +
    'wnewwwnewswswsewswwwwwwwnesw\n' +
    'nwnwnenwsenwnwnwwswenwnwnwnw\n' +
    'weeswnwswwseeswseeswswswnwsesewsw\n' +
    'wnwwnwwwsewswnewnwwwnwwwwwe\n' +
    'seseneseseseseseseseseseseseneseswsesew\n' +
    'eeneseeewseeseeesweeeeeenee\n' +
    'nwneswnwnwnwnwnwnwnwnwnenwnenw\n' +
    'sesenwseenwswseeeeenwswweesesewnwse\n' +
    'swseseseswswswnesesweswsenw\n' +
    'senwnenwnwwnwnwsenenenwnenwnwsenewnwnw\n' +
    'nenwwneewwswnesenwsesenwsenwnenwsenwse\n' +
    'ewneneswnwswsewwsenwsewnenewnwnwwsw\n' +
    'swswswseswswwnwseswneeswseswsw\n' +
    'eweneeeeeenwseeneswnwseeeneswne\n' +
    'seseseseseseseeseenenewsesenwsesesew\n' +
    'wswswwwswswwwwswswwwseswnesw\n' +
    'swwwswwwneswswwswwneswwwswwww\n' +
    'eswseseswnesewnwswwseeswswswswswsesesesw\n' +
    'swneneeneeneeseeweenwnweenenese\n' +
    'wwnewswswswwswwwsewswswseswnenew\n' +
    'eeeswneneneneneeeneneene\n' +
    'neswnwenenwnwnwnenwnwse\n' +
    'seweseeneeseeese\n' +
    'nwswnwweneenwsenwseswswwnwswneneneene\n' +
    'nwnesenwnwnenenwnenwnenwwwnwswnwenwnw\n' +
    'nenenesenenesenenewnenenenenwnenenenwne\n' +
    'esesesewseeseeesesewsesee\n' +
    'neneseswnesenewwnenewnenwenenenene\n' +
    'swswwwewswwwswwwwswswwwswsene\n' +
    'nwnwnwwewnwnwnwnwnwnwnwwnwseewwsw\n' +
    'neswneenweseneenweneweseesenwweee\n' +
    'nwwneneeenewenenenewneneneneseseneese\n' +
    'sweneneeeweneneeeenene\n' +
    'nweneeswnwnwenwswnewseswswnew\n' +
    'neneeeeneeneneswswnwenenwswenwsee\n' +
    'eeswneeeeeeneenweswseeeeee\n' +
    'senewswswseseseseswseswseswswsesese\n' +
    'seewnwseseeeeeeeeeeeeseese\n' +
    'wwnwwnwwwswswwnwseenewwnwweww\n' +
    'swwwwswwswswwswnwswwswswew\n' +
    'nwseeseeenwsweseenesesesewnwesesee\n' +
    'swswswswswnwsweseneswswnwwswswsw\n' +
    'eenwnweeeeseeeneeeeseeeew\n' +
    'swwswswswnwswswwswswswseswswswswswesw\n' +
    'swnwswswwneeweneseswwsenwswswnewe\n' +
    'nweenwseeseseewswneewseseeesee\n' +
    'swneswneneeneenwneene\n' +
    'wwwnwneswwwwwnwwwwnewwswww\n' +
    'nesweeeeewseneenw\n' +
    'nwnwnwsewnwwnwnwnwenwnenwnwwwwwww\n' +
    'newseneeneneneenenenenenenwnewnesw\n' +
    'nwnwenweswnwnwnwnwesewswnewnwwseew\n' +
    'senwswswswswseewseneswseswseseswswswnw\n' +
    'nwsewwwwnewnwwwswenwwnwnwnwnww\n' +
    'seswwwwwswnewwwwswenwwswswsww\n' +
    'esweeenwenwnweeseeesweeeeee\n' +
    'seeseseseeswesesesenwsesese\n' +
    'swswwweneeweswwnewseswswwwnwewse\n' +
    'nweenenwseenenewnesweneswenwnesewsene\n' +
    'swneswswswswswswswswwswswsweswswswswsw\n' +
    'nwnwnwsewnesenwswnenwnwsesenwnwnwsenwnw\n' +
    'neseswsenwwnenwnwseswenenenenwwnewe\n' +
    'wseseeseseswseseseesesesesesesesenenwnw\n' +
    'newsenenwnwswnwwnwnwnwnwnenwwnwnwswwnw\n' +
    'eneswswneewweneneeeswneseneneeseesw\n' +
    'wwneswwwwwwsweswswwswwwseswww\n' +
    'sewnewnenwwwwwwwwwwswsewwww\n' +
    'nwnwnwnwswnenwsenwnenwneenesenewnenwne\n' +
    'sesenwsweeewnenenwnwswnwnwnwnwnwwsw\n' +
    'seseseswseseswneseneseseswenwsesenwseswse\n' +
    'wwnewnwnwsenwwwwnwnwnwnwwsenwwnwenw\n' +
    'swnwnwnenwnenenenwenenenwneneswnwnwnesene\n' +
    'nwwewwsewwneswwsesenewnewwwwnww\n' +
    'neewnenenweneeneeneneneeswnenenenene\n' +
    'swseswswswseeswwswsesesewseswnwseswnenesw\n' +
    'nenwneneneswnenwneenesenenenenesenwnewne\n' +
    'nenwsesesesesesesesesesesesewsesesesesese\n' +
    'sewswwnenwwnwesewwnwwwwwwewe\n' +
    'nenwnwwsenweswwnwnw\n' +
    'seeeeneenweeswneewnwneeneseene\n' +
    'nenenenenwnenenenenenwswnwnenwnenwe\n' +
    'seseeseswsenwseseesesewsesesesenwsenenw\n' +
    'seneeeseswnewnesenewwsewnwnenenwe\n' +
    'seenwnwnwswswnwsenenwnwwnwnweswnenewe\n' +
    'neenenenenenenewenenesewneneneee\n' +
    'nwswswswswwswwswneswswswsweswswswswwsw\n' +
    'neeneneneswneeeeeneneeeneneeswnw\n' +
    'swwswswseswswswswswwswswwwswneswswesw\n' +
    'swwseswwseswwnenwwswwswswnesw\n' +
    'wswswwswswenwnweswsenwnwwwswewsew\n' +
    'wnwnwnwnwnwnwnwnwnwnwnwnwnwnwnwenw\n' +
    'neeewesewswesewneswseeseseseenene\n' +
    'nwnwswenwneenwnwnwnwnwnwwnenwnwnenw\n' +
    'nwseesesenwesenwswswswnwswweeneswnesw\n' +
    'ewwnwsweeeewwweeeeswwnee\n' +
    'swwswneeeeneeeeeeeenwewesee\n' +
    'nwsesenwnwsewnenwnwswsenenwnewnwseenwnw\n' +
    'neneeneneeneswswenenenenwswnenwnenenene\n' +
    'neneswswnwnwnwnwweneneenenenwnwnenwnw\n' +
    'nwnwenwnwnwnwwnwnwnwswnwnwnesenw\n' +
    'wenweswwwwwwwwwwwnwnwwwwwse\n' +
    'sweneswsewwswsesweswswswswswnwsweswse\n' +
    'swswswswswnwseswswseswenwwswnesweswsw\n' +
    'senwseseeeeweenesenesweseeseeseswse';

const directionMap = {
    w: [-1, 0],
    e: [1,0],
    sw: [-1,-1],
    ne: [1,1],
    nw: [0,1],
    se: [0,-1]
};

const parseInput = (input) => {
    const tilesToVisit = input.split('\n');
    const regex = /se|sw|ne|nw|e|w/g;
    const mapOfTiles = {};
    mapOfTiles['0,0'] = 1;
    for (let i = 0; i < tilesToVisit.length; i++) {
        let currTile = [0,0];
        const tilePath = tilesToVisit[i].match(regex);
        for (let j = 0; j < tilePath.length; j++) {
            const dir = tilePath[j];
            currTile = [currTile[0] + directionMap[dir][0], currTile[1] + directionMap[dir][1]];
            const currTileId = currTile.join(',');
            mapOfTiles[currTileId] = mapOfTiles[currTileId] ? mapOfTiles[currTileId] : 1;
        }
        const tileId = currTile.join(',');
        if (mapOfTiles[tileId]) {
            mapOfTiles[tileId] += 1;
        } else {
            mapOfTiles[tileId] = 1;
        }
    }

    return { mapOfTiles }
};


const getNumberOfAdjacentBlackTiles = (mapOfTiles, currTile) => {
    const adjacentTiles = getAllAdjacentTiles(currTile);

    return adjacentTiles.reduce((acc, tile) => {
        const tileId = tile.join(',');
        if (mapOfTiles[tileId] % 2 === 0) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0)
};

const getAllAdjacentTiles = (currTile) => {
    return Object.keys(directionMap).map(dir => [currTile[0] + directionMap[dir][0], currTile[1] + directionMap[dir][1]]);
};

const livingArtExhibit = (mapOfTiles) => {
    const newMapOfTiles = {};
    const tileIds = Object.keys(mapOfTiles);
    for (let i = 0; i < tileIds.length; i++) {
        const currTile = tileIds[i].split(',').map(x => parseInt(x));
        const adjacentTiles = getAllAdjacentTiles(currTile);
        for (let j = 0; j < adjacentTiles.length; j++) {
            const adjTileId = adjacentTiles[j].join(',');
            if (!mapOfTiles[adjTileId]) {
                mapOfTiles[adjTileId] = 1;
            }
        }
    }
    const allPossibleTileIds = Object.keys(mapOfTiles);
    for (let i = 0; i < allPossibleTileIds.length; i++) {
        const currTileId = allPossibleTileIds[i];
        const currTileFrequency = mapOfTiles[currTileId];
        const currTile = currTileId.split(',').map(x => parseInt(x));
        const numberOfAdjacentBlackTiles = getNumberOfAdjacentBlackTiles(mapOfTiles, currTile);
        if (currTileFrequency % 2 === 0) {
            // Any black tile with zero or more than 2 black tiles immediately adjacent to it is flipped to white.
            if (numberOfAdjacentBlackTiles === 0 || numberOfAdjacentBlackTiles > 2) {
                newMapOfTiles[currTileId] = currTileFrequency + 1;
            } else {
                newMapOfTiles[currTileId] = currTileFrequency;
            }
        } else {
            // Any white tile with exactly 2 black tiles immediately adjacent to it is flipped to black.
            if (numberOfAdjacentBlackTiles === 2) {
                newMapOfTiles[currTileId] = currTileFrequency + 1;
            } else {
                newMapOfTiles[currTileId] = currTileFrequency;
            }
        }
    }

    return newMapOfTiles;
};

const getTotalNumberOfTilesFacingBlack = (mapOfTiles) => {
    return  Object.keys(mapOfTiles).reduce((acc, id) => {
        if (mapOfTiles[id] % 2 === 0) {
            return acc + 1;
        } else {
            return acc
        }
    }, 0);
};

const part1Solution = (input) => {
    const {mapOfTiles} = parseInput(input);

    return  getTotalNumberOfTilesFacingBlack(mapOfTiles)
}

const part2Solution = (input, days) => {
    let {mapOfTiles} = parseInput(input);
    let i = 0;
    while (i < days) {
        mapOfTiles = livingArtExhibit(mapOfTiles);
        i++;
    }

    return getTotalNumberOfTilesFacingBlack(mapOfTiles);
}

//console.log(part1Solution(realInput));
//
console.log(part2Solution(realInput, 100));