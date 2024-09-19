var projectData = {
    "name": "Circles 3D",

    "ytvideo": "https://www.youtube.com/embed/NSw047Ojixc",
    "duration": "12 Months(on off on my spare time)",
    "platform": "Android, iOS",
    "language": "C#",
    "engine": "Unity",
    "other": "DOTween, Blender, Gimp",
    "team": "Solo, Freetime project",

    "images": [
        {
            "src": "data/circles3d/images/image_1.png",
            "thmb": "data/circles3d/images/image_1.png",
        },
        {
            "src": "data/circles3d/images/image_2.png",
            "thmb": "data/circles3d/images/image_2.png",
        },
        {
            "src": "data/circles3d/images/image_3.png",
            "thmb": "data/circles3d/images/image_3.png",
        },
        {
            "src": "data/circles3d/images/image_4.png",
            "thmb":  "data/circles3d/images/image_4.png",
        },
        {
            "src": "data/circles3d/images/image_5.png",
            "thmb":  "data/circles3d/images/image_5.png",
        },
        {
            "src": "data/circles3d/images/image_6.png",
            "thmb":  "data/circles3d/images/image_6.png",
        },
    ],

    "text":  `
    <br>(I have made a couple of updates after that video that improved the feeling in the game, the player/ball being less rigid and the camera follow is better and small ui changes).

    
    <br><br>Decided to make a mobile game on my free time, and this is the result!
    <br><br><a class="videolink" target="_blank" href="https://play.google.com/store/apps/details?id=com.holycat.circles3d">Google Play <img src="icons/new_tab_icon.png"/></a>
    <br><a class="videolink" target="_blank" href="https://apps.apple.com/se/app/Circles%20Ball%20Run%203D/id1549586089">App Store <img src="icons/new_tab_icon.png"/></a>

    <br><br> The goal of this project was to make a simple mobile game that i could finish pretty quick... and as side projects do(or mine atleast) they drag out on time and you kind of end up swapping projects a some times.

    <br><br> I wanted to have all levels saved as json files, so i could easly do fetching of new levels from a server if i ever wanted to, so I made a basic level editor that saved to json (that could be implemented in game since its runtime - wich is also why i used json instead of asset bundles).
    <br><br> I made 60 levels in total with 3 diffrent background/areas 20 levels each.
    <br> The player unlocks a new "skin" every 5 10 20 levels in a "collection".

    <br><br> There is also a small localization system that just loads the text strings from an json file, there is a localization manager that loads the file and a "localized string component" that listen to language change so it can update when player changes language. 

    <br><br> I tried to keep the apk size down as much as possible, so all the assets are pretty much just flat shaded with small textures/no textures and low poly count, the apk size ended around 14-15mb wich im happy with for a unity project.

    <br><br>This is the first side project that i have actually stuck with and finished, so even if its not perfect im happy with it :)

    <br><br> Bullet points:
    <br> - Localization System
    <br> - Released on both iOS & Android
    <br> - Apk size below 15mb
    <br> - Level System
    <br> - Unlock System
    <br> - Level Editor
    <br> - Player Controller (Modified version from Sebastian League´s tutorial, see video)
    <br> - Icons(Simple ones)
    <br> - 3D modeling(Simple ones)
    <br> - Animations(Simple ones)
    <br> - Custom shaders
    <br> - Mesh Genereation
    <br> - Unity Ads
    <br> - Unity Analytics
    <br> - DOTween
    <br> - 60 Levels
    <br> - UX Design
    <br> - Game Design

    <br><br><br>Also made an video talking about the project, if it does not show above here´s a link:  <a class="videolink" target="_blank" href="https://www.youtube.com/watch?v=NSw047Ojixc"> YouTube Video <img src="icons/new_tab_icon.png"/></a>
    
    `
};